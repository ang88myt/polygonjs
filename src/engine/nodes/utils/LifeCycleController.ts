import {BaseNodeType} from '../_Base';

type Callback = () => void;
type CallbackWithChildNode = (child_node: BaseNodeType) => void;

export class LifeCycleController {
	protected _creation_completed = false;
	protected _on_child_add_hooks: CallbackWithChildNode[] = [];
	private _on_child_remove_hooks: CallbackWithChildNode[] = [];
	private _on_create_hooks: Callback[] = [];
	private _on_delete_hooks: Callback[] = [];
	constructor(protected node: BaseNodeType) {}

	set_creation_completed() {
		this._creation_completed = true;
	}
	get creation_completed() {
		return this.node.scene.loading_controller.loaded && this._creation_completed;
	}
	//
	//
	// ON CHILD ADD
	//
	//
	add_on_child_add_hook(callback: CallbackWithChildNode) {
		this._on_child_add_hooks.push(callback);
	}
	run_on_child_add_hooks(node: BaseNodeType) {
		this.execute_hooks_with_child_node(this._on_child_add_hooks, node);
	}

	//
	//
	// ON CHILD REMOVE
	//
	//
	add_on_child_remove_hook(callback: CallbackWithChildNode) {
		this._on_child_remove_hooks.push(callback);
	}
	run_on_child_remove_hooks(node: BaseNodeType) {
		this.execute_hooks_with_child_node(this._on_child_remove_hooks, node);
	}

	//
	//
	// ON CREATE
	//
	//
	add_on_create_hook(callback: Callback) {
		this._on_create_hooks.push(callback);
	}
	run_on_create_hooks() {
		this.execute_hooks(this._on_create_hooks);
	}

	//
	//
	// ON DELETE
	//
	//
	add_delete_hook(callback: Callback) {
		this._on_delete_hooks.push(callback);
	}
	run_on_delete_hooks() {
		this.execute_hooks(this._on_delete_hooks);
	}

	//
	//
	// UTILS
	//
	//
	protected execute_hooks(hooks: Callback[]) {
		for (let hook of hooks) {
			hook();
		}
	}
	protected execute_hooks_with_child_node(hooks: CallbackWithChildNode[], child_node: BaseNodeType) {
		for (let hook of hooks) {
			hook(child_node);
		}
	}
}
