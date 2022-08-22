precision highp float;
precision highp int;
uniform int MAX_STEPS;
uniform float MAX_DIST;
uniform float SURF_DIST;
#define ZERO 0
#include <common>
float dot2( in vec2 v ) { return dot(v,v); }
float dot2( in vec3 v ) { return dot(v,v); }
float ndot( in vec2 a, in vec2 b ) { return a.x*b.x - a.y*b.y; }
float sdSphere( vec3 p, float s )
{
	return length(p)-s;
}
float sdBox( vec3 p, vec3 b )
{
	vec3 q = abs(p) - b;
	return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
}
float sdRoundBox( vec3 p, vec3 b, float r )
{
	vec3 q = abs(p) - b;
	return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0) - r;
}
float sdBoxFrame( vec3 p, vec3 b, float e )
{
		p = abs(p  )-b;
	vec3 q = abs(p+e)-e;
	return min(min(
		length(max(vec3(p.x,q.y,q.z),0.0))+min(max(p.x,max(q.y,q.z)),0.0),
		length(max(vec3(q.x,p.y,q.z),0.0))+min(max(q.x,max(p.y,q.z)),0.0)),
		length(max(vec3(q.x,q.y,p.z),0.0))+min(max(q.x,max(q.y,p.z)),0.0));
}
float sdPlane( vec3 p, vec3 n, float h )
{
	return dot(p,n) + h;
}
float sdTorus( vec3 p, vec2 t )
{
	vec2 q = vec2(length(p.xz)-t.x,p.y);
	return length(q)-t.y;
}
float sdCappedTorus(in vec3 p, in vec2 sc, in float ra, in float rb)
{
	p.x = abs(p.x);
	float k = (sc.y*p.x>sc.x*p.y) ? dot(p.xy,sc) : length(p.xy);
	return sqrt( dot(p,p) + ra*ra - 2.0*ra*k ) - rb;
}
float sdLink( vec3 p, float le, float r1, float r2 )
{
  vec3 q = vec3( p.x, max(abs(p.y)-le,0.0), p.z );
  return length(vec2(length(q.xy)-r1,q.z)) - r2;
}
float sdSolidAngle(vec3 pos, vec2 c, float radius)
{
	vec2 p = vec2( length(pos.xz), pos.y );
	float l = length(p) - radius;
	float m = length(p - c*clamp(dot(p,c),0.0,radius) );
	return max(l,m*sign(c.y*p.x-c.x*p.y));
}
float sdSolidAngleWrapped(vec3 pos, float angle, float radius){
	return sdSolidAngle(pos, vec2(sin(angle), cos(angle)), radius);
}
float sdRhombus(vec3 p, float la, float lb, float h, float ra)
{
  p = abs(p);
  vec2 b = vec2(la,lb);
  float f = clamp( (ndot(b,b-2.0*p.xz))/dot(b,b), -1.0, 1.0 );
  vec2 q = vec2(length(p.xz-0.5*b*vec2(1.0-f,1.0+f))*sign(p.x*b.y+p.z*b.x-b.x*b.y)-ra, p.y-h);
  return min(max(q.x,q.y),0.0) + length(max(q,0.0));
}
float sdOctahedron( vec3 p, float s)
{
  p = abs(p);
  float m = p.x+p.y+p.z-s;
  vec3 q;
       if( 3.0*p.x < m ) q = p.xyz;
  else if( 3.0*p.y < m ) q = p.yzx;
  else if( 3.0*p.z < m ) q = p.zxy;
  else return m*0.57735027;
    
  float k = clamp(0.5*(q.z-q.y+s),0.0,s); 
  return length(vec3(q.x,q.y-s+k,q.z-k)); 
}
float SDFUnion( float d1, float d2 ) { return min(d1,d2); }
float SDFSubtract( float d1, float d2 ) { return max(-d1,d2); }
float SDFIntersect( float d1, float d2 ) { return max(d1,d2); }
float SDFSmoothUnion( float d1, float d2, float k ) {
	float h = clamp( 0.5 + 0.5*(d2-d1)/k, 0.0, 1.0 );
	return mix( d2, d1, h ) - k*h*(1.0-h);
}
float SDFSmoothSubtract( float d1, float d2, float k ) {
	float h = clamp( 0.5 - 0.5*(d2+d1)/k, 0.0, 1.0 );
	return mix( d2, -d1, h ) + k*h*(1.0-h);
}
float SDFSmoothIntersect( float d1, float d2, float k ) {
	float h = clamp( 0.5 - 0.5*(d2-d1)/k, 0.0, 1.0 );
	return mix( d2, d1, h ) + k*h*(1.0-h);
}
vec4 SDFElongateFast( in vec3 p, in vec3 h )
{
	return vec4( p-clamp(p,-h,h), 0.0 );
}
vec4 SDFElongateSlow( in vec3 p, in vec3 h )
{
	vec3 q = abs(p)-h;
	return vec4( max(q,0.0), min(max(q.x,max(q.y,q.z)),0.0) );
}
float SDFOnion( in float sdf, in float thickness )
{
	return abs(sdf)-thickness;
}
float v_POLY_SDFGradient1_sdfFunction(vec3 position, float input0){
	vec3 v_POLY_SDFGradient1_subnetInput1_position = position;
	float v_POLY_SDFGradient1_subnetInput1_input0 = input0;
	float v_POLY_SDFGradient1_SDFSphere1_float = sdSphere(v_POLY_SDFGradient1_subnetInput1_position - vec3(0.0, 0.0, 0.0), 1.0);
	return v_POLY_SDFGradient1_SDFSphere1_float;
}
vec3 v_POLY_SDFGradient1_gradientFunction( in vec3 p, float input0 )
{
	const float eps = 0.0001;
	const vec2 h = vec2(eps,0);
	return normalize(
		vec3(
			v_POLY_SDFGradient1_sdfFunction(p+h.xyy, input0) - v_POLY_SDFGradient1_sdfFunction(p-h.xyy, input0),
			v_POLY_SDFGradient1_sdfFunction(p+h.yxy, input0) - v_POLY_SDFGradient1_sdfFunction(p-h.yxy, input0),
			v_POLY_SDFGradient1_sdfFunction(p+h.yyx, input0) - v_POLY_SDFGradient1_sdfFunction(p-h.yyx, input0)
		)
	);
}
float complement(float x){return 1.0-x;}
vec2 complement(vec2 x){return vec2(1.0-x.x, 1.0-x.y);}
vec3 complement(vec3 x){return vec3(1.0-x.x, 1.0-x.y, 1.0-x.z);}
vec4 complement(vec4 x){return vec4(1.0-x.x, 1.0-x.y, 1.0-x.z, 1.0-x.w);}
const int _MAT_RAYMARCHINGBUILDER1_SDFMATERIAL1 = 216;
uniform sampler2D v_POLY_texture_envTexture1;
#include <lightmap_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
varying vec3 vPw;
#if NUM_SPOT_LIGHTS > 0
	struct SpotLightRayMarching {
		vec3 worldPos;
	};
	uniform SpotLightRayMarching spotLightsRayMarching[ NUM_SPOT_LIGHTS ];
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLightRayMarching {
		vec3 direction;
	};
	uniform DirectionalLightRayMarching directionalLightsRayMarching[ NUM_DIR_LIGHTS ];
