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
	}
	
	
	
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
		}

		function paraEqu(a1, a2, t) {// a1 -> a2
			return a1 + (a2 - a1) * t;
		}

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

