img = "";
status = "";

function setup()
{
canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocssd', modelLoaded)
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
}