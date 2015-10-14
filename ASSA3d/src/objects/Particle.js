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
