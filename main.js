img = "";
status1 = "";
function preload(){
img = loadImage('dog_cat.jpg');
}
function setup(){
    canvas = createCanvas(600,450);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
}
function modelLoaded(){
    console.log("model Loaded!");
    status1 = true;
    objectDetector.detect(img,gotResult);
}
function draw(){
    image(img,0,0,600,450);
    fill("#FF0000");
    text("dog",45,75);
    noFill();
    stroke("#FF0000");
    rect(35,50,400,380);

    fill("#FF0000");
    text("cat",300,120);
    noFill();
    stroke("#FF0000");
    rect(250,100,320,340);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
   else
   { console.log(results);}
}