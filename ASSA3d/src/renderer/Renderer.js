/*
 * @author: SKKUASSA
 */


ASSA3d.Renderer = function( elem ){
	
	var elem = elem || document.createElement('canvas');
	var width = elem.width;
	var height = elem.height;
	
	
	var ctx = elem.getContext('2d'); // 2d 에서 구현하는 소프트웨어 렌더a
		
	
	var projector = new ASSA3d.Projector(width, height);
	
	var prevScene, prevCamera;
	
	// 렌더링
	this.render = function(scene, camera){
		
		prevScene = scene, prevCamera = camera;
		
		ctx.clearRect(0,0,width, height);
		
		// 모델 뷰까지 각 아톰을 구해놓는다.
		// 내부적으로 z-sorting 까지 되어있다.
		projector.modelviewTransform(scene, camera);
		
		
		projector.initIter();
		
		// iterator pattern
		while(projector.hasNextAtom()){
			
			var atom = projector.nextClipAtom( );
			
			if(!atom || !atom.visible) continue;
						
			if(atom.cnt >2 && atom instanceof ASSA3d.Face4 ||atom instanceof ASSA3d.Face3 ){
				ctx.beginPath();
				var a = atom._v[0];
				var b = atom._v[1];
				ctx.moveTo(a.x, a.y);	
				for( j = 1; j < atom.cnt; j++) {
					a = atom._v[j % atom.cnt];
					b = atom._v[(j + 1) % atom.cnt];

					ctx.lineTo(a.x, a.y);
				}
				ctx.closePath();
				
				var cc = [atom.faceColor[0],atom.faceColor[1],atom.faceColor[2],atom.faceColor[3]];
				
				updateColor(atom.normal, scene.lights, cc)
				
				ctx.fillStyle = makeColorStr(cc);
				ctx.fill();
				if(atom.edgeColor){
					ctx.strokeStyle = makeColorStr(atom.edgeColor);
					ctx.stroke();
				}
			}else
			if( atom instanceof ASSA3d.Particle){
				
				if(atom.prog){
					atom.prog(atom, ctx);
				}else{
					fillCircle(
						atom.screenX,
						atom.screenY,
						atom.screenSize,
						makeColorStr(atom.color)
					);
				}
				
			}
			
			
		}/*while*/
		
	};
	
	function fillCircle(x,y,r,color){
			ctx.beginPath();
			ctx.arc(x, y, r, 0, Math.PI * 2, false);
			ctx.fillStyle = color || 'rgba(128,128,128,1.0)';
			ctx.fill();
			ctx.closePath();
		};
	// functions
	function drawLine(x1,y1,x2,y2,color){
			ctx.beginPath();
			ctx.moveTo(x1,y1);
			ctx.lineTo(x2,y2);
			ctx.closePath();
			ctx.strokeStyle = color || 'rgba(255,255,0,1.0)';
			ctx.stroke();
		};
	
	function makeColorStr(arr){
		return 'rgba('+arr[0]+','+arr[1]+','+arr[2]+','+arr[3]+')';
	}
	
	function updateColor(normal, lights, color){
			
		var r = color[0] / 255;
		var g = color[1] / 255;
		var b = color[2] / 255;
		
		for(var i=0; i < lights.length; i++){
			
			var light = lights[i];
			light.position.normalize();
			
			var amount = normal.dot(light.position);
							
			if(amount <= 0) continue;
			
			r += (light.r / 255) * amount;
			g += (light.g / 255) * amount;
			b += (light.b / 255) * amount;
			
		}
		color[0] = parseInt(((r>1)?1:r) * 255);
		color[1] = parseInt(((g>1)?1:g) * 255);
		color[2] = parseInt(((b>1)?1:b) * 255);
		
	}	
	
	// 화면 좌표에서 오브젝트를 역으로 구해낸다.
	this.picking = function(x, y){
		
		
		projector.initPrevIter();
		
		projector.modelviewTransform(prevScene, prevCamera);
		
		while(projector.hasPrevAtom()){
			
			var atom = projector.prevClipAtom();
			
			if(!atom || !atom.visible) continue;
			
			
			if( atom instanceof ASSA3d.Particle) {
				var lx = atom.screenX - x;
				var ly = atom.screenY - y;
				var lenSq = lx * lx + ly * ly;
				var len = Math.sqrt(lenSq);

				if(atom.screenSize >= len) {
					projector.initIter();
					return atom;
				}
			}else
			if(atom instanceof ASSA3d.Face3 ||
				atom instanceof ASSA3d.Face4){
				
				
				if(atom.cnt > 2) {

					// 교차개수
					var count = 0;

					for(var i = 0; i < atom.cnt; i++) {
						var a = atom._v[i % atom.cnt];
						var b = atom._v[(i + 1) % atom.cnt];

						if(chkIntersection(	x, y, width + 1, y, // (-1, y) 에서 (x, y) 잇는 수평선
											a.x, a.y, b.x, b.y  // Face4 외곽선중 직선 하나
						)
						){
							count++;
						}

					}/*for*/

					if(count % 2) {// 홀수일경우
						projector.initIter();
						return atom;
					}

				}

					
			}
			
		}/*while*/
		
		return null;
	};
	
	function chkIntersection(	x1,y1, x2,y2, x3,y3, x4,y4){
		
		var n = (y4-y3)*(x2-x1)-(x4-x3)*(y2-y1);
		var t = (x4-x3)*(y1-y3)-(y4-y3)*(x1-x3);
		var s = (x2-x1)*(y1-y3)-(y2-y1)*(x1-x3);
		
		t /= n;
		s /= n;
		
		if(t < 0 || t > 1) return false;
		if(s < 0 || s > 1) return false;
		
		return true;
	};
};



