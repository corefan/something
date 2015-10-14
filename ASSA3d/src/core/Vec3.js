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
