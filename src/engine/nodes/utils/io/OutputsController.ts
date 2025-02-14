import {NodeEvent} from '../../../poly/NodeEvent';
import {NodeContext} from '../../../poly/NodeContext';
import {ConnectionPointTypeMap} from './connections/ConnectionMap';
import {TypedNode} from '../../_Base';
import {CoreType} from '../../../../core/Type';
import {ArrayUtils} from '../../../../core/ArrayUtils';
export class OutputsController<NC extends NodeContext> {
	private _has_outputs: boolean = false;
	private _named_output_connection_points: ConnectionPointTypeMap[NC][] | undefined;
	private _has_named_outputs: boolean = false;

	constructor(private node: TypedNode<NC, any>) {
		this.node.scene().timeController.onPlayingStateChange(this._onPlayingStateChangeBound);
	}

	private _onPlayingStateChangeBound = this._onPlayingStateChange.bind(this);
	private _onPlayingStateChange() {
		this._clearCache();
	}
	private _outputIndexCache: Map<number | string, number> = new Map();
	private _clearCache() {
		this._outputIndexCache.clear();
	}

	dispose() {
		this.node.scene().timeController.removeOnPlayingStateChange(this._onPlayingStateChangeBound);
		if (this._named_output_connection_points) {
			this._named_output_connection_points.splice(0, this._named_output_connection_points.length);
		}
	}

	setHasOneOutput() {
		this._has_outputs = true;
	}
	setHasNoOutput() {
		this._has_outputs = false;
	}

	hasOutputs() {
		return this._has_outputs;
	}
	hasNamedOutputs() {
		return this._has_named_outputs;
	}
	hasNamedOutput(name: string): boolean {
		return this.getNamedOutputIndex(name) >= 0;
	}
	namedOutputConnectionPoints(): ConnectionPointTypeMap[NC][] {
		return this._named_output_connection_points || [];
	}
	namedOutputConnection(index: number): ConnectionPointTypeMap[NC] | undefined {
		if (this._named_output_connection_points) {
			return this._named_output_connection_points[index];
		}
	}

	getNamedOutputIndex(name: string): number {
		if (this._named_output_connection_points) {
			let i = 0;
			for (let connectionPoint of this._named_output_connection_points) {
				if (connectionPoint && connectionPoint.name() == name) {
					return i;
				}
				i++;
			}
		}
		return -1;
	}
	getOutputIndex(output_index_or_name: number | string): number {
		let currentCache = this._outputIndexCache.get(output_index_or_name);
		if (currentCache == null) {
			currentCache = this._getOutputIndex(output_index_or_name);
			this._outputIndexCache.set(output_index_or_name, currentCache);
		}
		return currentCache;
	}
	private _getOutputIndex(output_index_or_name: number | string): number {
		if (output_index_or_name != null) {
			if (CoreType.isString(output_index_or_name)) {
				if (this.hasNamedOutputs()) {
					return this.getNamedOutputIndex(output_index_or_name);
				} else {
					console.warn(`node ${this.node.path()} has no named outputs`);
					return -1;
				}
			} else {
				return output_index_or_name;
			}
		}
		return -1;
	}

	namedOutputConnectionPointsByName(name: string): ConnectionPointTypeMap[NC] | undefined {
		if (this._named_output_connection_points) {
			for (let connection_point of this._named_output_connection_points) {
				if (connection_point?.name() == name) {
					return connection_point;
				}
			}
		}
	}

	setNamedOutputConnectionPoints(connection_points: ConnectionPointTypeMap[NC][], set_dirty: boolean = true) {
		this._has_named_outputs = true;

		const connections = this.node.io.connections.outputConnections();
		if (connections) {
			for (let connection of connections) {
				if (connection) {
					// assume we only work with indices for now, not with connection point names
					// so we only need to check again the new max number of connection points.
					if (connection.outputIndex() >= connection_points.length) {
						connection.disconnect({setInput: true});
					}
				}
			}
		}

		// update connections
		this._named_output_connection_points = connection_points;
		if (set_dirty && this.node.scene()) {
			// why do I need this set dirty here?
			// I currently have to have a flag to optionally prevent this,
			// for instance from gl nodes which have their outputs updated in a post dirty hook
			this.node.setDirty(this.node);
		}
		this.node.emit(NodeEvent.NAMED_OUTPUTS_UPDATED);
	}
	used_output_names(): string[] {
		const connections_controller = this.node.io.connections;
		if (connections_controller) {
			const output_connections = connections_controller.outputConnections();
			let output_indices = output_connections.map((connection) => (connection ? connection.outputIndex() : null));
			output_indices = ArrayUtils.uniq(output_indices);
			const used_output_indices: number[] = [];
			output_indices.forEach((index) => {
				if (CoreType.isNumber(index)) {
					used_output_indices.push(index);
				}
			});
			const used_output_names: string[] = [];
			for (let index of used_output_indices) {
				const name = this.namedOutputConnectionPoints()[index]?.name();
				if (name) {
					used_output_names.push(name);
				}
			}
			return used_output_names;
		} else {
			return [];
		}
	}
}
