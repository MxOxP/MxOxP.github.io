function clock(){

	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	let man = ctx;
	let now = new Date();

	ctx.save();
	ctx.clearRect(0,0,800,800);

	//Gradiente
	var grd = ctx.createRadialGradient(400, 400, 0, 400, 400, 280); //createRadialGradient(x1, y1, r1, x2, y2, r2)
	grd.addColorStop(0, "rgb(80,80,80)");
	grd.addColorStop(1, "rgb(17,17,17)");

	//Circulo principal
	ctx.beginPath();
	ctx.arc(400, 400, 350, 0, 2 * Math.PI); 
	ctx.stroke();
	ctx.fillStyle = grd;
	ctx.fill();
	ctx.lineWidth = 20;
	ctx.strokeStyle = "rgb(20,80,20)";//"rgb(110,110,110)";
	ctx.stroke();

	//Letra 12
	ctx.font = "120px Comic Sans MS";
	ctx.fillStyle = "rgb(230,230,230)";
	ctx.fillText("12",340,160); //ancho = 1/3 360 para 1 letra,  alto 3/4 120
	//letra 1
	ctx.fillText("1",520,200); //reloj 350 width 62
	//letra 2
	ctx.fillText("2",610,310);
	//Letra 3
	ctx.fillText("3",660,440); 
	//letra 4
	ctx.fillText("4",610,590);
	//letra 5
	ctx.fillText("5",500,690);
	//Letra 6
	ctx.fillText("6",365,730);
	//letra 7
	ctx.fillText("7",230,680);
	//letra 8
	ctx.fillText("8",110,580);
	//Letra 9
	ctx.fillText("9",65,440);
	//letra 10
	ctx.fillText("10",105,310);
	//letra 11
	ctx.fillText("11",205,200);

	//Hora local
	let sec = now.getSeconds();
	let min = now.getMinutes();
	let hr  = now.getHours();

	if(hr >= 12){
		hr = hr-12;
	}

	console.log(hr);
	console.log(min);

	//Horas
	ctx.save();
	ctx.translate(400,400);
	ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec);
	ctx.beginPath();
	ctx.strokeStyle = "rgb(250,170,26)"
	ctx.lineWidth = 20;
	ctx.moveTo(0, -10);
	ctx.lineTo(0, -200);
	ctx.stroke();
	ctx.restore();

	//minutos
	ctx.save();
	ctx.translate(400,400);
	ctx.rotate((min*Math.PI/30)+(sec*Math.PI/(30*60)));
	ctx.beginPath();
	ctx.strokeStyle = "rgb(250,120,20)";
	ctx.lineWidth = 15;
	ctx.moveTo(0, -10);
	ctx.lineTo(0, -300);
	ctx.stroke();
	ctx.restore();

	//segundos
	ctx.save();
	ctx.translate(400,400);
	ctx.rotate(sec * Math.PI/30);
	ctx.beginPath();
	ctx.strokeStyle = "rgb(240,0,0)"
	ctx.lineWidth = 10;
	ctx.moveTo(0, -10);
	ctx.lineTo(0, -300);
	ctx.stroke();
	ctx.restore();

	window.requestAnimationFrame(clock);
	reajuste();

}

function reajuste(){
	let ancho = window.innerWidth;
	let alto = window.innerHeight;
	let nancho;
	let nalto;
	let canvs = document.querySelector('#myCanvas');

	if(ancho >= alto){
		nalto = alto * 0.8;
		nancho = nalto;
		canvs.style.width = `${nancho}px`;
		canvs.style.height = `${nancho}px`;

	}else{
		nancho = ancho * 0.8;
		nalto = nancho;
		canvs.style.height = `${nalto}px`;
		canvs.style.width = `${nalto}px`;
	}
}

reajuste();	

clock();

window.addEventListener('resize',reajuste);
window.requestAnimationFrame(clock);