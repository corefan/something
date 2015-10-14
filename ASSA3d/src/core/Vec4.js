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


