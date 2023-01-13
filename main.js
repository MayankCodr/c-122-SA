
var screen_width = 0;
var screen_height = 0;
var to_number;
var speak_data = "";
var guava;
x = 0;
y = 0;

var draw_guava = "";


var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
to_number = Number(content);
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    if (Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML = "Started drawing guava ";
    draw_guava = "set"; 
        
    }
    else{
    document.getElementById("status").innerHTML = " The speech has not been recognized as a number.";

    }

}
function preload(){
    guava =   loadImage("guava.png")
  }

function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas = createCanvas(screen_width, screen_height-150);
    canvas.position(0,150)
    
    background("pink");
}

function draw() {
  if(draw_guava == "set")
  {
    for ( i = 1; i <= to_number; i++) {
        x = Math.floor(Math.random()*1000);
        y = Math.floor(Math.random()*400);
        image(guava, x, y, 100, 100);
    
        
    }
    document.getElementById("status").innerHTML = to_number + " Guavas drawn";
    draw_guava = "";
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = to_number +  "Guavas drawn";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

}
