const audioCtx = new AudioContext();
const oscillator = audioCtx.createOscillator();
const lfo = audioCtx.createOscillator();
const gain = audioCtx.createGain();
const amp = audioCtx.createGain();
let freq = 250;
let playing = false; 

function setup() {
createCanvas(200,200);
background(0);

oscillator.type = "square";
oscillator.frequency.setValueAtTime(250, audioCtx.currentTime);
oscillator.connect(gain).connect(audioCtx.destination);

gain.gain.value = 0.3;
amp.gain.value = 0.3;

lfo.type = "sine";
lfo.start();
lfo.frequency.setValueAtTime(3,audioCtx.currentTime);
lfo.connect(amp);
amp.connect(gain.gain);

}


function draw() {
background(0);
if(playing) {
  freq *= 1.008;
}

fill(250);
text(freq, 10, 10);
text(playing, 10, 50);
oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
}

function mousePressed() {
  freq=250;
  playing = true; 
  oscillator.start(); 
}
