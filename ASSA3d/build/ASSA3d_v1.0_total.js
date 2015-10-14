
/*
 *  ASSA3d 자바스크립트 구현
 *  MIT-license
 */

var ASSA3d = ASSA3d || {};



// core

/*
 * @author: SKKUASSA
 */


ASSA3d.Vec3 = function(x,y,z){
	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;
	
};

ASSA3d.Vec3.prototype = {
	
	constructor: ASSA3d.Vec3,
	
	set: function(x,y,z){
		this.x = x;
		this.y = y;
		this.z = z;
		
		return this;
	},
	add: function( v1, v2 ){
		this.x = v1.x + v2.x;
		this.y = v1.y + v2.y;
		this.z = v1.z + v2.z;
		return this;
	},
	addSelf: function (v ){
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		return this;
	},
	sub: function( v1, v2 ){
		this.x = v1.x - v2.x;
		this.y = v1.y - v2.y;
		this.z = v1.z - v2.z;
		return this;
	},
	lengthSq: function(){
		var x = this.x, y = this.y, z = this.z;
		return x*x + y*y + z*z;
	},
	length: function(){
		return Math.sqrt(this.lengthSq());
	},
	divScalar: function( s ){
		if(s){
			this.x /= s;
			this.y /= s;
			this.z /= s;
		}else{
			this.x  = 0;
			this.y = 0;
			this.z=  0;
		}
		return this;
	},
	mulScalar: function( s ){
		this.x *= s;
		this.y *= s;
		this.z *= s;
		return this;
	},
	normalize: function(){
		return this.divScalar(this.length());
	},
	cross: function( a, b ){
		
		this.x = a.y*b.z - a.z*b.y;
		this.y = a.z*b.x - a.x*b.z;
		this.z = a.x*b.y - a.y*b.x;
		
		return this;
	},
	copy: function( v ){
		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
		return this;
	},
	
	// 내적연산, Vec3 프로토타입에 메서드 추가
	dot: function ( v ){
		return this.x * v.x + this.y * v.y + this.z * v.z;
	},
	
	negSelf: function(){
		this.x *= -1;
		this.y *= -1;
		this.z *= -1;
		return this;
	}
	
};
/* 
 * @author: SKKUASSA
 */

ASSA3d.Vec4 = function(x,y,z,w){
	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;
	this.w = w || 1;
	
};

ASSA3d.Vec4.prototype = {
	
	constructor: ASSA3d.Vec4,
	
	set: function(x,y,z,w){
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
		
		return this;
	},
	subSelf: function ( v ){
		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
		this.w -= v.w;
		
		return this;
	},
	divScalar: function( s ){
		if(s){
			this.x /= s;
			this.y /= s;
			this.z /= s;
			this.w /= s;
		}else{
			this.x = 0;
			this.y = 0;
			this.z = 0;
			this.w = 0;
		}
		return this;
	},
	mulSelf: function( s ){
		this.x *= s;
		this.y *= s;
		this.z *= s;
		this.w *= s;
		return this;
	},
	copy: function( v ){
		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
		this.w = (v.w !== undefined)? v.w : 1;
		return this;
	}
};


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



/*
 *  @author: SKKUASSA
 */


ASSA3d.LC = function(){
	
	// 위치 벡터
	this.position = new ASSA3d.Vec3(0,0,0);
		
	// 자세 벡터들
	// 직교 좌표계를 나타낸다. 
	// 항상 직교를 이루도록 제어해야 된다.
	// 항상 크기가 1이 되도록 정규화 해야된다.
	this.up = new ASSA3d.Vec3(0,1,0); // y 축
	this.at = new ASSA3d.Vec3(0,0,1); // z 축
	this.hv = new ASSA3d.Vec3(1,0,0); // x 축
	
	// 변환 되는 중심점 
	this._center = new ASSA3d.Vec4();
	this.parent = null;
	
	
	// 카메라를 부착 가능
	this.camera = null;
};

ASSA3d.LC.prototype = {
	constructor: ASSA3d.LC,
	
	lookAt: function( x, y, z ){
		
		var pos = this.position;
		var at = this.at;
		
		// 좌표계가 바라보는 방향 세팅
		this.at.x = x - pos.x;
		this.at.y = y - pos.y;
		this.at.z = z - pos.z;
				
		this.at.normalize();
		
		// 직교 좌표계 세팅
		this.hv.cross( this.up, this.at ); // 외적
		this.hv.normalize();
		
		this.up.cross( this.at, this.hv ); // 다시외적
		
		
	},
};

/*
 * 
 * @author: SKKUASSA
 */


ASSA3d.Matstack = function(){
	
	this.mats = [];
	
};

