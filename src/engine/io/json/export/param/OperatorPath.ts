import {ParamJsonExporter} from '../Param';
import {OperatorPathParam} from 'src/engine/params/OperatorPath';
import {SceneJsonExporter} from '../Scene';

export class ParamOperatorPathJsonExporter extends ParamJsonExporter<OperatorPathParam> {
	add_main() {
		let val = this._param.raw_input;
		// val = val.replace(/'/g, "\\'");
		val = SceneJsonExporter.sanitize_string(val);
		this._data['raw_input'] = val;
	}
}
