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


