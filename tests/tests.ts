import 'qunit';

QUnit.module('core');
import './core/Object';
import './core/String';
import './core/Walker';
QUnit.module('core/geometry');
import './core/geometry/Attribute';
import './core/geometry/Group';

QUnit.module('scene');
import './engine/scene/Serializer';

QUnit.module('params');
import './engine/params/_Base';
import './engine/params/Boolean';
import './engine/params/Color';
import './engine/params/Float';
import './engine/params/Integer';
import './engine/params/String';
import './engine/params/Vector3';
import './engine/params/utils/DefaultValues';
import './engine/params/utils/Dirty';
import './engine/params/utils/Expression';
import './engine/params/utils/ReferencedAssets';
import './engine/params/utils/TimeDependent';

QUnit.module('nodes utils');
import './engine/nodes/utils/ChildrenContext';

QUnit.module('cop');
import './engine/nodes/cop/EnvMap';
import './engine/nodes/cop/File';
import './engine/nodes/cop/Switch';

QUnit.module('gl');
import './engine/nodes/gl/Attribute';
import './engine/nodes/gl/Constant';
import './engine/nodes/gl/Param';

QUnit.module('manager');
import './engine/nodes/manager/ObjectsManager';

QUnit.module('obj');
import './engine/nodes/obj/utils/DisplayNodeController';
import './engine/nodes/obj/_BaseTransformed';
import './engine/nodes/obj/AmbientLight';
import './engine/nodes/obj/Geo';

QUnit.module('sop');
import './engine/nodes/sop/Add';
import './engine/nodes/sop/AnimationCopy';
import './engine/nodes/sop/AnimationMixer';
import './engine/nodes/sop/AttribAddMult';
import './engine/nodes/sop/AttribCreate';
import './engine/nodes/sop/AttribDelete';
import './engine/nodes/sop/AttribNormalize';
import './engine/nodes/sop/AttribPromote';
import './engine/nodes/sop/AttribRemap';
import './engine/nodes/sop/AttribRename';
import './engine/nodes/sop/AttribTransfer';
import './engine/nodes/sop/BboxScatter';
import './engine/nodes/sop/Blend';
import './engine/nodes/sop/Box';
import './engine/nodes/sop/Cache';
import './engine/nodes/sop/Circle';
import './engine/nodes/sop/Color';
import './engine/nodes/sop/Copy';
import './engine/nodes/sop/Data';
import './engine/nodes/sop/DataUrl';
import './engine/nodes/sop/Delay';
import './engine/nodes/sop/Delete';
import './engine/nodes/sop/Face';
import './engine/nodes/sop/File';
import './engine/nodes/sop/Fuse';
import './engine/nodes/sop/Hexagons';
import './engine/nodes/sop/Hierarchy';
import './engine/nodes/sop/Jitter';
import './engine/nodes/sop/Layer';
import './engine/nodes/sop/Line';
import './engine/nodes/sop/Material';
import './engine/nodes/sop/Merge';
import './engine/nodes/sop/Noise';
import './engine/nodes/sop/Normals';
import './engine/nodes/sop/Null';
import './engine/nodes/sop/ObjectMerge';
import './engine/nodes/sop/Occlusion';
import './engine/nodes/sop/Peak';
import './engine/nodes/sop/Plane';
import './engine/nodes/sop/Point';
import './engine/nodes/sop/Polywire';
import './engine/nodes/sop/Ray';
import './engine/nodes/sop/Resample';
import './engine/nodes/sop/Scatter';
import './engine/nodes/sop/Shadows';
import './engine/nodes/sop/Skin';
import './engine/nodes/sop/Switch';
import './engine/nodes/sop/Text';
import './engine/nodes/sop/Torus';
import './engine/nodes/sop/TorusKnot';
import './engine/nodes/sop/Transform';
import './engine/nodes/sop/Tube';
import './engine/nodes/sop/UvProject';

QUnit.module('viewer');
import './engine/viewers/Controls';
