import {CameraSopNodeType, NodeContext} from '../../engine/poly/NodeContext';
import {AudioType} from '../../engine/poly/registers/nodes/types/Audio';
import {CopType, CopTypeImage} from '../../engine/poly/registers/nodes/types/Cop';
import {SopType, SopTypeFile, SopExporter, SopTypeFileMulti} from '../../engine/poly/registers/nodes/types/Sop';
import {
	GeometryExtension,
	AUDIO_EXTENSIONS,
	ImageExtension,
	SDF_EXTENSIONS,
	VIDEO_EXTENSIONS,
	FontExtension,
} from '../FileTypeController';

export const EXTENSIONS_BY_NODE_TYPE_BY_CONTEXT: Record<NodeContext, Record<string, string[]>> = {
	[NodeContext.ANIM]: {},
	[NodeContext.AUDIO]: {
		[AudioType.FILE]: [...AUDIO_EXTENSIONS],
	},
	// [NodeContext.CAD]: {},
	[NodeContext.COP]: {
		[CopType.CUBE_MAP]: [ImageExtension.PNG, ImageExtension.JPEG, ImageExtension.JPG, ImageExtension.WEBP],
		[CopType.GIF]: [ImageExtension.GIF],
		[CopTypeImage.IMAGE]: [ImageExtension.PNG, ImageExtension.JPEG, ImageExtension.JPG, ImageExtension.WEBP],
		[CopTypeImage.IMAGE_EXR]: [ImageExtension.EXR],
		[CopTypeImage.IMAGE_HDR]: [ImageExtension.HDR],
		[CopTypeImage.IMAGE_KTX2]: [ImageExtension.KTX2],
		[CopType.LUT]: [ImageExtension.PNG],
		[CopType.SDF_FROM_URL]: [...SDF_EXTENSIONS],
		[CopType.TEXT]: [FontExtension.TTF],
		[CopType.VIDEO]: [...VIDEO_EXTENSIONS],
	},
	// [NodeContext.CSG]: {},
	[NodeContext.EVENT]: {},
	[NodeContext.GL]: {},
	[NodeContext.JS]: {},
	[NodeContext.MANAGER]: {},
	[NodeContext.MAT]: {},
	[NodeContext.OBJ]: {},
	[NodeContext.POST]: {},
	[NodeContext.ROP]: {},
	[NodeContext.SOP]: {
		[CameraSopNodeType.WEBXR_AR_MARKER_TRACKING]: [
			ImageExtension.PNG,
			ImageExtension.JPEG,
			ImageExtension.JPG,
			ImageExtension.WEBP,
			...VIDEO_EXTENSIONS,
		],
		[SopType.CAD_EXPORTER_STEP]: [GeometryExtension.STEP],
		[SopType.CAD_FILE_STEP]: [GeometryExtension.STEP],
		[SopType.DATA_URL]: [GeometryExtension.JSON],
		[SopExporter.EXPORTER_GLTF]: [GeometryExtension.GLB],
		[SopExporter.EXPORTER_OBJ]: [GeometryExtension.OBJ],
		[SopExporter.EXPORTER_PLY]: [GeometryExtension.PLY],
		[SopExporter.EXPORTER_STL]: [GeometryExtension.STL],
		[SopTypeFile.FILE_3DS]: [GeometryExtension.TDS],
		[SopTypeFile.FILE_GLTF]: [GeometryExtension.GLB, GeometryExtension.GLTF],
		[SopTypeFile.FILE_IFC]: [GeometryExtension.IFC],
		[SopTypeFile.FILE_DRC]: [GeometryExtension.DRC],
		[SopTypeFile.FILE_FBX]: [GeometryExtension.FBX],
		[SopTypeFile.FILE_GEOJSON]: [GeometryExtension.GEOJSON],
		[SopTypeFile.FILE_JSON]: [GeometryExtension.JSON],
		[SopTypeFile.FILE_MPD]: [GeometryExtension.MPD],
		[SopTypeFileMulti.FILE_GLTF]: [GeometryExtension.GLTF, GeometryExtension.GLB],
		[SopTypeFileMulti.FILE_OBJ]: [GeometryExtension.OBJ],
		[SopTypeFile.FILE_OBJ]: [GeometryExtension.OBJ],
		[SopTypeFile.FILE_PDB]: [GeometryExtension.PDB],
		[SopTypeFile.FILE_PLY]: [GeometryExtension.PLY],
		[SopTypeFile.FILE_STL]: [GeometryExtension.STL],
		[SopTypeFile.FILE_SVG]: [GeometryExtension.SVG],
		[SopTypeFile.FILE_USDZ]: [GeometryExtension.USDZ],
		[SopTypeFile.FILE_VOX]: [GeometryExtension.VOX],
		[SopType.TEXT]: [FontExtension.TTF, FontExtension.JSON],
	},
};
