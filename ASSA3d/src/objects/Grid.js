
/*
 * @author: SKKUASSA
 * 
 * 
 * Obj3d 를 상속하여 만든다.
 * 
 */


ASSA3d.Grid = function(n, m, color, edgeColor){
	
	ASSA3d.Obj3d.call(this);
	
	
	this.n = n || 2;
	this.m = m || 2;
	
	for(var i=0; i < this.m+1; i++){
		
		for(var j=0; j < this.n+1; j++){
			
			this.addPoint(2*j - this.n, 2*i - this.m, 0);
			
		}
		
	}
	
	var cnt = 0;
	
	for(var i=0; i < this.m; i++){
		
		for(var j=0; j < this.n; j++){
			
			var i1 = cnt++ + i;
			var i2 = i1 + 1;
			var i3 = (this.n+1)+i2;
			var i4 = (this.n+1)+i1;
			
			this.addFace4(i1, i2, i3, i4, color, edgeColor);
			
		}
		
	}
	
};

ASSA3d.Grid.prototype = new ASSA3d.Obj3d();
ASSA3d.Grid.prototype.constructor = ASSA3d.Grid;

ASSA3d.Grid.prototype.mulScalar = function( s ){
	
	for(var i=0; i < this.points.length; i++){
		this.points[i].mulScalar(s);
	}
};
