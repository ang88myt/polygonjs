
// INSERT DEFINES

#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>



// /MAT/meshBasicBuilder1/param1
uniform vec3 v_POLY_param_myCustomVec;

// /MAT/meshBasicBuilder1/globals1
varying vec3 v_POLY_globals1_position;




#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>



	// /MAT/meshBasicBuilder1/param1
	vec3 v_POLY_param1_val = v_POLY_param_myCustomVec;
	
	// /MAT/meshBasicBuilder1/add1
	vec3 v_POLY_add1_sum = (v_POLY_globals1_position + v_POLY_param1_val + vec3(0.0, 0.0, 0.0));
	
	// /MAT/meshBasicBuilder1/output1
	diffuseColor.xyz = v_POLY_add1_sum;




	// INSERT BODY

	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
