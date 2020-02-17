import {ParamJsonExporter} from '../Param';
import {RampParam} from 'src/engine/params/Ramp';

export class ParamRampJsonExporter extends ParamJsonExporter<RampParam> {
	add_main() {
		if (this._require_data_complex()) {
			this._complex_data['raw_input'] = this._param.raw_input_serialized;
		} else {
			return this._param.raw_input_serialized;
		}
	}
}
