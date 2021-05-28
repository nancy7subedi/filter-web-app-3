noseX=0;
noseY=0;

function preload() {
  clown_nose = loadimage('https://i.postimg.cc/pLHn9cLS/clown-nose.jpg');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoded);
  poseNet.on('pose', gotPoses);
}

function modelLoded () {
  console.log('PoseNet is Initialized');
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
  }
}
function draw() {
  image(video, 0, 0, 300, 300);
  fill(225,0,0);
  stroke(225,0,0);
  ciricle(noseX, noseY, 20);
  image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){    
  save('myFilterImage.png');
}