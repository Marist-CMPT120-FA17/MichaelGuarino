var score = 5;
var pos = 4;
var north = 0;
var south = 1;
var east = 2;
var west = 3;
var inv = [];

	function Location(id, name, description, item, visited) {
		this.id = id;
		this.name = name;
		this.desc = description;
		this.item = item;
		this.visited = visited;
		this.toString = function() {
			(this.id + ", " + this.name + ", " + this.desc);
		}	
	}

var DownstairsBathroom = new Location(0, "DownstairsBathroom", "You're in the downstairs bathroom. The mirror is completely blacked out with what looks like spraypaint. You suddenly feel very self-conscious about your looks.", keyOne, false);
var DiningRoom = new Location(1, "DiningRoom", "You're in the dining room. The table is set with food and everything, but no one is here to eat. What a waste.", null, false);
var Closet = new Location(2, "Closet", "You're in the hallway closet. Nothing much in here, just a bunch of skeletons. Sigh...", null, false);
var Kitchen = new Location(3, "Kitchen", "You're in the kitchen. There's a particularly delicious looking piece of cake on the table. It looks too good to be true.", null, false);
var Foyer = new Location(4, "Foyer", "You're back in the foyer. The front door is still locked.", null, true);
var LivingRoom = new Location(5, "LivingRoom", "You're in the living room. There's a fire going in the fireplace, but no firewood. You're sure this must break some kind of fire code.", keyThree, false);
var UpstairsBathroom = new Location(6, "UpstairsBathroom", "You're in the upstairs bathroom. The toilet is shaking violently and making a lot of weird noises. You make a note to call the plumber once you escape.", null, false);
var SecondFloor = new Location(7, "SecondFloor", "You're on the second floor. There's a large painting of a man hanging on the wall and his eyes follow you whenever you move. Spooky.", keyFour, false);
var MasterBedroom = new Location(8, "MasterBedroom", "You're in the master bedroom. You want to take a nap, but the bed appears to be floating. You decide against it.", null, false);
var Cellar = new Location(9, "Cellar", "You're in the cellar. The air is thick and unpleasant. You put Febreeze on your shopping list.", null, false);
var Roof = new Location(10, "Roof", "You're on the roof. You notice you could probably jump to safety and run away, but that wouldn't make this game fun, now would it?", null, false);
var Attic = new Location(11, "Attic", "You're in the attic. There's a group of ghosts playing cards in the corner. They look at you but you pretend you can't see them.", keyTwo, false);
var locations = [DownstairsBathroom,DiningRoom,Closet,Kitchen,Foyer,LivingRoom,UpstairsBathroom,SecondFloor,MasterBedroom,Cellar,Roof,Attic];
	
	function Item(id, name, description) {
		this.id = id;
		this.name = name;
		this.desc = description;
		this.toString = function() {
			(this.id + ", " + this.name + ", " + this.desc);
		}
	}

var keyOne = new Item(1, "Key One", "You see something shiny in the toilet. You reach in and pull out a key. Gross.");
var keyTwo = new Item(2, "Key Two", "You decide to challenge one of the ghosts to cards. You win, but he already gambled all his money away. Instead he gives you a key.");
var keyThree = new Item(3, "Key Three", "You get bored so you decide to search the couch cushions for loose change. Instead you find a key.");
var keyFour = new Item(4, "Key Four", "The painting creeps you out so you take it down. You notice a small door hiding behind the painting. You open it and find a key.");
var items = new Array();
items[0] = keyOne;
items[11] = keyTwo;
items[5] = keyThree;
items[7] = keyFour;

	function playerInput() {
		var input = document.getElementById("inputBox").value;
		//console.log(input);
		input = input.toUpperCase();
		if (input == "N") {
			goNorth();
		} else if (input == "S") {
			goSouth();
		} else if (input == "E") {
			goEast();
		} else if (input == "W") {
			goWest();
		} else if (input == "HELP") {
			var visited = score/5;
			var message = "Use 'N', 'S', 'E', 'W', 'n', 's', 'e', 'w' for text commands. Use 'take' in an area to see if there is an item. Use 'unlock' in the Foyer when you've collected all the keys and visited every area. You have visited " + visited + " area(s) so far.";
			updateDisplay(message);
		} else if (input == "TAKE") {
			take();
		} else if (input == "UNLOCK") {
			winCheck();
		} else if (input == "INV") {
			invCheck();
		} else {
			var message = "Invalid Input";
			updateDisplay(message);
		}
	}

	function init() {
		var message = "You find yourself trapped inside a haunted house. You're in the foyer and the front door is locked. You need 4 keys to unlock the door. Perhaps you can find them around the house...";
		updateDisplay(message);
	}

