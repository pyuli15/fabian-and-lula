var world;
var sky;
var flower;
var raindrops = [];
var colors = ["blueh","orange","greenh","purple","yellow"];
var music;
var click;
var page;
var walk;

var worldX = 20;
var worldZ = 30;
var worldWidth = 100;
var worldHeight = 100;

var elevator;

var gravSensor;

var textHolder;

var first;
var first1;
var firstNote;
var collectSound;
var onNote;

var second;
var second2;
var secondNote;

var third;
var third3;
var thirdNote;

var fourth;
var fourth4;
var fourthNote;

var fifth;
var fifth5;
var fifthNote;

var tombstone;
var lula;
var flower;

var favela1;
var favela2;
var favela3;
var favela4;
var favela5;
var favela6;
var favela7;
var favela8;
var favela9;
var favela10;
var favela11;
var favela12;
var favela13;
var favela14;



var drum1;

var wall1;
var wall2;
var wall3;

var secondFloor;
var secondFloor2;
var secondFloor3;

var sign;




//creating my notes counter
var notesCounter = 0;


function preload()
{
	music = loadSound("sounds/cozy_digs.mp3");
	click = loadSound("sounds/conga.mp3");
	collectSound = loadSound("sounds/collect.mp3");
	onNote = loadSound("sounds/current.mp3");
	page = loadSound("sounds/pickUp.mp3");
	walk = loadSound("sounds/walk.mp3");

}

