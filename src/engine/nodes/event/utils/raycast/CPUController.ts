import lodash_isString from 'lodash/isString';
import {EventContext} from '../../../../scene/utils/events/_BaseEventsController';
import {RaycastEventNode} from '../../Raycast';
import {Object3D} from 'three/src/core/Object3D';
import {Vector2} from 'three/src/math/Vector2';
import {Raycaster, Intersection} from 'three/src/core/Raycaster';
import {NodeContext} from '../../../../poly/NodeContext';
import {BaseObjNodeType} from '../../../obj/_Base';
import {Mesh} from 'three/src/objects/Mesh';
import {Points} from 'three/src/objects/Points';
import {BufferGeometry} from 'three/src/core/BufferGeometry';
import {GeoObjNode} from '../../../obj/Geo';
import {TypeAssert} from '../../../../poly/Assert';
import {Plane} from 'three/src/math/Plane';
import {Vector3} from 'three/src/math/Vector3';
import {ParamType} from '../../../../poly/ParamType';
import {AttribType, ATTRIBUTE_TYPES} from '../../../../../core/geometry/Constant';
import {object_type_from_constructor, ObjectType} from '../../../../../core/geometry/Constant';
import {CoreGeometry} from '../../../../../core/geometry/Geometry';
import {BufferAttribute} from 'three/src/core/BufferAttribute';
import {Triangle} from 'three/src/math/Triangle';
import {BaseCameraObjNodeType} from '../../../obj/_BaseCamera';
import {Vector3Param} from '../../../../params/Vector3';
import {Poly} from '../../../../Poly';
import {RaycastCPUVelocityController} from './VelocityController';

export enum CPUIntersectWith {
	GEOMETRY = 'geometry',
	PLANE = 'plane',
}
export const CPU_INTERSECT_WITH_OPTIONS: CPUIntersectWith[] = [CPUIntersectWith.GEOMETRY, CPUIntersectWith.PLANE];

export class RaycastCPUController {
	private _mouse: Vector2 = new Vector2();
	private _mouse_array: Number2 = [0, 0];
	private _raycaster = new Raycaster();
	private _resolved_target: Object3D | undefined;

	public readonly velocity_controller: RaycastCPUVelocityController;
	constructor(private _node: RaycastEventNode) {
		this.velocity_controller = new RaycastCPUVelocityController(this._node);
	}

	update_mouse(context: EventContext<MouseEvent>) {
		if (!(context.canvas && context.camera_node)) {
			return;
		}
		if (context.event instanceof MouseEvent) {
			this._mouse.x = (context.event.offsetX / context.canvas.offsetWidth) * 2 - 1;
			this._mouse.y = -(context.event.offsetY / context.canvas.offsetHeight) * 2 + 1;
			this._mouse.toArray(this._mouse_array);
			this._node.p.mouse.set(this._mouse_array);
		}
		this._raycaster.setFromCamera(this._mouse, context.camera_node.object);
	}

	process_event(context: EventContext<MouseEvent>) {
		this._prepare_raycaster(context);

		const type = CPU_INTERSECT_WITH_OPTIONS[this._node.pv.intersect_with];
		switch (type) {
			case CPUIntersectWith.GEOMETRY: {
				return this._intersect_with_geometry(context);
			}
			case CPUIntersectWith.PLANE: {
				return this._intersect_with_plane(context);
			}
		}
		TypeAssert.unreachable(type);
	}

	private _plane = new Plane();
	private _plane_intersect_target = new Vector3();
	private _intersect_with_plane(context: EventContext<MouseEvent>) {
		this._plane.normal.copy(this._node.pv.plane_direction);
		this._plane.constant = this._node.pv.plane_offset;
		this._raycaster.ray.intersectPlane(this._plane, this._plane_intersect_target);

		this._set_position_param(this._plane_intersect_target);
		this._node.trigger_hit(context);
	}

