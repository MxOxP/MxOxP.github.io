let h1 = document.getElementById('reloj');
let sec = 0;
let min = 0;
let hrs = 0;
let t;

function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}
function add() {
    tick();
    h1.textContent = (hrs > 9 ? hrs : "0" + hrs) 
        	 + ":" + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

function reset() {
    h1.textContent = "00:00:00";
    sec = 0; min = 0; hrs = 0;
}

timer();