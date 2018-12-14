var world;

var tombstone;
var lula;
var flower;

var favela1;
var favela2;
var favela3;

function setup()
{
	noCanvas();

	world = new World("VRScene");

	var level2 = new Box
	({
		x: 0,
		y: 0,
		z: -16,
		width: 100,
		height: 0.1,
		depth:100,
		asset: "dirtfloor"
	})

	world.add(level2);

	tombstone = new OBJ({
		asset: 'grave_obj',
		mtl: 'grave_mtl',
		x: 0,
		y: 1.5,
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
		y: 0,
		z: -9.2,
		rotationX:0,
		rotationY:0,
		scaleX:0.003,
		scaleY:0.003,
		scaleZ:0.003
	});
	world.add(flower);

	lula = new Plane({
		x:0, 
		y:1.5, 
		z:-9.5,
		width: 0.6,
		height: 0.6,
		asset: "name"
	});
	world.add(lula);

	favela1 = new Box({
			x: 5,
			y: 2,
			z: -10,
			asset: "house1"
		})

	world.add(favela1);

	favela2 = new Box({
			x: -5,
			y: 3,
			z: -10,
			asset: "house2"
		})
	
	world.add(favela2);

	favela3 = new Box({
		x: -2.5,
		y: 4,
		z: -10,
		asset: "house3"
	})

	world.add(favela3);
	
}

function draw()
{

}