function setup()
{
	noCanvas();
	console.log("before creating the world");

	world = new World("VRScene");

	console.log("after the world");
	music.loop();

	document.getElementById("titlescreen").style.display = "block";	// to show the div

	// sky = new Sky({material:{asset:"sky"}});
	// world.add(sky);

	var floor = new Plane({
		rotationX:-90,
		width: worldWidth,
		height: worldHeight,
		asset:"dirtfloor",
		side: "double",
		repeatX:100,
		repeatY:100

	});

	//creating the second level
	var secondFloor = new Box
	({
		x: 0,
		y: 20,
		z: -16,
		width: worldWidth,
		height: 0.1,
		depth:100,
		asset: "dirtfloor",
		
	})

	var secondFloor2 = new Box
	({
		x: 0,
		y: 19.9,
		z: -16,
		width: worldWidth,
		height: 0.1,
		depth:100,
		asset: "move",
		
	})

	var secondFloor3 = new Box
	({
		x: 0,
		y: 20.1,
		z: -16,
		width: worldWidth,
		height: 0.1,
		depth:100,
		asset: "grass",
		
	})

	world.add(secondFloor);
	world.add(secondFloor2);
	world.add(secondFloor3);

	var elevatorMark = new Plane({
		rotationX:-90,
		asset:"move",
		side: "double",
		x:0,
		y:0.05,
		z: 25

	});

	var wall1 = new Plane({
		rotationX:0,
		asset:"black",
		side: "double",
		x:0,
		y:0.5,
		z: 25.5

	});

	var wall2 = new Plane({
		rotationY:90,
		asset:"black",
		side: "double",
		x:-0.5,
		y:0.5,
		z: 25

	});

	var wall3 = new Plane({
		rotationY:90,
		asset:"black",
		side: "double",
		x:0.5,
		y:0.5,
		z: 25

	});

	var sign = new Box({
		
		asset:"sign",
		x:0,
		y:1.5,
		z: 21,
		width: 0.05,
		side:("double"),
		rotationY: 90
		

	});

	world.add(sign);

	

	wall1.tag.object3D.userData.solid = true;
	wall2.tag.object3D.userData.solid = true;
	wall3.tag.object3D.userData.solid = true;

	world.add(elevatorMark);
	world.add(wall1);
	world.add(wall2);
	world.add(wall3);


	tombstone = new OBJ({
		asset: 'grave_obj',
		mtl: 'grave_mtl',
		x: 0,
		y: 21.5,
		z: -10,
		rotationX:0,
		rotationY:0,
		scaleX:0.8,
		scaleY:0.8,
		scaleZ:0.8,
	});
	world.add(tombstone);

	flower = new OBJ({
		asset: 'flower_obj',
		mtl: 'flower_mtl',
		x: 0,
		y: 20,
		z: -9.2,
		rotationX:0,
		rotationY:0,
		scaleX:0.003,
		scaleY:0.003,
		scaleZ:0.003,

			
	});
	world.add(flower);

	lula = new Plane({
		x:0, 
		y:21.5, 
		z:-9.5,
		width: 0.6,
		height: 0.6,
		asset: "name",

		clickFunction: function(e) 
		{
			document.getElementById("titlescreen").style.display = "block";	// to show the div
		}
	});
	world.add(lula);

	favela1 = new Box({
			x: 5,
			y: 22,
			z: -10,
			asset: "house1",
			spinY: 90
		})

	world.add(favela1);

	favela2 = new Box({
			x: -5,
			y: 23,
			z: -10,
			asset: "house2",
			spinY: 90
		})
	
	world.add(favela2);

	favela3 = new Box({
		x: -2.5,
		y: 24,
		z: -10,
		asset: "house3",
		spinY: 90
	})

	world.add(favela3);

	favela4 = new Box({
			x: 8,
			y: 22,
			z: -10,
			asset: "house1",
			spinY: 90
		})

	world.add(favela4);

	favela5 = new Box({
			x: -8,
			y: 22,
			z: -10,
			asset: "house2",
			spinY: 90
		})

	world.add(favela5);

	favela6 = new Box({
			x: 1.5,
			y: 25,
			z: -10,
			asset: "house3",
			spinY: 90
		})

	world.add(favela6);

	favela7 = new Box({
			x: 1.5,
			y: 30,
			z: -10,
			asset: "house1",
			spinY: 90
		})

	world.add(favela7);

	favela8 = new Box({
			x: 2.5,
			y: 40,
			z: -10,
			asset: "house2",
			spinY: 90
		})

	world.add(favela8);

	favela9 = new Box({
			x: 12,
			y: 28,
			z: -10,
			asset: "house3",
			spinY: 90
		})

	world.add(favela9);

	favela10 = new Box({
			x: 15,
			y: 24,
			z: -10,
			asset: "house1",
			spinY: 90
		})

	world.add(favela10);

	favela11 = new Box({
			x: 0.5,
			y: 29,
			z: -10,
			asset: "house2",
			spinY: 90
		})

	world.add(favela11);

	favela12 = new Box({
			x: 12.5,
			y: 23,
			z: -10,
			asset: "house3",
			spinY: 90
		})

	world.add(favela12);

	favela13 = new Box({
			x: -1.5,
			y: 30,
			z: -10,
			asset: "house1",
			spinY: 90
		})

	world.add(favela13);

	favela14 = new Box({
			x: -12,
			y: 33,
			z: -10,
			asset: "house2",
			spinY: 90
		})

	world.add(favela14);

	//creating my note holders

	var first = new Box({
		x: 10,
		y: 1,
		z: 0,
		asset: "house1"
	})

	var first1 = new Box({
		x: 10,
		y: 0,
		z: 0,
		asset: "rust"
	})

	first.tag.object3D.userData.solid = true;
	first1.tag.object3D.userData.solid = true;


	var firstNote = new Plane({
		x: 9.3,
		y: 1,
		z: 0,
		rotationY: -90,
		width: 0.6,
		height: 0.6,
		asset: "note1",
		side: "double",

		clickFunction: function(e) 
		{
			document.getElementById("window1").style.display = "block";	// to show the div
			page.play();
			if (notesCounter == 0)
			{	
				notesCounter += 1;
				click.play();
				page.play();

			}
		
		}


	})

	
	var second = new Box({
		x: -10,
		y: 1,
		z: 0,
		asset: "house2"
	})

	var second2 = new Box({
		x: -10,
		y: 0,
		z: 0,
		asset: "rust"
	})

	second.tag.object3D.userData.solid = true;
	second2.tag.object3D.userData.solid = true;


	var secondNote = new Plane({
		x: -9.3,
		y: 1,
		z: 0,
		rotationY: -270,
		width: 0.6,
		height: 0.6,
		asset: "note2",
		side: "double",

		clickFunction: function(e) 
		{
			document.getElementById("window2").style.display = "block";	// to show the div
			page.play();
			if (notesCounter == 1)
			{	
				notesCounter += 1;
				click.play();
				page.play();

			}
		
		}


	})

	var third = new Box({
		x: -5,
		y: 1,
		z: 16,
		asset: "house3"
	})

	var third3 = new Box({
		x: -5,
		y: 0,
		z: 16,
		asset: "rust"
	})

	third.tag.object3D.userData.solid = true;
	third3.tag.object3D.userData.solid = true;


	var thirdNote = new Plane({
		x: -5,
		y: 1,
		z: 15,
		rotationY: 180,
		width: 0.6,
		height: 0.6,
		asset: "note3",
		side: "double",

		clickFunction: function(e) 
		{
			document.getElementById("window3").style.display = "block";	// to show the div
			page.play();
			if (notesCounter == 2)
			{	
				notesCounter += 1;
				click.play();
				page.play();

			}
		
		}


	})

	var fourth = new Box({
		x:15,
		y:3,
		z:26,
		asset: "house1"
	})

	var fourth4 = new Box({
		x:15,
		y:2,
		z:26,
		asset: "rust"
	})

	fourth.tag.object3D.userData.solid = true;
	fourth4.tag.object3D.userData.solid = true;


	var fourthNote = new Plane({
		x: 15,
		y: 3,
		z: 25,
		rotationY: 180,
		width: 0.6,
		height: 0.6,
		asset: "note4",
		side: "double",

		clickFunction: function(e) 
		{
			document.getElementById("window4").style.display = "block";	// to show the div
			page.play();
			if (notesCounter == 3)
			{	
				notesCounter += 1;
				click.play();
				page.play();

			}
		
		}


	})

	var fifth = new Box({
		x:-15,
		y:1,
		z:26,
		asset: "house2"
	})

	var fifth5 = new Box({
		x:-15,
		y:0,
		z:26,
		asset: "rust"
	})

	fifth.tag.object3D.userData.solid = true;
	fifth5.tag.object3D.userData.solid = true;


	var fifthNote = new Plane({
		x: -15,
		y: 1,
		z: 25,
		rotationY: -180,
		width: 0.6,
		height: 0.6,
		asset: "note5",
		side: "double",

		clickFunction: function(e) 
		{
			document.getElementById("window5").style.display = "block";	// to show the div
			page.play();
			if (notesCounter == 4)
			{	
				notesCounter += 1;
				click.play();
				page.play();

			}
		
		}


	})
	


	world.add(floor);
	world.add(first);
	world.add(first1);
	world.add(firstNote);

	world.add(second);
	world.add(second2);
	world.add(secondNote);

	world.add(third);
	world.add(third3);
	world.add(thirdNote);

	world.add(fourth);
	world.add(fourth4);
	world.add(fourthNote);

	world.add(fifth);
	world.add(fifth5);
	world.add(fifthNote);


	for (var i = 0; i < 100; i++) 
	{
		raindrops.push( new Rain(random(-50,50),random(200,400),random(-50,50)));
	}

	// what textures can we choose from?
	var textures = ['iron', 'gold', 'stone'];



	// create lots of boxes
	for (var i = 0; i < 35; i++) {
		// pick a location
		var x = random(-worldX + 50, worldX -50);
		var z = random(-worldZ + 45, worldZ -45);

		var temp = new Container3D();
		var height = int(random(5,10));
		for(var j = 0; j < height; j++)
		{
			var t = colors[ int(random(colors.length)) ];
			var house = new Box({
				x: 0,
				z: 0,
				y: 0.5 + j,
				asset: t,

				//e is the object
				clickFunction: function(e) {
					e.setAsset(colors[ int(random(colors.length))]);
				}


			});

			house.tag.object3D.userData.solid = true;

			temp.addChild(house);

		}

		world.add(temp);
		temp.setX(x);
		temp.setZ(z);

	}

	// // create some stairs
	var stair1 = new Box({
		width:2,height:0.5,depth:2,
		x:15,
		y:0.5,
		z:20,
		asset: "rust"
		
	});
	stair1.tag.object3D.userData.stairs = true;
	world.add(stair1);

	var stair2 = new Box({
		width:2,height:0.5,depth:2,
		x:15,
		y:1,
		z:22,
		asset: "rust"
		
	});
	stair2.tag.object3D.userData.stairs = true;
	world.add(stair2);

	var stair3 = new Box({
		width:2,height:0.5,depth:2,
		x:15,
		y:1.5,
		z:24,
		asset: "rust"
	});
	stair3.tag.object3D.userData.stairs = true;
	world.add(stair3);

	var stair4 = new Box({
		width:2,height:0.5,depth:2,
		x:15,
		y:2,
		z:26,
		asset: "rust"
		
	});
	stair4.tag.object3D.userData.stairs = true;
	world.add(stair4);

	gravSensor = new GravitySensor();



    elevator = new Elevator(0,2,25);
	elevator.box.tag.object3D.userData.stairs = true;



	//setting up the notes function


	//creating windows with images for the notes. To make the note appear, simply use the display block line
	//if you are trying to make the note disappear, use the display none line
	// document.getElementById("window1").style.display = "block";	// to show the div
	// document.getElementById("window1").style.display = "none";	// to hide the div

	drum1 = new Drum(9.3,0);
}

