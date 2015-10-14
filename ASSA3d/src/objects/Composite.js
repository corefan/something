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