#endif
struct SDFContext {
	float d;
	int matId;
};
SDFContext DefaultSDFContext(){
	return SDFContext( 0.0, 0 );
}
int DefaultSDFMaterial(){
	return 0;
}
SDFContext GetDist(vec3 p) {
	SDFContext sdfContext = SDFContext(0.0, 0);
	vec3 v_POLY_globals1_position = p;
	vec3 v_POLY_globals1_cameraPosition = cameraPosition;
	
	float v_POLY_SDFGradient1_sdf = v_POLY_SDFGradient1_sdfFunction(v_POLY_globals1_position, 0.0);
	vec3 v_POLY_SDFGradient1_gradient = v_POLY_SDFGradient1_gradientFunction(v_POLY_globals1_position, 0.0);
	
	SDFContext v_POLY_SDFContext1_SDFContext = SDFContext(v_POLY_SDFGradient1_sdf, _MAT_RAYMARCHINGBUILDER1_SDFMATERIAL1);
	
	sdfContext = v_POLY_SDFContext1_SDFContext;
	
	return sdfContext;
}
SDFContext RayMarch(vec3 ro, vec3 rd) {
	SDFContext dO = SDFContext(0.,0);
	for(int i=0; i<MAX_STEPS; i++) {
		vec3 p = ro + rd*dO.d;
		SDFContext sdfContext = GetDist(p);
		dO.d += sdfContext.d;
		dO.matId = sdfContext.matId;
		if(dO.d>MAX_DIST || sdfContext.d<SURF_DIST) break;
	}
	return dO;
}
vec3 GetNormal(vec3 p) {
	SDFContext sdfContext = GetDist(p);
	vec2 e = vec2(.01, 0);
	vec3 n = sdfContext.d - vec3(
		GetDist(p-e.xyy).d,
		GetDist(p-e.yxy).d,
		GetDist(p-e.yyx).d);
	return normalize(n);
}
vec3 GetLight(vec3 p, vec3 n) {
	#if NUM_SPOT_LIGHTS > 0 || NUM_DIR_LIGHTS > 0
		vec3 dif = vec3(0.,0.,0.);
		vec3 lightPos,lightCol,lightDir, l;
		float lighDif;
		SDFContext sdfContext;
		#if NUM_SPOT_LIGHTS > 0
			SpotLightRayMarching spotLightRayMarching;
			SpotLight spotLight;
			#pragma unroll_loop_start
			for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
				spotLightRayMarching = spotLightsRayMarching[ i ];
				spotLight = spotLights[ i ];
				lightPos = spotLightRayMarching.worldPos;
				lightCol = spotLight.color;
				l = normalize(lightPos-p);
				lighDif = clamp(dot(n, l), 0., 1.);
				sdfContext = RayMarch(p+n*SURF_DIST*2., l);
				if(sdfContext.d<length(lightPos-p)) lighDif *= .1;
				dif += lightCol * lighDif;
			}
			#pragma unroll_loop_end
		#endif
		#if NUM_DIR_LIGHTS > 0
			DirectionalLightRayMarching directionalLightRayMarching;
			DirectionalLight directionalLight;
			#pragma unroll_loop_start
			for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
				directionalLightRayMarching = directionalLightsRayMarching[ i ];
				directionalLight = directionalLights[ i ];
				lightDir = directionalLightRayMarching.direction;
				lightCol = directionalLight.color;
				l = lightDir;
				lighDif = clamp(dot(n, l), 0., 1.);
				sdfContext = RayMarch(p+n*SURF_DIST*2., l);
				if(sdfContext.d<length(lightDir)) lighDif *= .1;
				dif += lightCol * lighDif;
			}
			#pragma unroll_loop_end
		#endif
		return dif;
	#else
		return vec3(1.0, 1.0, 1.0);
	#endif
}
float calcSoftshadow( in vec3 ro, in vec3 rd, float mint, float maxt, float k )
{
	float res = 1.0;
	float ph = 1e20;
	for( float t=mint; t<maxt; )
	{
		float h = GetDist(ro + rd*t).d;
		if( h<0.001 )
			return 0.0;
		float y = h*h/(2.0*ph);
		float d = sqrt(h*h-y*y);
		res = min( res, k*d/max(0.0,t-y) );
		ph = h;
		t += h;
	}
	return res;
}
vec3 applyMaterial(vec3 p, vec3 n, vec3 rayDir, vec3 col, int mat){
	vec3 v_POLY_constant1_val = vec3(1.0, 1.0, 1.0);
	
	vec3 v_POLY_envMapTint_val = vec3(0.0, 0.0, 0.0);
	
	vec3 v_POLY_globals1_position = p;
	vec3 v_POLY_globals1_cameraPosition = cameraPosition;
	
	float v_POLY_envMapFresnel_val = 0.0;
	
	float v_POLY_envMapFresnelPower_val = 0.0;
	
	float v_POLY_SDFGradient1_sdf = v_POLY_SDFGradient1_sdfFunction(v_POLY_globals1_position, 0.0);
	vec3 v_POLY_SDFGradient1_gradient = v_POLY_SDFGradient1_gradientFunction(v_POLY_globals1_position, 0.0);
	
	vec3 v_POLY_normalize1_normalized = normalize(v_POLY_globals1_cameraPosition);
	
	float v_POLY_dot1_val = dot(v_POLY_SDFGradient1_gradient, v_POLY_normalize1_normalized);
	
	float v_POLY_complement1_val = complement(v_POLY_dot1_val);
	
	float v_POLY_pow1_val = pow(v_POLY_complement1_val, 0.0);
	
	float v_POLY_abs1_val = abs(v_POLY_pow1_val);
	
	if(mat == _MAT_RAYMARCHINGBUILDER1_SDFMATERIAL1){
		col *= v_POLY_constant1_val;
		vec3 r = normalize(reflect(rayDir, n));
		vec2 uv = vec2( atan( -r.z, -r.x ) * RECIPROCAL_PI2 + 0.5, r.y * 0.5 + 0.5 );
		float fresnel = pow(1.-dot(normalize(cameraPosition), n), v_POLY_envMapFresnelPower_val);
		float fresnelFactor = (1.-v_POLY_envMapFresnel_val) + v_POLY_envMapFresnel_val*fresnel;
		vec3 env = texture2D(v_POLY_texture_envTexture1, uv).rgb * v_POLY_envMapTint_val * v_POLY_abs1_val * fresnelFactor;
		col += env;
	}
	
	return col;
}
vec4 applyShading(vec3 rayOrigin, vec3 rayDir, SDFContext sdfContext){
	vec3 p = rayOrigin + rayDir * sdfContext.d;
	vec3 n = GetNormal(p);
	vec3 diffuse = GetLight(p, n);
	vec3 col = applyMaterial(p, n, rayDir, diffuse, sdfContext.matId);
		
	col = pow( col, vec3(0.4545) ); 
	return vec4(col, 1.);
}
void main()	{
	vec3 rayDir = normalize(vPw - cameraPosition);
	vec3 rayOrigin = cameraPosition;
	SDFContext sdfContext = RayMarch(rayOrigin, rayDir);
	gl_FragColor = sdfContext.d<MAX_DIST ? applyShading(rayOrigin, rayDir, sdfContext) : vec4(.0,.0,.0,.0);
}