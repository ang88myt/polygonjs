import {AssemblerName, ControllerAssemblerPair} from './_BaseRegister';
import {GlAssemblerController} from '../../../nodes/gl/code/Controller';
import {JsAssemblerController} from '../../../nodes/js/code/Controller';

import {ShaderAssemblerBasic} from '../../../nodes/gl/code/assemblers/materials/Basic';
import {ShaderAssemblerCloth} from '../../../nodes/gl/code/assemblers/cloth/ClothAssembler';
import {ShaderAssemblerLambert} from '../../../nodes/gl/code/assemblers/materials/Lambert';
import {ShaderAssemblerLine} from '../../../nodes/gl/code/assemblers/materials/Line';
import {ShaderAssemblerParticles} from '../../../nodes/gl/code/assemblers/particles/Particles';
import {ShaderAssemblerPhong} from '../../../nodes/gl/code/assemblers/materials/Phong';
import {ShaderAssemblerPhysical} from '../../../nodes/gl/code/assemblers/materials/Physical';
import {ShaderAssemblerPoints} from '../../../nodes/gl/code/assemblers/materials/Points';
import {ShaderAssemblerPost} from '../../../nodes/gl/code/assemblers/post/Post';
import {ShaderAssemblerRayMarching} from '../../../nodes/gl/code/assemblers/materials/RayMarching';
import {ShaderAssemblerStandard} from '../../../nodes/gl/code/assemblers/materials/Standard';
import {ShaderAssemblerTexture} from '../../../nodes/gl/code/assemblers/textures/Texture';
import {ShaderAssemblerTexture2DArray} from '../../../nodes/gl/code/assemblers/textures/Texture2DArray';
import {ShaderAssemblerToon} from '../../../nodes/gl/code/assemblers/materials/Toon';
import {ShaderAssemblerVolume} from '../../../nodes/gl/code/assemblers/materials/Volume';
import {ShaderAssemblerCustomMeshDepthForRender} from '../../../nodes/gl/code/assemblers/materials/custom/mesh/CustomMeshDepth';
import {ShaderAssemblerCustomMeshDistanceForRender} from '../../../nodes/gl/code/assemblers/materials/custom/mesh/CustomMeshDistance';
//
import {JsAssemblerActor} from '../../../nodes/js/code/assemblers/actor/ActorAssembler';
import {JsAssemblerInstanceBuilder} from '../../../nodes/js/code/assemblers/instanceBuilder/InstanceBuilderAssembler';
import {JsAssemblerObjectBuilder} from '../../../nodes/js/code/assemblers/objectBuilder/ObjectBuilderAssembler';
import {JsAssemblerPointBuilder} from '../../../nodes/js/code/assemblers/pointBuilder/PointBuilderAssembler';
import {JsAssemblerSDF} from '../../../nodes/js/code/assemblers/sdf/SDF';
import {JsAssemblerSoftBody} from '../../../nodes/js/code/assemblers/softBody/SoftBodyAssembler';
export interface AssemblersMap extends PolyDictionary<ControllerAssemblerPair> {
	[AssemblerName.GL_MESH_BASIC]: {
		controller: GlAssemblerController<ShaderAssemblerBasic>;
		assembler: typeof ShaderAssemblerBasic;
	};
	[AssemblerName.GL_CLOTH]: {
		controller: GlAssemblerController<ShaderAssemblerCloth>;
		assembler: typeof ShaderAssemblerCloth;
	};
	[AssemblerName.GL_MESH_LAMBERT]: {
		controller: GlAssemblerController<ShaderAssemblerLambert>;
		assembler: typeof ShaderAssemblerLambert;
	};
	[AssemblerName.GL_MESH_PHONG]: {
		controller: GlAssemblerController<ShaderAssemblerPhong>;
		assembler: typeof ShaderAssemblerPhong;
	};
	[AssemblerName.GL_MESH_STANDARD]: {
		controller: GlAssemblerController<ShaderAssemblerStandard>;
		assembler: typeof ShaderAssemblerStandard;
	};
	[AssemblerName.GL_MESH_PHYSICAL]: {
		controller: GlAssemblerController<ShaderAssemblerPhysical>;
		assembler: typeof ShaderAssemblerPhysical;
	};
	[AssemblerName.GL_MESH_TOON]: {
		controller: GlAssemblerController<ShaderAssemblerToon>;
		assembler: typeof ShaderAssemblerToon;
	};
	[AssemblerName.GL_MESH_DEPTH]: {
		controller: GlAssemblerController<ShaderAssemblerCustomMeshDepthForRender>;
		assembler: typeof ShaderAssemblerCustomMeshDepthForRender;
	};
	[AssemblerName.GL_MESH_DISTANCE]: {
		controller: GlAssemblerController<ShaderAssemblerCustomMeshDistanceForRender>;
		assembler: typeof ShaderAssemblerCustomMeshDistanceForRender;
	};
	[AssemblerName.GL_PARTICLES]: {
		controller: GlAssemblerController<ShaderAssemblerParticles>;
		assembler: typeof ShaderAssemblerParticles;
	};
	[AssemblerName.GL_POINTS]: {
		controller: GlAssemblerController<ShaderAssemblerPoints>;
		assembler: typeof ShaderAssemblerPoints;
	};
	[AssemblerName.GL_LINE]: {
		controller: GlAssemblerController<ShaderAssemblerLine>;
		assembler: typeof ShaderAssemblerLine;
	};
	[AssemblerName.GL_POST]: {
		controller: GlAssemblerController<ShaderAssemblerPost>;
		assembler: typeof ShaderAssemblerPost;
	};
	[AssemblerName.GL_RAYMARCHING]: {
		controller: GlAssemblerController<ShaderAssemblerRayMarching>;
		assembler: typeof ShaderAssemblerRayMarching;
	};
	[AssemblerName.GL_TEXTURE]: {
		controller: GlAssemblerController<ShaderAssemblerTexture>;
		assembler: typeof ShaderAssemblerTexture;
	};
	[AssemblerName.GL_TEXTURE_2D_ARRAY]: {
		controller: GlAssemblerController<ShaderAssemblerTexture2DArray>;
		assembler: typeof ShaderAssemblerTexture2DArray;
	};
	[AssemblerName.GL_VOLUME]: {
		controller: GlAssemblerController<ShaderAssemblerVolume>;
		assembler: typeof ShaderAssemblerVolume;
	};
	//
	[AssemblerName.JS_ACTOR]: {
		controller: JsAssemblerController<JsAssemblerActor>;
		assembler: typeof JsAssemblerActor;
	};
	[AssemblerName.JS_INSTANCE_BUILDER]: {
		controller: JsAssemblerController<JsAssemblerInstanceBuilder>;
		assembler: typeof JsAssemblerInstanceBuilder;
	};
	[AssemblerName.JS_OBJECT_BUILDER]: {
		controller: JsAssemblerController<JsAssemblerObjectBuilder>;
		assembler: typeof JsAssemblerObjectBuilder;
	};
	[AssemblerName.JS_POINT_BUILDER]: {
		controller: JsAssemblerController<JsAssemblerPointBuilder>;
		assembler: typeof JsAssemblerPointBuilder;
	};
	[AssemblerName.JS_SDF]: {
		controller: JsAssemblerController<JsAssemblerSDF>;
		assembler: typeof JsAssemblerSDF;
	};
	[AssemblerName.JS_SOFT_BODY]: {
		controller: JsAssemblerController<JsAssemblerSoftBody>;
		assembler: typeof JsAssemblerSoftBody;
	};
}

