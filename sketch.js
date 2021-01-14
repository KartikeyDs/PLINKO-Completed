const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var division1, division2, division3, division4, division5, division6, division7, division8;


var particles = [];
var divisions = [];
var plinkos = [];

var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
 ground1 = new ground(240,790,800,20);

  //Creating Divisions
 for (var k = 0; k <=width; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));

}

 //Creating 1 plinko row
 for (var j=40; j <=width; j = j+50){
  plinkos.push(new plinko(j,75))
  }

  //Craeting 2 plinko row
  for(var j=15; j<=width; j=j+50){
    plinkos.push(new plinko(j,175))
    }
    
  //Creating 3 plinko row
  for(var j=40; j<=width; j=j+50){
    plinkos.push(new plinko(j,275))
    }

    //Creating 4 plinko row
  for(var j=15;j<=width; j=j+50){
    plinkos.push(new plinko(j,375))
    }

  }

function draw() {
  background(0) 
  
  Engine.update(engine);
  
  ground1.display(); 
  
  //Displaying the divisions
  for(var z=0; z<=divisions.length-1; z=z+1)
    {
      divisions[z].display();
    }

    //Displaying 1 plinko row
    for(var a=0; a<=plinkos.length-1; a=a+1)
  {
    plinkos[a].display();
  }

  //Displaying 2 Plinko row
  for(var b=0; b<=plinkos.length-1; b=b+1){
  plinkos[b].display();
  }


  //Displaying 3 plinko row
  for(var c=0; c<=plinkos.length-1; c=c+1){
  plinkos[c].display();
  }

  

  //Displaying 4 plinko row
  for(var d=0; d<=plinkos.length-1;d=d+1){
  plinkos[d].display();
  }

  //Creating particles
 if(frameCount%30===0){
  particles.push(new particle(random(width/2-10,width/2+10),10,10))
}
  
//Displaying particles
for(var j=0;j<particles.length-1;j=j+1){
  particles[j].display();
  }
  
  
  drawSprites();
}