ASSA3d.Matstack.prototype = {
	constructor: ASSA3d.Matstack,
	
	push: function(mat){
		this.mats.push(mat);
	},
	pop: function(){
		return this.mats.pop();
	},
	/*
	 * 행렬 스택을 역순으로 진행하면서 
	 * 연속으로 벡터를 계산한다.
	 */
	calc: function( v ){
		
		for(var t = this.mats.length; t > 0; t--){
			this.mats[t-1].mulVec4(v);
		}
		
		return v;
	}
	
};

/*
 * @author: SKKUASSA
 */

ASSA3d.Face3 = function(obj, p1, p2, p3, faceColor, edgeColor){
	
	this.parent = obj;
	this.visible = false;
	
	this.i1 = p1;
	this.i2 = p2;
	this.i3 = p3;
	
	// _p 배열에는 월드좌표를 가리키고 있다.
	this._p = new Array(6); // ref Vec4
	this.cnt=0;
	this._v = null;
	//------------------------------------------//
	
	this.normal = new ASSA3d.Vec3();
	
	this.faceColor = [127,127,127,1.0];
	if(faceColor){
		this.faceColor[0] = faceColor[0];
		this.faceColor[1] = faceColor[1];
		this.faceColor[2] = faceColor[2];
		this.faceColor[3] = faceColor[3];
	}
	this.edgeColor = edgeColor || null;
	if(edgeColor){
		this.edgeColor[0] = edgeColor[0];
		this.edgeColor[1] = edgeColor[1];
		this.edgeColor[2] = edgeColor[2];
		this.edgeColor[3] = edgeColor[3];
	}
};

ASSA3d.Face3.prototype = {
	constructor: ASSA3d.Face3,
	depth: function(){
		return (this._p[0].z + this._p[1].z + this._p[2].z)/3;
	},
};

/*
 * @author: SKKUASSA
 */

ASSA3d.Face4 = function(obj, p1, p2, p3, p4, faceColor, edgeColor){
	
	this.parent = obj;
	this.visible = false;
	
	this.i1 = p1;
	this.i2 = p2;
	this.i3 = p3;
	this.i4 = p4;
	
	// _p 배열에는 월드좌표를 가리키고 있다.
	this._p = new Array(8); // ref Vec4
	this.cnt=0;
	this._v = null;
	//------------------------------------------//
	
	this.normal = new ASSA3d.Vec3();
	
	this.faceColor = [127,127,127,1.0];
	if(faceColor){
		this.faceColor[0] = faceColor[0];
		this.faceColor[1] = faceColor[1];
		this.faceColor[2] = faceColor[2];
		this.faceColor[3] = faceColor[3];
	}
	this.edgeColor = edgeColor || null;
	
	
};

ASSA3d.Face4.prototype = {
	constructor: ASSA3d.Face4,
	depth: function(){
		return (this._p[0].z + this._p[1].z + this._p[2].z + this._p[3].z)/4;
	},
};

/*
 * @author: SKKUASSA
 */