import {PolyEngine} from '../../../Poly';
import {PolyDictionary} from '../../../../types/GlobalTypes';

export class AllAssemblersRegister {
	static run(poly: PolyEngine) {
		poly.assemblersRegister.register(AssemblerName.GL_MESH_BASIC, GlAssemblerController, ShaderAssemblerBasic);
		poly.assemblersRegister.register(AssemblerName.GL_CLOTH, GlAssemblerController, ShaderAssemblerCloth);
		poly.assemblersRegister.register(AssemblerName.GL_MESH_LAMBERT, GlAssemblerController, ShaderAssemblerLambert);
		poly.assemblersRegister.register(AssemblerName.GL_MESH_PHONG, GlAssemblerController, ShaderAssemblerPhong);
		poly.assemblersRegister.register(AssemblerName.GL_MESH_TOON, GlAssemblerController, ShaderAssemblerToon);
		poly.assemblersRegister.register(
			AssemblerName.GL_MESH_STANDARD,
			GlAssemblerController,
			ShaderAssemblerStandard
		);
		poly.assemblersRegister.register(
			AssemblerName.GL_MESH_PHYSICAL,
			GlAssemblerController,
			ShaderAssemblerPhysical
		);
		poly.assemblersRegister.register(
			AssemblerName.GL_MESH_DEPTH,
			GlAssemblerController,
			ShaderAssemblerCustomMeshDepthForRender
		);
		poly.assemblersRegister.register(
			AssemblerName.GL_MESH_DISTANCE,
			GlAssemblerController,
			ShaderAssemblerCustomMeshDistanceForRender
		);
		poly.assemblersRegister.register(AssemblerName.GL_PARTICLES, GlAssemblerController, ShaderAssemblerParticles);
		poly.assemblersRegister.register(AssemblerName.GL_POINTS, GlAssemblerController, ShaderAssemblerPoints);
		poly.assemblersRegister.register(AssemblerName.GL_LINE, GlAssemblerController, ShaderAssemblerLine);
		poly.assemblersRegister.register(AssemblerName.GL_POST, GlAssemblerController, ShaderAssemblerPost);
		poly.assemblersRegister.register(
			AssemblerName.GL_RAYMARCHING,
			GlAssemblerController,
			ShaderAssemblerRayMarching
		);
		poly.assemblersRegister.register(AssemblerName.GL_TEXTURE, GlAssemblerController, ShaderAssemblerTexture);
		poly.assemblersRegister.register(
			AssemblerName.GL_TEXTURE_2D_ARRAY,
			GlAssemblerController,
			ShaderAssemblerTexture2DArray
		);
		poly.assemblersRegister.register(AssemblerName.GL_VOLUME, GlAssemblerController, ShaderAssemblerVolume);
		//
		poly.assemblersRegister.register(AssemblerName.JS_ACTOR, JsAssemblerController, JsAssemblerActor);
		poly.assemblersRegister.register(
			AssemblerName.JS_INSTANCE_BUILDER,
			JsAssemblerController,
			JsAssemblerInstanceBuilder
		);
		poly.assemblersRegister.register(
			AssemblerName.JS_OBJECT_BUILDER,
			JsAssemblerController,
			JsAssemblerObjectBuilder
		);
		poly.assemblersRegister.register(
			AssemblerName.JS_POINT_BUILDER,
			JsAssemblerController,
			JsAssemblerPointBuilder
		);
		poly.assemblersRegister.register(AssemblerName.JS_SDF, JsAssemblerController, JsAssemblerSDF);
		poly.assemblersRegister.register(AssemblerName.JS_SOFT_BODY, JsAssemblerController, JsAssemblerSoftBody);
	}
}
