
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

