import {CATEGORY_AUDIO} from './Category';

import {AMSynthAudioNode} from '../../../nodes/audio/AMSynth';
import {ChorusAudioNode} from '../../../nodes/audio/Chorus';
import {EnvelopeAudioNode} from '../../../nodes/audio/Envelope';
import {FileAudioNode} from '../../../nodes/audio/File';
import {FMSynthAudioNode} from '../../../nodes/audio/FMSynth';
import {MonoSynthAudioNode} from '../../../nodes/audio/MonoSynth';
import {NullAudioNode} from '../../../nodes/audio/Null';
import {PitchShiftAudioNode} from '../../../nodes/audio/PitchShift';
import {PlayInstrumentAudioNode} from '../../../nodes/audio/PlayInstrument';
import {PlaySourceAudioNode} from '../../../nodes/audio/PlaySource';
import {PolySynthAudioNode} from '../../../nodes/audio/PolySynth';
// import {OscillatorAudioNode} from '../../../nodes/audio/Oscillator';
import {ReverbAudioNode} from '../../../nodes/audio/Reverb';
import {SwitchAudioNode} from '../../../nodes/audio/Switch';
import {SynthAudioNode} from '../../../nodes/audio/Synth';
import {ToDestinationAudioNode} from '../../../nodes/audio/ToDestination';
import {VolumeAudioNode} from '../../../nodes/audio/Volume';
// networks
import {AnimationsNetworkAudioNode} from '../../../nodes/audio/AnimationsNetwork';
import {AudioNetworkAudioNode} from '../../../nodes/audio/AudioNetwork';
import {CopNetworkAudioNode} from '../../../nodes/audio/CopNetwork';
import {EventsNetworkAudioNode} from '../../../nodes/audio/EventsNetwork';
import {MaterialsNetworkAudioNode} from '../../../nodes/audio/MaterialsNetwork';
import {PostProcessNetworkAudioNode} from '../../../nodes/audio/PostProcessNetwork';
import {RenderersNetworkAudioNode} from '../../../nodes/audio/RenderersNetwork';

export interface AudioNodeChildrenMap {
	AMSynth: AMSynthAudioNode;
	chorus: ChorusAudioNode;
	envelope: EnvelopeAudioNode;
	file: FileAudioNode;
	FMSynth: FMSynthAudioNode;
	monoSynth: MonoSynthAudioNode;
	null: NullAudioNode;
	pitchShift: PitchShiftAudioNode;
	playInstrument: PlayInstrumentAudioNode;
	playSource: PlaySourceAudioNode;
	polySynth: PolySynthAudioNode;
	// oscillator: OscillatorAudioNode;
	reverb: ReverbAudioNode;
	synth: SynthAudioNode;
	switch: SwitchAudioNode;
	toDestination: ToDestinationAudioNode;
	volume: VolumeAudioNode;
	// networks
	animationsNetwork: AnimationsNetworkAudioNode;
	audioNetwork: AudioNetworkAudioNode;
	copNetwork: CopNetworkAudioNode;
	eventsNetwork: EventsNetworkAudioNode;
	materialsNetwork: MaterialsNetworkAudioNode;
	postProcessNetwork: PostProcessNetworkAudioNode;
	renderersNetwork: RenderersNetworkAudioNode;
}

import {PolyEngine} from '../../../Poly';

const isDev = process.env.NODE_ENV == 'development';
export class AudioRegister {
	static run(poly: PolyEngine) {
		poly.registerNode(AMSynthAudioNode, CATEGORY_AUDIO.INSTRUMENTS);
		poly.registerNode(ChorusAudioNode, CATEGORY_AUDIO.EFFECTS);
		poly.registerNode(EnvelopeAudioNode, CATEGORY_AUDIO.MISC);
		if (isDev) {
			poly.registerNode(FileAudioNode, CATEGORY_AUDIO.INPUTS);
		}
		poly.registerNode(FMSynthAudioNode, CATEGORY_AUDIO.INSTRUMENTS);
		poly.registerNode(MonoSynthAudioNode, CATEGORY_AUDIO.INSTRUMENTS);
		poly.registerNode(NullAudioNode, CATEGORY_AUDIO.MISC);
		poly.registerNode(PitchShiftAudioNode, CATEGORY_AUDIO.EFFECTS);
		poly.registerNode(PlayInstrumentAudioNode, CATEGORY_AUDIO.MISC);
		if (isDev) {
			poly.registerNode(PlaySourceAudioNode, CATEGORY_AUDIO.MISC);
		}
		poly.registerNode(PolySynthAudioNode, CATEGORY_AUDIO.INSTRUMENTS);
		// poly.registerNode(OscillatorAudioNode, CATEGORY_AUDIO.MISC);
		poly.registerNode(ReverbAudioNode, CATEGORY_AUDIO.EFFECTS);
		poly.registerNode(SwitchAudioNode, CATEGORY_AUDIO.MISC);
		poly.registerNode(SynthAudioNode, CATEGORY_AUDIO.INSTRUMENTS);
		poly.registerNode(ToDestinationAudioNode, CATEGORY_AUDIO.EFFECTS);
		poly.registerNode(VolumeAudioNode, CATEGORY_AUDIO.MISC);
		// networks
		poly.registerNode(AnimationsNetworkAudioNode, CATEGORY_AUDIO.NETWORK);
		poly.registerNode(AudioNetworkAudioNode, CATEGORY_AUDIO.NETWORK);
		poly.registerNode(CopNetworkAudioNode, CATEGORY_AUDIO.NETWORK);
		poly.registerNode(EventsNetworkAudioNode, CATEGORY_AUDIO.NETWORK);
		poly.registerNode(MaterialsNetworkAudioNode, CATEGORY_AUDIO.NETWORK);
		poly.registerNode(PostProcessNetworkAudioNode, CATEGORY_AUDIO.NETWORK);
		poly.registerNode(RenderersNetworkAudioNode, CATEGORY_AUDIO.NETWORK);
	}
}
