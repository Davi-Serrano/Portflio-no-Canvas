		//Função que desenha o objeto na tela de acordo com os parâmetros de posicionamento do objeto
		function render(){
			
			
			ctx.save();
			ctx.translate(-cam.x, -cam.y);
			for (var i in sprites){
				var spr = sprites[i];
				//Desenha o fundo
				ctx.drawImage(spr.img, 0, 0, spr.width, spr.height, spr.x, spr.y, spr.width, spr.height);
				//Desenha a nave
				ctx.drawImage(nave, p1.x, p1.y);
				//Desenha o meteoro					
				ctx.drawImage(mtoro, meteoro.x, meteoro.y)
				
				
				ctx.lineWidth = 1;  
				ctx.translate(2100,200);
				ctx.rotate(convertToRadians(angle));
				
				
				ctx.drawImage(BuracoNegro, -140, -140,);
				
				menos();
				
				incrementAngle();
				
			}
			ctx.restore();
		}
		
		//função que add movimento ao meteoro
		function menos(){
			meteoro.x -=1
			if(meteoro.x < 0){
				meteoro.x = 3900
			}
		}