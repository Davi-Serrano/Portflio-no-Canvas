//Variáveis
		//Código das setas do teclado
		var UP = 38, DOWN = 40, LEFT = 37, RIGHT = 39;
		//Variáveis de movimentação
		var moveEsquerda = false, moveDireita = false, moveCima = false, moveBaixo = false;
		//Canvas
		var cnv = document.querySelector("canvas");
		//Contexto canvas
		var ctx = cnv.getContext("2d");
		//Nave
		var nave = new Image();
		nave.src = "IMG/Nave.png"
		//Fundo de tela
		var FundoImg = new Image();
		FundoImg.src = "IMG/fundo.jpg"
		//Objetos
		var sprites = [];
		
		var gameWorld = {
			img: FundoImg,
			x:0,
			y:0,
			width: 4000,
			height: 800,

		};
		sprites.push(gameWorld);

		var p1 = {
			img: nave,
			x: 0,
			y: 0,
			width: 320,
			height: 168,

		}
		
		var angle = 0;
        function convertToRadians(degree) {
            return degree*(Math.PI/180);
        }

        function incrementAngle() {
            angle++;
            if(angle > 360) {
                angle = 0;
            }
        }

        var BuracoNegro = new Image();
        BuracoNegro.src = "IMG/buraco negro.png"

		
		//Câmera
		var cam = {
			x:0,
			y:0,
			width: cnv.width,
			height: cnv.height,

			leftEdge: function(){
				return this.x + (this.width * 0.5);
			},
			rightEdge: function(){
				return this.x + (this.width * 0.5);
			},
			topEdge: function(){
				return this.y + (this.height * 0.5);
			},
			bottomEdge: function(){
				return this.y + (this.height * 0.5);
			}
		};

		//Meteoro
		var mtoro = new Image();
		mtoro.src = "IMG/meteoro.png"
		var meteoro = {
			x:3900,
			y:400,

		};
		
		// //Posição inicail Nave
		p1.x = 900
		p1.y = 200

	