ASSA3d.Projector = function(width, height){
	
	// 뷰포트 행렬
	var viewportMat = new ASSA3d.Mat4().setViewport(width, height);
	
	// 카메라 관련 행렬 (모델뷰, 원근투영)
	var modelviewMat = new ASSA3d.Mat4();
	var perspectiveMat=new ASSA3d.Mat4();
	
	// 행렬 스택
	var stack = new ASSA3d.Matstack();
	
	
	// 임시 회전 행렬, 이동 행렬
	var _rMat = new ASSA3d.Mat4();
	var _tMat = new ASSA3d.Mat4();
		
	
	var _vertexPool = new Array();
	var _prev = 0;
	var _curr = 0;
	
	var _atomsPool = new Array();
	var _atomsPoolCurr = 0;
	
	var _iter = 0;
	
	var _faceNormal1 = new ASSA3d.Vec3();
	var _faceNormal2 = new ASSA3d.Vec3();
	
	var _particlePick = new ASSA3d.Vec4();
	
	/*
	 * 로컬 좌표계 -> 월드 좌표계 , 변환함수
	 */
	function LC2WC( obj , camera ){
		
		var pos = obj.position;
		var rMat, tMat;
		
		// 사전 작업
		if(obj instanceof ASSA3d.Composite){
			rMat = obj.rMat;
			tMat = obj.tMat;
		}else{
			rMat = _rMat;
			tMat = _tMat;
			
			
		}
		
		// 회전 행렬과, 이동 행렬 업데이트 
		rMat.setOrthogonalT(obj.hv, obj.up, obj.at);
		tMat.setTranslation(pos.x,  pos.y,  pos.z );
		
		
		// ----------------------
		stack.push(tMat);
		stack.push(rMat);
		
		
		// 객체 중심점으로 셋
		obj._center.set(0,0,0,1);
		// 월드 좌표로 변환
		stack.calc(obj._center);
		
		
		
		// 카메라가 부착되었다면
		if(obj.camera){
			obj.camera.at.copy(obj.at);
			obj.camera.up.copy(obj.up);
			obj.camera.hv.copy(obj.hv);
			obj.camera.position.copy(obj._center);
			
		}
		
		
		
		if(obj instanceof ASSA3d.Composite){
			
			// 복합 객체인 경우
			for(var i=0; i < obj.items.length; i++){
				
				LC2WC( obj.items[i] , camera ); // 재귀 호출
				
			}
		
		}else
		if(obj instanceof ASSA3d.Particle){
			
			if(_vertexPool[ _curr ] === undefined){
				_vertexPool[ _curr ] = new ASSA3d.Vec4();
			}
			_vertexPool[ _curr ].copy( obj._center );
			obj._p = _vertexPool[ _curr++ ];
			_atomsPool[ _atomsPoolCurr++ ] = obj;
			
			_prev = _curr;
			
		}else{
			
			if(obj.points !== undefined){
				
				for(var i=0; i < obj.points.length; i++){
					
					if(_vertexPool[ _curr ] === undefined){
						_vertexPool[ _curr ] = new ASSA3d.Vec4();
					}
					
					_vertexPool[ _curr ].copy(obj.points[i]);
					
					stack.calc(_vertexPool[_curr]);
					
					_curr++;
				}
				for(var i=0; i < obj.atoms.length; i++){
					
					var atom = obj.atoms[i];
					
					if(atom instanceof ASSA3d.Face4){
						
						atom._p[0] = _vertexPool[ _prev + atom.i1 ];
						atom._p[1] = _vertexPool[ _prev + atom.i2 ];
						atom._p[2] = _vertexPool[ _prev + atom.i3 ];
						atom._p[3] = _vertexPool[ _prev + atom.i4 ];
						atom.cnt = 4;
						
						_faceNormal1.sub(atom._p[0],atom._p[1]);
						_faceNormal2.sub(atom._p[1],atom._p[2]);
						atom.normal.cross(_faceNormal1, _faceNormal2);
						//노말 벡터 
						atom.normal.normalize();
						
					
					}else
					if(atom instanceof ASSA3d.Face3){
						atom._p[0] = _vertexPool[ _prev + atom.i1 ];
						atom._p[1] = _vertexPool[ _prev + atom.i2 ];
						atom._p[2] = _vertexPool[ _prev + atom.i3 ];
						atom.cnt = 3;
						
						_faceNormal1.sub(atom._p[0],atom._p[1]);
						_faceNormal2.sub(atom._p[1],atom._p[2]);
						atom.normal.cross(_faceNormal1, _faceNormal2);
						//노말 벡터 
						atom.normal.normalize();
					}
					
					_atomsPool[ _atomsPoolCurr++ ] = atom;
					
				}
				
				_prev = _curr;
				
			}/*if*/
			
		}
		
			
		stack.pop();
		stack.pop();
		//------------------------
		
		
	}; /*end of LC2WC func*/
	
	var near = 0;
	
	this.modelviewTransform = function( scene, camera ){
		
		_prev = 0;
		_curr = 0;
		_atomsPoolCurr = 0;
		
		// 로컬 -> 월드
		LC2WC( camera );
		
		for(var i=0; i < scene.objs.length; i++){
			LC2WC( scene.objs[i] , camera );
		}
		// 카메라 행렬 업데이트 
		modelviewMat.setModelview( camera );
		perspectiveMat.setPerspective( camera );
		near = camera.near;
		
		// 모델뷰 변환
		for(var i=0; i < _curr; i++){
			
			modelviewMat.mulVec4( _vertexPool[i] );
			
		}
		
		// 깊이값으로 정렬 
		_atomsPool.sort(function(a,b){
			return a.depth() - b.depth();
		});
		
		
	};
	
	/*
	 *  iterator pattern
	 */
	this.hasNextAtom = function(){
		return (_iter < _atomsPoolCurr)? true: false;
	};
	this.next = function(){
		return _atomsPool[ _iter++ ];
	};
	this.initIter = function(){
		_iter = 0;
	};
	
	
	// for picking
	this.initPrevIter = function(){
		_iter = _atomsPoolCurr;
	};
	this.hasPrevAtom = function(){
		return (_iter > 0)? true: false;
	};


	this.prevClipAtom = function(){
		
		var atom = _atomsPool[  (_iter--)-1 ];
	
		return clipAtom(atom);
	};

	this.nextClipAtom = function( ){
		
		var atom = _atomsPool[  _iter++ ];
		
		return clipAtom(atom);
		
	};
	///
	
	function clipAtom( atom  ){
		if(atom instanceof ASSA3d.Face4 || 
			atom instanceof ASSA3d.Face3){
						
			for(var i=0; i < atom.cnt; i++){
				facevertics[i].copy( atom._p[i]);
			}
			
			facecnt = atom.cnt;
			
			// z-clipping
			clipFacePlane(atom, 2, -near, true);
			
			if(facecnt == 0){
				atom.visible = false;
				return null;
			}
			//perspective
			for(var i=0; i < facecnt; i++){
				var vtx = facevertics[i];
				perspectiveMat.mulVec4(vtx);
				vtx.divScalar(vtx.w); // division	
			}
			

			// CVV-clipping
			clipFacePlane(atom, 0, -1, false);
			// -1 <= x
			if(facecnt == 0) {
				atom.visible = false;
				return null;
			}
			clipFacePlane(atom, 0, 1, true);
			//  x <= 1
			if(facecnt == 0) {
				atom.visible = false;
				return null;
			}
			clipFacePlane(atom, 1, -1, false);
			// -1 <= y
			if(facecnt == 0) {
				atom.visible = false;
				return null;
			}
			clipFacePlane(atom, 1, 1, true);
			//  y <= 1
			if(facecnt == 0) {
				atom.visible = false;
				return null;
			}
			clipFacePlane(atom, 2, -1, false);
			// -1 <= z
			if(facecnt == 0) {
				atom.visible = false;
				return null;
			}
			clipFacePlane(atom, 2, 1, true);
			//  z <= 1
			if(facecnt == 0) {
				atom.visible = false;
				return null;
			}

			// 모든 클리핑 통과 , 화면에 보인다.
			atom.visible = true;
			
			for(var i=0; i < facecnt; i++){
				var vtx = facevertics[i];
				viewportMat.mulVec4(vtx);
			}
			
			// 방금 계산된 결과를 링크한다.
			atom._v = facevertics;
			atom.cnt = facecnt;

		}else
		if(atom instanceof ASSA3d.Particle){
			
			_particlePick.copy(atom._center);
			
			modelviewMat.mulVec4( _particlePick );
			
			atom.hrVec.set(
				_particlePick.x + atom.r,
				_particlePick.y,
				_particlePick.z,
				1
			);
			
			if(_particlePick.z > -near){
				atom.visible = false;
				return null;
			}
			
			// perspective
			perspectiveMat.mulVec4(_particlePick);
			_particlePick.divScalar(_particlePick.w);
			
			perspectiveMat.mulVec4(atom.hrVec);
			atom.hrVec.divScalar(atom.hrVec.w);
			
			var chk = _particlePick;
			
			if(Math.abs(chk.x) > 1 || Math.abs(chk.y) > 1 || Math.abs(chk.z) > 1){
				atom.visible = false;
				return null;
			}
			
			viewportMat.mulVec4(_particlePick);
			viewportMat.mulVec4(atom.hrVec);
			
			atom.screenX = _particlePick.x;
			atom.screenY = _particlePick.y;
			
			var dx = _particlePick.x - atom.hrVec.x;
			var dy = _particlePick.y - atom.hrVec.y;
			
			atom.screenSize = Math.sqrt(dx*dx + dy*dy);
			
			atom.visible = true;
		}
		
		
		return atom;
	};
	
	
	
	//-----------------------------
	// ==  legacy code
	//-----------------------------
	var facevertics = new Array(8);
	var _face4vertics= new Array(8);
	for(var i=0; i < 8; i++){
		_face4vertics[i] = new ASSA3d.Vec4();
		facevertics[i] = new ASSA3d.Vec4();
	}
	var facecnt = 0;
	
	// Face 클리핑  함수,
	// 평면으로 자른다
	// axis : x=0, y=1, z=2
	// limit: 평면 지점
	// inInLess : 작은것이 안쪽 영역인가? true, false	
	function clipFacePlane(face, axis, limit, isInLess) {

		function getT(a, b) {
			return (a == b) ? 0 : -a / (b - a);
		};

		function paraEqu(a1, a2, t) {// a1 -> a2
			return a1 + (a2 - a1) * t;
		};

		var cnt = 0;

		for(var i = 0; i < facecnt; i++) {
			var a = facevertics[i % facecnt];
			var b = facevertics[(i + 1) % facecnt];
			var ad = 0, bd = 0;

			// x 평면 기준
			if(axis == 0) {
				if(isInLess) {// limit 보다 작은 것이 in 상태

					// out -> in
					if(a.x > limit && b.x <= limit) {
						var t = getT(a.x - limit, b.x - limit);
						_face4vertics[cnt].y = paraEqu(a.y, b.y, t);
						_face4vertics[cnt].z = paraEqu(a.z, b.z, t);
						_face4vertics[cnt].x = limit;
						cnt++;
					} else// in -> in
					if(a.x <= limit && b.x <= limit) {
						_face4vertics[cnt].copy(a);
						cnt++;
					} else// in->out
					if(a.x <= limit && b.x > limit) {
						_face4vertics[cnt].copy(a);
						cnt++;
						var t = getT(a.x - limit, b.x - limit);
						_face4vertics[cnt].y = paraEqu(a.y, b.y, t);
						_face4vertics[cnt].z = paraEqu(a.z, b.z, t);
						_face4vertics[cnt].x = limit;
						cnt++;
					} else// out->out
					if(a.x > limit && b.x > limit) {
						//pass
					} else {
					}

				} else {//  limit 보다 큰것이 in 상태
					// out -> in
					if(a.x < limit && b.x >= limit) {
						var t = getT(a.x - limit, b.x - limit);
						_face4vertics[cnt].y = paraEqu(a.y, b.y, t);
						_face4vertics[cnt].z = paraEqu(a.z, b.z, t);
						_face4vertics[cnt].x = limit;
						cnt++;
					} else// in -> in
					if(a.x >= limit && b.x >= limit) {
						_face4vertics[cnt].copy(a);
						cnt++;
					} else// in->out
					if(a.x >= limit && b.x < limit) {
						_face4vertics[cnt].copy(a);
						cnt++;
						var t = getT(a.x - limit, b.x - limit);
						_face4vertics[cnt].y = paraEqu(a.y, b.y, t);
						_face4vertics[cnt].z = paraEqu(a.z, b.z, t);
						_face4vertics[cnt].x = limit;
						cnt++;
					} else// out->out
					if(a.x < limit && b.x < limit) {
						//pass
					} else {
					}
				}
			} else// y 평면 기준
			if(axis == 1) {
				if(isInLess) {// limit 보다 작은 것이 in 상태

					// out -> in
					if(a.y > limit && b.y <= limit) {
						var t = getT(a.y - limit, b.y - limit);
						_face4vertics[cnt].x = paraEqu(a.x, b.x, t);
						_face4vertics[cnt].z = paraEqu(a.z, b.z, t);
						_face4vertics[cnt].y = limit;
						cnt++;
					} else// in -> in
					if(a.y <= limit && b.y <= limit) {
						_face4vertics[cnt].copy(a);
						cnt++;
					} else// in->out
					if(a.y <= limit && b.y > limit) {
						_face4vertics[cnt].copy(a);
						cnt++;
						var t = getT(a.y - limit, b.y - limit);
						_face4vertics[cnt].x = paraEqu(a.x, b.x, t);
						_face4vertics[cnt].z = paraEqu(a.z, b.z, t);
						_face4vertics[cnt].y = limit;
						cnt++;
					} else// out->out
					if(a.y > limit && b.y > limit) {
						//pass
					} else {
					}

				} else {//  limit 보다 큰것이 in 상태
					// out -> in
					if(a.y < limit && b.y >= limit) {
						var t = getT(a.y - limit, b.y - limit);
						_face4vertics[cnt].x = paraEqu(a.x, b.x, t);
						_face4vertics[cnt].z = paraEqu(a.z, b.z, t);
						_face4vertics[cnt].y = limit;
						cnt++;
					} else// in -> in
					if(a.y >= limit && b.y >= limit) {
						_face4vertics[cnt].copy(a);
						cnt++;
					} else// in->out
					if(a.y >= limit && b.y < limit) {
						_face4vertics[cnt].copy(a);
						cnt++;
						var t = getT(a.y - limit, b.y - limit);
						_face4vertics[cnt].x = paraEqu(a.x, b.x, t);
						_face4vertics[cnt].z = paraEqu(a.z, b.z, t);
						_face4vertics[cnt].y = limit;
						cnt++;
					} else// out->out
					if(a.y < limit && b.y < limit) {
						//pass
					} else {
					}
				}
			} else// z 평면 기준
			if(axis == 2) {
				if(isInLess) {// limit 보다 작은 것이 in 상태

					// out -> in
					if(a.z > limit && b.z <= limit) {
						var t = getT(a.z - limit, b.z - limit);
						_face4vertics[cnt].y = paraEqu(a.y, b.y, t);
						_face4vertics[cnt].x = paraEqu(a.x, b.x, t);
						_face4vertics[cnt].z = limit;
						cnt++;
					} else// in -> in
					if(a.z <= limit && b.z <= limit) {
						_face4vertics[cnt].copy(a);
						cnt++;
						//console.log(cnt);
					} else// in->out
					if(a.z <= limit && b.z > limit) {
						_face4vertics[cnt].copy(a);
						cnt++;
						var t = getT(a.z - limit, b.z - limit);
						_face4vertics[cnt].y = paraEqu(a.y, b.y, t);
						_face4vertics[cnt].x = paraEqu(a.x, b.x, t);
						_face4vertics[cnt].z = limit;
						cnt++;
					} else// out->out
					if(a.z > limit && b.z > limit) {
						//pass
					} else {
					}

				} else {//  limit 보다 큰것이 in 상태
					// out -> in
					if(a.z < limit && b.z >= limit) {
						var t = getT(a.z - limit, b.z - limit);
						_face4vertics[cnt].y = paraEqu(a.y, b.y, t);
						_face4vertics[cnt].x = paraEqu(a.x, b.x, t);
						_face4vertics[cnt].z = limit;
						cnt++;
					} else// in -> in
					if(a.z >= limit && b.z >= limit) {
						_face4vertics[cnt].copy(a);
						cnt++;
					} else// in->out
					if(a.z >= limit && b.z < limit) {
						_face4vertics[cnt].copy(a);
						cnt++;
						var t = getT(a.z - limit, b.z - limit);
						_face4vertics[cnt].y = paraEqu(a.y, b.y, t);
						_face4vertics[cnt].x = paraEqu(a.x, b.x, t);
						_face4vertics[cnt].z = limit;
						cnt++;
					} else// out->out
					if(a.z < limit && b.z < limit) {
						//pass
					} else {
					}
				}
			} else {
			}

		}/*for*/

		for(var i = 0; i < cnt; i++) {
			facevertics[i].copy(_face4vertics[i]);
		}
		facecnt = cnt;
	};
	
};