	private _intersect_with_geometry(context: EventContext<MouseEvent>) {
		if (!this._resolved_target) {
			this.update_target();
		}

		if (this._resolved_target) {
			const intersections = this._raycaster.intersectObject(this._resolved_target, true);
			const intersection = intersections[0];
			if (intersection) {
				this._set_position_param(intersection.point);

				if (this._node.pv.geo_attribute == true) {
					this._resolve_geometry_attribute(intersection);
				}
				context.value = {intersect: intersection};
				this._node.trigger_hit(context);
			} else {
				this._node.trigger_miss(context);
			}
		}
	}
	private _resolve_geometry_attribute(intersection: Intersection) {
		const attrib_type = ATTRIBUTE_TYPES[this._node.pv.geo_attribute_type];
		const val = RaycastCPUController.resolve_geometry_attribute(
			intersection,
			this._node.pv.geo_attribute_name,
			attrib_type
		);
		if (val != null) {
			switch (attrib_type) {
				case AttribType.NUMERIC: {
					this._node.p.geo_attribute_value1.set(val);
					return;
				}
				case AttribType.STRING: {
					if (lodash_isString(val)) {
						this._node.p.geo_attribute_values.set(val);
					}
					return;
				}
			}
			TypeAssert.unreachable(attrib_type);
		}
	}
	static resolve_geometry_attribute(intersection: Intersection, attribute_name: string, attrib_type: AttribType) {
		const object_type = object_type_from_constructor(intersection.object.constructor);
		switch (object_type) {
			case ObjectType.MESH:
				return this.resolve_geometry_attribute_for_mesh(intersection, attribute_name, attrib_type);
			case ObjectType.POINTS:
				return this.resolve_geometry_attribute_for_point(intersection, attribute_name, attrib_type);
		}
		// TODO: have the raycast cpu controller work with all object types
		// TypeAssert.unreachable(object_type)
	}

	private static _vA = new Vector3();
	private static _vB = new Vector3();
	private static _vC = new Vector3();
	private static _uvA = new Vector2();
	private static _uvB = new Vector2();
	private static _uvC = new Vector2();
	private static _hitUV = new Vector2();
	static resolve_geometry_attribute_for_mesh(
		intersection: Intersection,
		attribute_name: string,
		attrib_type: AttribType
	) {
		const geometry = (intersection.object as Mesh).geometry as BufferGeometry;
		if (geometry) {
			const attribute = geometry.getAttribute(attribute_name) as BufferAttribute;
			if (attribute) {
				switch (attrib_type) {
					case AttribType.NUMERIC: {
						const position = geometry.getAttribute('position') as BufferAttribute;
						if (intersection.face) {
							this._vA.fromBufferAttribute(position, intersection.face.a);
							this._vB.fromBufferAttribute(position, intersection.face.b);
							this._vC.fromBufferAttribute(position, intersection.face.c);
							this._uvA.fromBufferAttribute(attribute, intersection.face.a);
							this._uvB.fromBufferAttribute(attribute, intersection.face.b);
							this._uvC.fromBufferAttribute(attribute, intersection.face.c);
							intersection.uv = Triangle.getUV(
								intersection.point,
								this._vA,
								this._vB,
								this._vC,
								this._uvA,
								this._uvB,
								this._uvC,
								this._hitUV
							);
							return this._hitUV.x;
						}
						return;
					}
					case AttribType.STRING: {
						const core_geometry = new CoreGeometry(geometry);
						const core_point = core_geometry.points()[0];
						if (core_point) {
							return core_point.string_attrib_value(attribute_name);
						}
						return;
					}
				}
				TypeAssert.unreachable(attrib_type);
			}
		}
	}
	static resolve_geometry_attribute_for_point(
		intersection: Intersection,
		attribute_name: string,
		attrib_type: AttribType
	) {
		const geometry = (intersection.object as Points).geometry as BufferGeometry;
		if (geometry && intersection.index != null) {
			switch (attrib_type) {
				case AttribType.NUMERIC: {
					const attribute = geometry.getAttribute(attribute_name);
					if (attribute) {
						return attribute.array[intersection.index];
					}
					return;
				}
				case AttribType.STRING: {
					const core_geometry = new CoreGeometry(geometry);
					const core_point = core_geometry.points()[intersection.index];
					if (core_point) {
						return core_point.string_attrib_value(attribute_name);
					}
					return;
				}
			}
			TypeAssert.unreachable(attrib_type);
		}
	}

