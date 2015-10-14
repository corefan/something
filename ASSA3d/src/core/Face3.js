
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