// objects

/*
 * @author: SKKUASSA
 */


ASSA3d.Particle = function(r, color, prog){
	
	ASSA3d.LC.call(this);
	
	this.visible = false;
	
	this._p;
	
	this.r = r || 1; // radius

	// horizontal radius vector
	this.hrVec = new ASSA3d.Vec4();
	
	this.screenSize = 0;
	this.screenX = 0;
	this.screenY = 0;
	
	this.color = [127,127,127,1.0];
	if(color){
		this.color[0] = color[0];
		this.color[1] = color[1];
		this.color[2] = color[2];
		this.color[3] = color[3];
	}
	
	this.prog = prog || null;
	
};

ASSA3d.Particle.prototype = new ASSA3d.LC();
ASSA3d.Particle.prototype.constructor = ASSA3d.Particle;

ASSA3d.Particle.prototype.depth = function(){
	return this._p.z;
};
/*
 * @author: SKKUASSA
 */

ASSA3d.Composite = function(){
	ASSA3d.LC.call(this);
	this.rMat = new ASSA3d.Mat4();
	this.tMat = new ASSA3d.Mat4();
	
	this.items = [];
	
};

ASSA3d.Composite.prototype = new ASSA3d.LC();
ASSA3d.Composite.prototype.constructor = ASSA3d.Composite;

