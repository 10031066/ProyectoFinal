
function Mapa (ctx,size) {
	this.ctx="";
	this.size="50";
	
	this.DibujaCuadriculado = function(){// aqui se dibujara el mapa y el mar
		ctx.fillStyle = "black";
		for(i=0;i<10;i++){
			for(j=0;j<10;j++){
				ctx.strokeRect(i*size, j*size, size, size);
			}	
		}
		ctx.fill();
	}

	this.DibujaBarcos = function(){
	

	}

	this.DibujaExplosion= function(){

	}
	
	this.Redibuja= function(){
		this.DibujaCuadriculado();
		this.DibujaBarcos();
		this.DibujaExplosion();
		
	}
}