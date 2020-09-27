//let btn = document.getElementById("tiro");
let btn;
let random = false;
let randomnum = 0;
let toca = 0;
let victoria = false;
let playe = new Object();
playe.l=0;
playe.u="player";
playe.j = 1;

let playe2 = new Object();
playe2.l = 0;
playe2.u = "player2";
playe2.j = 2;

let preguntas = [
	["¿En que año estamos?","2020"], //1
	["¿De que color es la naranja?","naranja"],
	["¿Que viene primero el huevo o la gallina?","gallina"],
	["¿Los chinos dominaran el mundo?","si"],
	["¿Como se llama lo que hace verde a una planta?","clorofila"], //5 
	["¿Quien tenia razon el cap o ironman?","ironman"],
	["Tercer color de la bandera de mexico","rojo"],
	["¿Que persona utiliza el kamehameha?","goku"],
	["Donde se siembras las cosas","tierra"],
	["Astro celeste que acompaña a la tierra","luna"], //10
	["Sirve para ver tu reflejo","espejo"],
	["Cuantos dedos tiene una persona","20"],
	["Elemento quimico mas utilizado para la fabricacion de baterias en dispositivos mobiles","litio"],
	["Libro mas vendido en la historia","biblia"],
	["Primer celular inteligente con pantalla touch","iphone"], //15
	["Vaquero muy conocido de peliculas de pixar","woody"],
	["Que color es el cielo","azul"],
	["La madera es flamable si o no","si"],
	["En ingles como se le dice a un ovni","ufo"],
	["Pelicula de dramworks que lleva el nombre de una isla donde aparece un leon,zebra,jirafa,hipopotamo","madagascar"], //20
	["Pajaro extinto de las islas mauricio que no podia volar","dodo"],
	["Se dice que los gases que no pueden combinarse con mas elementos son: ","nobles"],
	["Animal marino que puede vivir infinitivamente","medusa"],
	["Cual es la semilla mas grande del mundo","coco"],
	["Liquido obtenido de las vacas","leche"] //25
];

let lugar = [
	[35,35],
	[35,110],
	[35,185],
	[35,250],
	[35,320],
	[35,390],
	[35,460],
	[110,465],
	[180,465],
	[250,465],
	[320,465],
	[390,465],
	[465,465],
	[465,395],
	[465,325],
	[465,255],
	[465,180],
	[465,110],
	[465,40],
	[395,40],
	[325,40],
	[255,40],
	[185,40],
	[120,40],
	[120,110],
	[120,180],
	[120,245],
	[120,315],
	[120,385],
	[185,385],
	[250,385],
	[320,385],
	[385,385],
	[385,320],
	[385,250],
	[385,185],
	[385,120],
	[320,120],
	[260,120],
	[195,120],
	[195,180],
	[195,245],
	[195,310],
	[260,310]
];

//console.log(lugar.length);
//let btn;
window.onload = function(){
	btn = document.getElementById("tiro");
	let preg1 = 0;
	let ficha = document.getElementById("player");

	console.log(preg1);

		let p1 = document.getElementById("player");
		p1.style.visibility = "visible";
		let p2 = document.getElementById("player2");
		p2.style.visibility = "visible";
		bootbox.alert("Turno del jugador numero 1!");
		btn.onclick = function(){
			if(victoria == false){
				switch(toca){
				case 0:
					preg(playe);
					toca = 1;
					console.log("toca: " + toca);
					//bootbox.alert("Turno del jugador numero 2!");
				break;
				case 1:
					//botonazo(playe2);
					preg(playe2);
					toca = 0;
					console.log("toca: " + toca);
					//bootbox.alert("Turno del jugador numero 1!");
				break;
				default:
				break;
				}

			}else{
				bootbox.alert("Este juego ha terminado");
			}

		};
	//}
};


function detener(){
	dado.style.animationPlayState = "paused";
	//console.log("ya te detuve");
}