ASSA3d.Composite.prototype.addItem = function( obj ){
	
	obj.parent = this;
	this.items.push( obj );
	
};

/*
 * @author: SKKUASSA
 */


ASSA3d.Obj3d = function(){
	
	ASSA3d.LC.call(this);

	this.points = []; // Vec3
	this.atoms = [];

};

ASSA3d.Obj3d.prototype = new ASSA3d.LC();
ASSA3d.Obj3d.prototype.constructor = ASSA3d.Obj3d;

ASSA3d.Obj3d.prototype.addPoint = function(x, y, z){
	
	this.points.push( new ASSA3d.Vec3(x,y,z) );
	
};

ASSA3d.Obj3d.prototype.addFace3= function( idx1, idx2, idx3, faceColor, edgeColor){
	
	var len = this.points.length;
	
	if(!(0 <= idx1 && idx1 < len)) return;
	if(!(0 <= idx2 && idx2 < len)) return;
	if(!(0 <= idx3 && idx3 < len)) return;
	
	this.atoms.push(new ASSA3d.Face3(this, idx1, idx2, idx3,faceColor, edgeColor));
	
};
ASSA3d.Obj3d.prototype.addFace4= function( idx1, idx2, idx3, idx4 ,faceColor, edgeColor){
	
	var len = this.points.length;
	
	if(!(0 <= idx1 && idx1 < len)) return;
	if(!(0 <= idx2 && idx2 < len)) return;
	if(!(0 <= idx3 && idx3 < len)) return;
	if(!(0 <= idx4 && idx4 < len)) return;
	
	this.atoms.push(new ASSA3d.Face4(this, idx1, idx2, idx3, idx4, faceColor, edgeColor));
	
};



