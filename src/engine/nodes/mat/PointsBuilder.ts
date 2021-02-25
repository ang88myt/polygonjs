/**
 * Creates a Points Material, which can be extended with GL nodes.
 *
 * @remarks
 * This node can create children, which will be GL nodes. The GLSL code generated by the nodes will extend the Material.
 *
 */
import {NodeParamsConfig} from '../utils/params/ParamsConfig';
import {ColorParamConfig, ColorsController} from './utils/UniformsColorsController';
import {AdvancedCommonController, AdvancedCommonParamConfig} from './utils/AdvancedCommonController';
import {SkinningParamConfig, SkinningController} from './utils/SkinningController';
import {ShaderAssemblerPoints} from '../gl/code/assemblers/materials/Points';
import {TypedBuilderMatNode} from './_BaseBuilder';
import {AssemblerName} from '../../poly/registers/assemblers/_BaseRegister';
import {Poly} from '../../Poly';
import {FogParamConfig, FogController} from './utils/UniformsFogController';
import {DefaultFolderParamConfig} from './utils/DefaultFolder';
import {AdvancedFolderParamConfig} from './utils/AdvancedFolder';

interface Controllers {
	advancedCommon: AdvancedCommonController;
}
class PointsMatParamsConfig extends FogParamConfig(
	SkinningParamConfig(
		AdvancedCommonParamConfig(
			/* advanced */ AdvancedFolderParamConfig(ColorParamConfig(DefaultFolderParamConfig(NodeParamsConfig)))
		)
	)
) {}
const ParamsConfig = new PointsMatParamsConfig();

export class PointsBuilderMatNode extends TypedBuilderMatNode<ShaderAssemblerPoints, PointsMatParamsConfig> {
	params_config = ParamsConfig;
	static type() {
		return 'pointsBuilder';
	}
	public usedAssembler(): Readonly<AssemblerName.GL_POINTS> {
		return AssemblerName.GL_POINTS;
	}
	protected _create_assembler_controller() {
		return Poly.assemblersRegister.assembler(this, this.usedAssembler());
	}
	readonly controllers: Controllers = {
		advancedCommon: new AdvancedCommonController(this),
	};
	private controllerNames = Object.keys(this.controllers) as Array<keyof Controllers>;

	initializeNode() {
		this.params.onParamsCreated('init controllers', () => {
			for (let controllerName of this.controllerNames) {
				this.controllers[controllerName].initializeNode();
			}
		});
	}
	async cook() {
		this.compile_if_required();
		for (let controllerName of this.controllerNames) {
			this.controllers[controllerName].update();
		}

		ColorsController.update(this);
		FogController.update(this);
		SkinningController.update(this);

		this.setMaterial(this.material);
	}
}
