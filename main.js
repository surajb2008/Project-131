img = "";
status = "";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#ff0000");
    text("Street", 45, 75);
    noFill();
    stroke("ff0000");
    rect(30, 60, 450, 350);
    
    fill("#FF0000");
    text("Streetlight", 320, 120);
    noFill();
    stroke("#29E14E");
    rect(300, 90, 270, 320);
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error)
    }
    console.log(results);
}