function draw()
{
	//drum1.updateDistance();
	//drum1.playSound();

	favela1.spinY(0.3);
	favela2.spinY(0.3);
	favela3.spinY(0.3);
	favela4.spinY(0.3);
	favela5.spinY(0.3);
	favela6.spinY(0.3);
	favela7.spinY(0.3);
	favela8.spinY(0.3);
	favela9.spinY(0.3);
	favela10.spinY(0.3);
	favela11.spinY(0.3);
	favela12.spinY(0.3);
	favela13.spinY(0.3);
	favela14.spinY(0.3);
	
	

	// see what's below the user
	var whatsBelow = gravSensor.getEntityBelowUser();

	//console.log(whatsBelow);

	// if what's below us is a set of stairs we should adjust our y value so we are on top of it
	if (whatsBelow) {
		var cp = world.getUserPosition();

		if (whatsBelow.distance > 1) {
			world.setUserPosition( cp.x, cp.y - 0.1, cp.z);
		}
		else if (whatsBelow.object.el.object3D.userData.stairs) {
			world.setUserPosition( cp.x, cp.y + (1-whatsBelow.distance), cp.z);
		}
	}

	// if the mouse is pressed or the W key is pressed
	if (mouseIsPressed || keyIsDown(87)) {
		// assume we can move forward
		var okToMove = true;

		// figure out what's in front of the user
		var objectAhead = world.castRay();

		// if there is an object, it is close and it is solid, prevent motion
		if (objectAhead && objectAhead.distance < 0.25 && objectAhead.object.el.object3D.userData.solid) {
			okToMove = false;
		}

		if (okToMove) {
			world.moveUserForward(0.05);

		}
	}

	for (var i = 0; i < raindrops.length; i++) 
	{
		raindrops[i].move();
	}

	elevator.move();

}

