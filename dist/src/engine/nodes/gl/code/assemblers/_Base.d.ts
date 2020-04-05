import { ShaderMaterial } from 'three/src/materials/ShaderMaterial';
import { LineType } from '../utils/LineType';
import { ShaderConfig } from '../configs/ShaderConfig';
import { VariableConfig } from '../configs/VariableConfig';
import { CodeBuilder } from '../utils/CodeBuilder';
import { BaseGlNodeType } from '../../_Base';
import { TypedAssembler } from '../../../utils/shaders/BaseAssembler';
import { ShaderName } from '../../../utils/shaders/ShaderName';
import { OutputGlNode } from '../../Output';
import { ParamType } from '../../../../poly/ParamType';
import { TypedNamedConnectionPoint } from '../../../utils/connections/NamedConnectionPoint';
import { ConnectionPointType } from '../../../utils/connections/ConnectionPointType';
import { GlobalsGlNode } from '../../Globals';
import { AttributeGlNode } from '../../Attribute';
import { AssemblerControllerNode } from '../Controller';
import { GlobalsBaseController } from '../globals/_Base';
import { CustomMaterialName } from './materials/_BaseMaterial';
import { ShadersCollectionController } from '../utils/ShadersCollectionController';
import { IUniforms } from '../../../../../core/geometry/Material';
declare type StringArrayByShaderName = Map<ShaderName, string[]>;
interface ITemplateShader {
    vertexShader?: string;
    fragmentShader?: string;
    uniforms?: IUniforms;
}
export declare class BaseGlShaderAssembler extends TypedAssembler<BaseGlNodeType> {
    protected _gl_parent_node: AssemblerControllerNode;
    protected _shaders_by_name: Map<ShaderName, string>;
    protected _lines: StringArrayByShaderName;
    protected _code_builder: CodeBuilder | undefined;
    private _param_config_owner;
    protected _root_nodes: BaseGlNodeType[];
    protected _leaf_nodes: BaseGlNodeType[];
    protected _material: ShaderMaterial | undefined;
    private _shader_configs;
    private _variable_configs;
    private _uniforms_time_dependent;
    private _resolution_dependent;
    constructor(_gl_parent_node: AssemblerControllerNode);
    compile(): Promise<void>;
    protected _template_shader_for_shader_name(shader_name: ShaderName): string | undefined;
    get globals_handler(): GlobalsBaseController | undefined;
    compile_allowed(): boolean;
    shaders_by_name(): Map<ShaderName, string>;
    protected _build_lines(): void;
    set_root_nodes(root_nodes: BaseGlNodeType[]): void;
    protected get _template_shader(): ITemplateShader | undefined;
    protected add_uniforms(current_uniforms: IUniforms): void;
    root_nodes_by_shader_name(shader_name: ShaderName): BaseGlNodeType[];
    leaf_nodes_by_shader_name(shader_name: ShaderName): BaseGlNodeType[];
    set_node_lines_globals(globals_node: GlobalsGlNode, shaders_collection_controller: ShadersCollectionController): void;
    set_node_lines_output(output_node: OutputGlNode, shaders_collection_controller: ShadersCollectionController): void;
    set_node_lines_attribute(attribute_node: AttributeGlNode, shaders_collection_controller: ShadersCollectionController): void;
    get code_builder(): CodeBuilder;
    build_code_from_nodes(root_nodes: BaseGlNodeType[]): Promise<void>;
    allow_new_param_configs(): void;
    disallow_new_param_configs(): void;
    builder_param_configs(): readonly import("../../../utils/code/configs/ParamConfig").ParamConfig<ParamType>[];
    builder_lines(shader_name: ShaderName, line_type: LineType): string[] | undefined;
    all_builder_lines(): Map<ShaderName, Map<LineType, string[]>>;
    param_configs(): readonly import("../../../utils/code/configs/ParamConfig").ParamConfig<ParamType>[];
    set_param_configs_owner(param_config_owner: CodeBuilder): void;
    static add_output_params(output_child: OutputGlNode): void;
    add_output_params(output_child: OutputGlNode): void;
    static create_globals_node_output_connections(): (TypedNamedConnectionPoint<ConnectionPointType.VEC3> | TypedNamedConnectionPoint<ConnectionPointType.VEC2> | TypedNamedConnectionPoint<ConnectionPointType.VEC4> | TypedNamedConnectionPoint<ConnectionPointType.FLOAT>)[];
    create_globals_node_output_connections(): (TypedNamedConnectionPoint<ConnectionPointType.VEC3> | TypedNamedConnectionPoint<ConnectionPointType.VEC2> | TypedNamedConnectionPoint<ConnectionPointType.VEC4> | TypedNamedConnectionPoint<ConnectionPointType.FLOAT>)[];
    add_globals_params(globals_node: GlobalsGlNode): void;
    allow_attribute_exports(): boolean;
    reset_configs(): void;
    get shader_configs(): ShaderConfig[];
    set_shader_configs(shader_configs: ShaderConfig[]): void;
    get shader_names(): ShaderName[];
    protected _reset_shader_configs(): void;
    create_shader_configs(): ShaderConfig[];
    shader_config(name: string): ShaderConfig | undefined;
    variable_configs(): VariableConfig[];
    set_variable_configs(variable_configs: VariableConfig[]): void;
    variable_config(name: string): VariableConfig;
    static create_variable_configs(): VariableConfig[];
    create_variable_configs(): VariableConfig[];
    protected _reset_variable_configs(): void;
    input_names_for_shader_name(root_node: BaseGlNodeType, shader_name: ShaderName): string[];
    protected _reset_uniforms_time_dependency(): void;
    set_uniforms_time_dependent(): void;
    uniforms_time_dependent(): boolean;
    protected _reset_resolution_dependency(): void;
    set_resolution_dependent(): void;
    resolution_dependent(): boolean;
    protected insert_define_after(shader_name: ShaderName): string | undefined;
    protected insert_body_after(shader_name: ShaderName): string | undefined;
    protected lines_to_remove(shader_name: ShaderName): string[] | undefined;
    private _replace_template;
    private _insert_lines;
    get_custom_materials(): Promise<Map<CustomMaterialName, ShaderMaterial>>;
}
export {};