/*
 * @author: SKKUASSA
 * 
 * 
 * Obj3d 를 상속하여 만든다.
 * 
 */


ASSA3d.Cube = function(color, edgeColor){
	
	ASSA3d.Obj3d.call(this);
	// 점 8개 
	this.addPoint(-1,-1,-1);
	this.addPoint( 1,-1,-1);
	this.addPoint( 1, 1,-1);
	this.addPoint(-1, 1,-1);
	
	this.addPoint(-1,-1, 1);
	this.addPoint( 1,-1, 1);
	this.addPoint( 1, 1, 1);
	this.addPoint(-1, 1, 1);
	
	
	// 면 6개 , CCW 순, 노말벡터가 바깥을 바라보도록한다.
	this.addFace4(3,2,1,0, color, edgeColor);
	this.addFace4(4,5,6,7, color, edgeColor);
	this.addFace4(1,2,6,5, color, edgeColor);
	this.addFace4(0,4,7,3, color, edgeColor);
	this.addFace4(2,3,7,6, color, edgeColor);
	this.addFace4(0,1,5,4, color, edgeColor);
	
};

ASSA3d.Cube.prototype = new ASSA3d.Obj3d();
ASSA3d.Cube.prototype.constructor = ASSA3d.Cube;

ASSA3d.Cube.prototype.mulScalar = function( s ){
	
	for(var i=0; i < this.points.length; i++){
		this.points[i].mulScalar(s);
	}
};