class Drum {
	constructor (x,z)
	{
		var playerPos = world.getUserPosition();
		this.x = playerPos.x;
		this.z = playerPos.z;
		//this.distance = dist(this.x,this.z, x, z);
	}

	updateDistance(x,z)
	{
		this.distance = dist(this.x,this.z,x,z);
	}

	playSound ()
	{
		//console.log("drum play sound");
		if (this.distance < 20 && notesCounter == 0)
		{
			//console.log("playing first drum");
			onNote.play();			
		}

		// else if (this.distance < 15 && notesCounter == 1 && onNote.isPlaying() == false)
		// {
		// 	onNote.play();
		
		// }

		// else if (this.distance < 15 && notesCounter == 2 && onNote.isPlaying() == false)
		// {
		// 	onNote.play();
		// }

		// else if (this.distance < 15 && notesCounter == 3 && onNote.isPlaying() == false)
		// {
		// 	onNote.play();
		// }
		

		// else if (this.distance < 15 && notesCounter == 4 && onNote.isPlaying() == false)
		// {
		// 	onNote.play();
	
		// }

		

		// if (this.distance > 15)
		// {
		// 	onNote.stop();
		// }
	}
}

class Elevator{
	constructor (x,y,z)
	{
		this.speed = 0.04;
		this.box = new Box({
			x: x,
			y: y,
			z: z,
			asset: "move"
		})

		world.add(this.box);
		

	}

	move()
	{
		if (this.box.getY() > 28 || this.box.getY() < -1)
		{
			this.speed *= -1;
		}

		if (notesCounter == 5)
		{
			this.box.nudge(0,this.speed,0);
		}

		
	}
}

class GravitySensor {

	constructor() {
		// raycaster - think of this like a "beam" that will fire out of the
		// bottom of the user's position to figure out what is below their avatar
		this.rayCaster = new THREE.Raycaster();
		this.userPosition = new THREE.Vector3(0,0,0);
		this.downVector = new THREE.Vector3(0,-1,0);
		this.intersects = [];
	}

	getEntityBelowUser() {
		// update the user's current position
		var cp = world.getUserPosition();
		this.userPosition.x = cp.x;
		this.userPosition.y = cp.y;
		this.userPosition.z = cp.z;

		this.rayCaster.set(this.userPosition, this.downVector);
		this.intersects = this.rayCaster.intersectObjects( world.threeSceneReference.children, true );
		if (this.intersects.length > 0) {
			return this.intersects[0];
		}
		return false;
	}
}




class Rain 
{

	constructor(x,y,z) 
	{
		// every particle needs its own asset
		this.raindrop = new Sphere({
			x: x,
			y: y,
			z: z,
			scaleX: 0.3,
			scaleY: 0.3,
			scaleZ: 0.3,
			//height: 0.01,
			red: 0,
			blue: 255,
			green: 0,
					
		});

		this.belowplane = -5;

		world.add(this.raindrop);

		// every box is going to wander around, so it needs a Perlin noise offset
		
	}

	// every box should be able to move
	move() 
	{
		this.raindrop.nudge(0,-1,0);

		if (this.raindrop.getY() <= this.belowplane ) 
		{
			//setting the y value to a certain number
			this.raindrop.setY(random(200,400))
		}
	}
}