	private _found_position_target_param: Vector3Param | undefined;
	// private _hit_position: Vector3 = new Vector3(0, 0, 0);
	private _hit_position_array: Number3 = [0, 0, 0];
	private _set_position_param(hit_position: Vector3) {
		// this._hit_position.copy(hit_position);
		hit_position.toArray(this._hit_position_array);
		if (this._node.pv.tposition_target) {
			if (Poly.instance().player_mode()) {
				this._found_position_target_param =
					this._found_position_target_param ||
					this._node.p.position_target.found_param_with_type(ParamType.VECTOR3);
			} else {
				// Do not cache the param in the editor, but fetch it directly from the operator_path.
				// The reason is that params are very prone to disappear and be re-generated,
				// Such as spare params created by Gl Builders
				const target_param = this._node.p.position_target;
				this._found_position_target_param = target_param.found_param_with_type(ParamType.VECTOR3);
			}
			if (this._found_position_target_param) {
				this._found_position_target_param.set(this._hit_position_array);
			}
		} else {
			this._node.p.position.set(this._hit_position_array);
		}

		this.velocity_controller.process(hit_position);
		// this._set_velocity_param(hit_position);
	}
	// hit_position() {
	// 	return this._hit_position;
	// }
	// private _prev_position: Vector3 | undefined;
	// private _set_pos_timestamp = performance.now();
	// private _found_velocity_target_param: Vector3Param | undefined;
	// private _hit_velocity: Vector3 = new Vector3(0, 0, 0);
	// private _hit_velocity_array: Number3 = [0, 0, 0];
	// private _set_velocity_param(hit_position: Vector3) {
	// 	if (!this._node.pv.tvelocity) {
	// 		return;
	// 	}

	// 	if (!this._prev_position) {
	// 		this._prev_position = this._prev_position || new Vector3();
	// 		this._prev_position.copy(hit_position);
	// 		return;
	// 	}

	// 	const now = performance.now();
	// 	const delta = now - this._set_pos_timestamp;
	// 	this._set_pos_timestamp = now;
	// 	// multiply by 1000 since delta is in ms
	// 	this._hit_velocity.copy(hit_position).sub(this._prev_position).divideScalar(delta).multiplyScalar(1000);
	// 	this._hit_velocity.toArray(this._hit_velocity_array);

	// 	if (this._node.pv.tvelocity_target) {
	// 		if (Poly.instance().player_mode()) {
	// 			this._found_velocity_target_param =
	// 				this._found_velocity_target_param ||
	// 				this._node.p.velocity_target.found_param_with_type(ParamType.VECTOR3);
	// 		} else {
	// 			// Do not cache the param in the editor, but fetch it directly from the operator_path.
	// 			// The reason is that params are very prone to disappear and be re-generated,
	// 			// Such as spare params created by Gl Builders
	// 			const target_param = this._node.p.velocity_target;
	// 			this._found_velocity_target_param = target_param.found_param_with_type(ParamType.VECTOR3);
	// 		}
	// 		if (this._found_velocity_target_param) {
	// 			this._found_velocity_target_param.set(this._hit_velocity_array);
	// 		}
	// 	} else {
	// 		this._node.p.velocity.set(this._hit_velocity_array);
	// 	}

	// 	this._prev_position.copy(hit_position);
	// }

	private _prepare_raycaster(context: EventContext<MouseEvent>) {
		const points_param = this._raycaster.params.Points;
		if (points_param) {
			points_param.threshold = this._node.pv.points_threshold;
		}

		let camera_node: Readonly<BaseCameraObjNodeType> | undefined = context.camera_node;
		if (this._node.pv.override_camera) {
			if (this._node.pv.override_ray) {
				this._raycaster.ray.origin.copy(this._node.pv.ray_origin);
				this._raycaster.ray.direction.copy(this._node.pv.ray_direction);
			} else {
				const found_camera_node = this._node.p.camera.found_node_with_context(NodeContext.OBJ);
				if (found_camera_node) {
					camera_node = (<unknown>found_camera_node) as Readonly<BaseCameraObjNodeType>;
				}
			}
		}

		if (camera_node && !this._node.pv.override_ray) {
			if (camera_node) {
				camera_node.prepare_raycaster(this._mouse, this._raycaster);
			}
		}
	}

	update_target() {
		const node = this._node.p.target.found_node() as BaseObjNodeType;
		if (node) {
			if (node.node_context() == NodeContext.OBJ) {
				this._resolved_target = this._node.pv.traverse_children
					? node.object
					: (node as GeoObjNode).children_display_controller.sop_group;
			} else {
				this._node.states.error.set('target is not an obj');
			}
		} else {
			this._node.states.error.set('no target found');
		}
	}

	async update_position_target() {
		if (this._node.p.position_target.is_dirty) {
			await this._node.p.position_target.compute();
		}
	}
	static PARAM_CALLBACK_update_target(node: RaycastEventNode) {
		node.cpu_controller.update_target();
	}
	// static PARAM_CALLBACK_update_position_target(node: RaycastEventNode) {
	// 	node.cpu_controller.update_position_target();
	// }
}
