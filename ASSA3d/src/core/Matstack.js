/*
 * 
 * @author: SKKUASSA
 */


ASSA3d.Matstack = function(){
	
	this.mats = [];
	
};

ASSA3d.Matstack.prototype = {
	constructor: ASSA3d.Matstack,
	
	push: function(mat){
		this.mats.push(mat);
	},
	pop: function(){
		return this.mats.pop();
	},
	/*
	 * 행렬 스택을 역순으로 진행하면서 
	 * 연속으로 벡터를 계산한다.
	 */
	calc: function( v ){
		
		for(var t = this.mats.length; t > 0; t--){
			this.mats[t-1].mulVec4(v);
		}
		
		return v;
	}
	
};
