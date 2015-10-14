
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
