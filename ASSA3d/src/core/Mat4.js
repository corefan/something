/*
 * @author: SKKUASSA
 */


ASSA3d.Mat4 = function(
		n11,n12,n13,n14,
		n21,n22,n23,n24,
		n31,n32,n33,n34,
		n41,n42,n43,n44
	){
	// 단위행렬
	this.set(
		n11||1, n12||0, n13||0, n14||0,
		n21||0, n22||1, n23||0, n24||0,
		n31||0, n32||0, n33||1, n34||0,
		n41||0, n42||0, n43||0, n44||1
	);
};


ASSA3d.Mat4.prototype = {
	
	constructor: ASSA3d.Mat4,
	
	set: function(
		n11,n12,n13,n14,
		n21,n22,n23,n24,
		n31,n32,n33,n34,
		n41,n42,n43,n44
	){
		this.n11=n11; this.n12=n12; this.n13=n13; this.n14=n14; 
		this.n21=n21; this.n22=n22; this.n23=n23; this.n24=n24; 
		this.n31=n31; this.n32=n32; this.n33=n33; this.n34=n34; 
		this.n41=n41; this.n42=n42; this.n43=n43; this.n44=n44; 
		return this;
	},
	
	// Mat4 프로토타입에 추가하기	
	setIdentity: function(){
		return this.set(
			1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			0,0,0,1
		);
	},
	setTranslation: function( x, y, z ){
		return this.set(
			1,0,0,x,
			0,1,0,y,
			0,0,1,z,
			0,0,0,1
		);
	},
	/*
	 * Orthogonal Matrix Transpose
	 * 로컬 좌표계 좌표 에서 
	 * 월드 좌표계로 좌표 회전 변환 
	 * 이동변환과 맞물려서 계산된다.
	 * 
	 *  u: x 축 , _hv
	 *  v: y 축 , up
	 *  n: z 축 , at
	 */
	setOrthogonalT: function( u, v, n ){
		return this.set(
			u.x, v.x, n.x, 0,
			u.y, v.y, n.y, 0,
			u.z, v.z, n.z, 0,
			0, 0, 0, 1
		);
	},
	/*
	 * 원점이 일치할 때 
	 * 월드 좌표계의 좌표가 로컬좌표계에서
	 * 어떻게 보이는가
	 */
	setOrthogonal: function( u, v, n ){
		return this.set(
			u.x, u.y, u.z, 0,
			v.x, v.y, v.z, 0,
			n.x, n.y, n.z, 0,
			0, 0, 0, 1
		);
	},
	/*
	 * in Mat4
	 * 카메라 세팅 추가
	 */
	setModelview: function( camera ){
				
		var u = camera.hv, v = camera.up, n = camera.at;
		var cop=  camera.position;
		
		return this.set(
			-u.x, -u.y, -u.z, +u.x*cop.x + u.y*cop.y + u.z*cop.z,
			 v.x,  v.y,  v.z, -v.x*cop.x - v.y*cop.y - v.z*cop.z,
			-n.x, -n.y, -n.z, +n.x*cop.x + n.y*cop.y + n.z*cop.z,
			0,0,0,1
		);
	},
	setFrustum: function( l, r, b, t, n, f){
		return this.set(
			2*n/(r-l), 0 , (r+l)/(r-l), 0,
			0, 2*n/(t-b), (t+b)/(t-b), 0,
			0,0,(n+f)/(n-f), 2*n*f/(n-f),
			0,0,-1,0
			
		);
	},
	setPerspective: function( camera ){
		
		var n = camera.near;
		var f = camera.far;
		var t = n * Math.tan(camera.fov * Math.PI/360.0);
		var b = -t;
		var l = b * camera.aspect;
		var r = t * camera.aspect;
		
		return this.setFrustum(l,r,b,t,n,f);
		
	},
	/*
	 * 뷰포트 변환 ( canvas tag는 왼쪽 상단이 0,0 이기 때문에
	 * 	y 좌표를 뒤집어야 한다. )
	 */
	setViewport: function( width, height ){
		return this.set(
			width/2, 0, 0, width/2,
			0, -height/2, 0, height/2,
			0,0,1,0,
			0,0,0,1
		);
		
	},
	
	mulVec4: function( v ){
		var vx = v.x, vy = v.y, vz = v.z, vw = v.w;
		
		v.x = this.n11*vx + this.n12*vy + this.n13*vz + this.n14*vw;
		v.y = this.n21*vx + this.n22*vy + this.n23*vz + this.n24*vw;
		v.z = this.n31*vx + this.n32*vy + this.n33*vz + this.n34*vw;
		v.w = this.n41*vx + this.n42*vy + this.n43*vz + this.n44*vw;
	
		return v;
	}
};