function preg(player){
	//console.log(preguntas.length);
	//Busqueda de un numero aun mas random
	let genpreg = 0;
	while (random != true){
		genpreg = 0 + Math.floor((25 - 0) * Math.random());
		let upper;
		if(genpreg >=13){
			upper = 1;
		}else{
			upper = 0;
		}
		if(randomnum != upper){
			random = true;
			randomnum = upper;
		}
	}
	random = false;
	//let genpreg = 0 + Math.floor((25 - 0) * Math.random());

	bootbox.prompt(preguntas[genpreg][0], function(result){ 
		result = result.toLowerCase();
		if(result == preguntas[genpreg][1]){
			botonazo(player);
		}else{
			if(player.j == 1){
				bootbox.alert(`¡Incorrecto! la respuesta era: ${preguntas[genpreg][1]}, ahora es turno del jugador numero 2`);
			}else{
				bootbox.alert(`¡Incorrecto! la respuesta era: ${preguntas[genpreg][1]}, ahora es turno del jugador numero 1`);
			}
		}
	    //console.log(result); 
	});
	//--------------------------------------------------------------
}

function botonazo(player){
	giros(player)
		.then(() => {
			let ficha = document.getElementById(`${player.u}`);
			if(player.l > 43){
				player.l = 43;

				ficha.style.bottom = `${lugar[player.l][0]}px`;
				ficha.style.right = `${lugar[player.l][1]}px`;
			}else{
				ficha.style.bottom = `${lugar[player.l][0]}px`;
				ficha.style.right = `${lugar[player.l][1]}px`;

			}
			if(player.l == 43){
				bootbox.alert(`¡Felicidades jugador #${player.j} has ganado!`);
				victoria = true;
			}
			if(player.j == 1){
				bootbox.alert(`Turno del jugador numero 2`);
			}else{
				bootbox.alert(`Turno del jugador numero 1`);
			}

			//done(null);

	})
	.catch(err => {
		console.log(err);
	});
}

function giros(player){
	let posisoniao;
	return new Promise((resolve,reject) => {
		function stopped(value){
			setTimeout(() => {dado.style.animation = "none"},2050);
			//let player = document.getElementById("player");
			console.log(player);
			console.log("Estoy en la casilla: " + 	value);
			console.log(lugar[0][0]);
			//setTimeout(() => {player.style.bottom = lugar[value][0]
			//	player.style.right = lugar[value][1]},2050);
			setTimeout(() => {resolve();},2100);

		}
		console.log("tiro");
		let dado = document.getElementById("dado");
		dado.style.animation = "sprite .6s steps(6) infinite";
		dado.style.animationPlayState = "running";
		let valor = 1 + Math.floor((7 - 1) * Math.random());
		setTimeout(() => {detener();},2000);
		//dado.style.animationPlayState = "paused";
		//console.log("delay");
		switch(valor){
			case 1:
				//dado.style.background.position = "-0px -115px !important"
				setTimeout(() => {dado.style.animation = "none"},2050);
				player.l = player.l + valor;
				stopped(player.l);
			break;
			case 2:
				setTimeout(() => {dado.style.backgroundPosition = "-114px -115px"},2100);
				player.l = player.l + valor;
				stopped(player.l);

				console.log("soy 2");
			break;
			case 3:
				setTimeout(() => {dado.style.backgroundPosition = "-228px -115px"},2100);
				player.l = player.l + valor;
				stopped(player.l);
				console.log("soy 3");
			break;
			case 4:
				setTimeout(() => {dado.style.backgroundPosition = "-342px -115px"},2100);
				player.l = player.l + valor;
				stopped(player.l);
				console.log("soy 4");
			break;
			case 5:
				setTimeout(() => {dado.style.backgroundPosition = "-456px -115px"},2100);
				player.l = player.l + valor;
				stopped(player.l);
				console.log("soy 5");
			break;
			case 6:
				setTimeout(() => {dado.style.backgroundPosition = "-566px -115px"},2100);
				player.l = player.l + valor;
				stopped(player.l);
				console.log("soy 6");
			break;
			default:
				return reject("Ups!, algo salio mal");
			break;
		}
	});
};