var locationMatrix = [ //N S E W
				/*0*/	[3,-1,1,-1],
				/*1*/	[4,-1,2,0],
				/*2*/	[5,-1,-1,1],
				/*3*/	[6,0,4,-1],
				/*4*/	[7,1,5,3],
				/*5*/	[8,2,-1,4],
				/*6*/	[9,3,7,-1],
				/*7*/	[10,4,8,6],
				/*8*/	[11,5,-1,7],
				/*9*/	[-1,6,10,-1],
				/*10*/	[-1,7,11,9],
				/*11*/	[-1,8,-1,10]
	]

	function goNorth() {
		move(north);
	}

	function goSouth() {
		move(south);
	}

	function goEast() {
		move(east);
	}

	function goWest() {
		move(west);
	}

	function move(dir) {
		var newLoc = locationMatrix[pos][dir];
		if (newLoc == -1) {
			var message = "You can't go that way!";
			updateDisplay(message);
		} else {	
			pos = newLoc;
			var visitCheck = locations[pos];
			if (visitCheck.visited === false) {
				locations[pos].visited = true;
				score += 5;
				console.log(pos);
				var message = locations[pos].desc;
				updateDisplay(message);
				scoreKeeper();
				buttonDisable();
			} else {
				console.log(pos);
				var message = locations[pos].desc;
				updateDisplay(message);
				buttonDisable();
			}
		}
	}

	function take() {
		var itemCheck = locations[pos];
			if (itemCheck.item === null) {
				var message = "You can't do that here.";
				updateDisplay(message);
			} else {
				inv.push(items[pos].name);
				var message = items[pos].desc;
				updateDisplay(message);
				locations[pos].item = null;
				console.log(inv);
			}
	}

	function updateDisplay(message) {
		var textArea = document.getElementById("textBox");
		textArea.value = message;
	}

	function invCheck() {
		if (inv.length == 0) {
			var message = "You have nothing.";
			updateDisplay(message);
		} else {
			var message = "Inventory: " + inv.toString();
			updateDisplay(message);
		}
	}

	function buttonDisable() {
		document.getElementById('north').disabled = false;
		document.getElementById('south').disabled = false;
		document.getElementById('east').disabled = false;
		document.getElementById('west').disabled = false;

		if (pos == 3 || pos == 6) {
			document.getElementById('west').disabled = true;
		} else if (pos == 8 || pos == 5) {
			document.getElementById('east').disabled = true;
		} else if (pos == 10) {
			document.getElementById('north').disabled = true;
		} else if (pos == 1) {
			document.getElementById('south').disabled = true;	
		} else if (pos == 9) {
			document.getElementById('west').disabled = true;
			document.getElementById('north').disabled = true;
		} else if (pos == 11) {
			document.getElementById('north').disabled = true;
			document.getElementById('east').disabled = true;
		} else if (pos == 2) {
			document.getElementById('east').disabled = true;
			document.getElementById('south').disabled = true;
		} else if (pos == 0) {
			document.getElementById('west').disabled = true;
			document.getElementById('south').disabled = true;
		} else {

		}
	}

	function winCheck() {
		if (pos == 4) {
			if (inv.length == 4 && score == 60) {
				var message = "Congratulations, you won!! Thanks for playing!";
				updateDisplay(message);
			} else if (inv.length != 4 && score == 60) {
				var message = "Looks like you still need to find more keys...";
				updateDisplay(message);
			} else if (inv.length == 4 && score != 60) {
				var message = "You haven't looked around the entire house yet. Maybe you should...";
				updateDisplay(message);
			} else {
				var message = "Come on, man. You just got here...";
				updateDisplay(message);
			}
		} else {
			var message = "There's nothing to unlock.";
			updateDisplay(message);
		}
	}
	
	function scoreKeeper() {
		document.getElementById("score").innerHTML = "Score: " + score;
	}