/*
 * @author: SKKUASSA
 * 
 * 
 * Obj3d 를 상속하여 만든다.
 * 
 */


ASSA3d.Grid = function(n, m, color, edgeColor){
	
	ASSA3d.Obj3d.call(this);
	
	
	this.n = n || 2;
	this.m = m || 2;
	
	for(var i=0; i < this.m+1; i++){
		
		for(var j=0; j < this.n+1; j++){
			
			this.addPoint(2*j - this.n, 2*i - this.m, 0);
			
		}
		
	}
	
	var cnt = 0;
	
	for(var i=0; i < this.m; i++){
		
		for(var j=0; j < this.n; j++){
			
			var i1 = cnt++ + i;
			var i2 = i1 + 1;
			var i3 = (this.n+1)+i2;
			var i4 = (this.n+1)+i1;
			
			this.addFace4(i1, i2, i3, i4, color, edgeColor);
			
		}
		
	}
	
};

ASSA3d.Grid.prototype = new ASSA3d.Obj3d();
ASSA3d.Grid.prototype.constructor = ASSA3d.Grid;

ASSA3d.Grid.prototype.mulScalar = function( s ){
	
	for(var i=0; i < this.points.length; i++){
		this.points[i].mulScalar(s);
	}
};


/*
 * @author: SKKUASSA
 */

ASSA3d.Camera = function(fov,aspect,near,far){
	
	ASSA3d.LC.call(this);
	
	this.fov = fov || 45.0;
	this.aspect = aspect || 1.0;
	
	this.near = near || 0.1;
	this.far = far || 1000;
	
	
	
};

// 프로토타입 상속
ASSA3d.Camera.prototype = new ASSA3d.LC();
ASSA3d.Camera.prototype.constructor = ASSA3d.Camera;





/*
 * @author: SKKUASSA
 */

ASSA3d.Light = function(r,g,b){
	
	ASSA3d.LC.call(this);
	
	this.r = (r !== undefined)? r: 127;
	this.g = (g !== undefined)? g: 127;;
	this.b = (b !== undefined)? b: 127;;
	
	
};

// 프로토타입 상속
ASSA3d.Light.prototype = new ASSA3d.LC();
ASSA3d.Light.prototype.constructor = ASSA3d.Light;




/*
 * @author: SKKUASSA
 */


ASSA3d.Scene = function(){
	
	this.lights = [];
	this.objs = [];
};

ASSA3d.Scene.prototype = {
	constructor: ASSA3d.Scene,
	
	add: function( obj ){
		if(obj instanceof ASSA3d.Light){
			this.lights.push(obj);
		}else{
			this.objs.push(obj);
		}
	},
	
}; 
/*
 * @author: SKKUASSA
 */


