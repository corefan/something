
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
