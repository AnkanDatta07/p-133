Status = "";
bottle = "";
object = [];

function preload()
{
    bottle = loadImage("images.jpg");
}

function setup()
{
    canvas = createCanvas(640, 350);
    canvas.position(400, 265);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    Status = true;
    objectDetector.detect(bottle, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
    object = results;
}

function draw()
{
    image(bottle, 0, 0, 640, 350);
   

    if(Status !="")
    {
        
        for(i = 0; i < object.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Starting Detecting Objects";

            fill("#FF0000");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + "" + percent + " %", object[i].x, object[i].y);
            noFill();
            stroke("#FF0000");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }

    

}