ASSA3d.Renderer = function( elem ){
	
	var elem = elem || document.createElement('canvas');
	var width = elem.width;
	var height = elem.height;
	
	
	var ctx = elem.getContext('2d'); // 2d 에서 구현하는 소프트웨어 렌더a
		
	
	var projector = new ASSA3d.Projector(width, height);
	
	var prevScene, prevCamera;
	
	// 렌더링
	this.render = function(scene, camera){
		
		prevScene = scene, prevCamera = camera;
		
		ctx.clearRect(0,0,width, height);
		
		// 모델 뷰까지 각 아톰을 구해놓는다.
		// 내부적으로 z-sorting 까지 되어있다.
		projector.modelviewTransform(scene, camera);
		
		
		projector.initIter();
		
		// iterator pattern
		while(projector.hasNextAtom()){
			
			var atom = projector.nextClipAtom( );
			
			if(!atom || !atom.visible) continue;
						
			if(atom.cnt >2 && atom instanceof ASSA3d.Face4 ||atom instanceof ASSA3d.Face3 ){
				ctx.beginPath();
				var a = atom._v[0];
				var b = atom._v[1];
				ctx.moveTo(a.x, a.y);	
				for( j = 1; j < atom.cnt; j++) {
					a = atom._v[j % atom.cnt];
					b = atom._v[(j + 1) % atom.cnt];

					ctx.lineTo(a.x, a.y);
				}
				ctx.closePath();
				
				var cc = [atom.faceColor[0],atom.faceColor[1],atom.faceColor[2],atom.faceColor[3]];
				
				updateColor(atom.normal, scene.lights, cc);
				
				ctx.fillStyle = makeColorStr(cc);
				ctx.fill();
				if(atom.edgeColor){
					ctx.strokeStyle = makeColorStr(atom.edgeColor);
					ctx.stroke();
				}
			}else
			if( atom instanceof ASSA3d.Particle){
				
				if(atom.prog){
					atom.prog(atom, ctx);
				}else{
					fillCircle(
						atom.screenX,
						atom.screenY,
						atom.screenSize,
						makeColorStr(atom.color)
					);
				}
				
			}
			
			
		}/*while*/
		
	};
	
	function fillCircle(x,y,r,color){
			ctx.beginPath();
			ctx.arc(x, y, r, 0, Math.PI * 2, false);
			ctx.fillStyle = color || 'rgba(128,128,128,1.0)';
			ctx.fill();
			ctx.closePath();
		};
	// functions
	function drawLine(x1,y1,x2,y2,color){
			ctx.beginPath();
			ctx.moveTo(x1,y1);
			ctx.lineTo(x2,y2);
			ctx.closePath();
			ctx.strokeStyle = color || 'rgba(255,255,0,1.0)';
			ctx.stroke();
		};
	
	function makeColorStr(arr){
		return 'rgba('+arr[0]+','+arr[1]+','+arr[2]+','+arr[3]+')';
	};
	
	function updateColor(normal, lights, color){
			
		var r = color[0] / 255;
		var g = color[1] / 255;
		var b = color[2] / 255;
		
		for(var i=0; i < lights.length; i++){
			
			var light = lights[i];
			light.position.normalize();
			
			var amount = normal.dot(light.position);
							
			if(amount <= 0) continue;
			
			r += (light.r / 255) * amount;
			g += (light.g / 255) * amount;
			b += (light.b / 255) * amount;
			
		}
		color[0] = parseInt(((r>1)?1:r) * 255);
		color[1] = parseInt(((g>1)?1:g) * 255);
		color[2] = parseInt(((b>1)?1:b) * 255);
		
	};	
	
	// 화면 좌표에서 오브젝트를 역으로 구해낸다.
	this.picking = function(x, y){
		
		
		projector.initPrevIter();
		
		projector.modelviewTransform(prevScene, prevCamera);
		
		while(projector.hasPrevAtom()){
			
			var atom = projector.prevClipAtom();
			
			if(!atom || !atom.visible) continue;
			
			
			if( atom instanceof ASSA3d.Particle) {
				var lx = atom.screenX - x;
				var ly = atom.screenY - y;
				var lenSq = lx * lx + ly * ly;
				var len = Math.sqrt(lenSq);

				if(atom.screenSize >= len) {
					projector.initIter();
					return atom;
				}
			}else
			if(atom instanceof ASSA3d.Face3 ||
				atom instanceof ASSA3d.Face4){
				
				
				if(atom.cnt > 2) {

					// 교차개수
					var count = 0;

					for(var i = 0; i < atom.cnt; i++) {
						var a = atom._v[i % atom.cnt];
						var b = atom._v[(i + 1) % atom.cnt];

						if(chkIntersection(	x, y, width + 1, y, // (-1, y) 에서 (x, y) 잇는 수평선
											a.x, a.y, b.x, b.y  // Face4 외곽선중 직선 하나
						)
						){
							count++;
						}

					}/*for*/

					if(count % 2) {// 홀수일경우
						projector.initIter();
						return atom;
					}

				}

					
			}
			
		}/*while*/
		
		return null;
	};
	
	function chkIntersection(	x1,y1, x2,y2, x3,y3, x4,y4){
		
		var n = (y4-y3)*(x2-x1)-(x4-x3)*(y2-y1);
		var t = (x4-x3)*(y1-y3)-(y4-y3)*(x1-x3);
		var s = (x2-x1)*(y1-y3)-(y2-y1)*(x1-x3);
		
		t /= n;
		s /= n;
		
		if(t < 0 || t > 1) return false;
		if(s < 0 || s > 1) return false;
		
		return true;
	};
};




