				function areaTen() {
					if (visit10 == 0) {
						visit10 = 1;
						var message = "You're in the downstairs bathroom. The mirror is completely blacked out with what looks like spraypaint. You suddenly feel very self-conscious about your looks.";
						updateDisplay(message);
						scoreKeeper();
					} else {
						var message = "You're in the downstairs bathroom. The mirror is completely blacked out with what looks like spraypaint. You suddenly feel very self-conscious about your looks.";
						updateDisplay(message);
					}
					document.getElementById("north").disabled = false;
					document.getElementById("south").disabled = true;
					document.getElementById("east").disabled = false;
					document.getElementById("west").disabled = true;
				}
				function areaEleven() {
					if (visit11 == 0) {
						visit11 = 1;
						var message = "You're in the dining room. The table is set with food and everything, but no one is here to eat. What a waste.";
						updateDisplay(message);
						scoreKeeper();
					} else {
						var message = "You're in the dining room. The table is set with food and everything, but no one is here to eat. What a waste.";
						updateDisplay(message);
					}
					document.getElementById("north").disabled = false;
					document.getElementById("south").disabled = true;
					document.getElementById("east").disabled = false;
					document.getElementById("west").disabled = false;
				}
				function areaTwelve() {
					if (visit12 == 0) {
						visit12 = 1;
						var message = "You're in the hallway closet. Nothing much in here, just a bunch of skeletons. Sigh...";
						updateDisplay(message);
						scoreKeeper();
					} else {
						var message = "You're in the hallway closet. Nothing much in here, just a bunch of skeletons. Sigh...";
						updateDisplay(message);
					}
					document.getElementById("north").disabled = false;
					document.getElementById("south").disabled = true;
					document.getElementById("east").disabled = true;
					document.getElementById("west").disabled = false;
				}
				function areaTwenty() {
					if (visit20 == 0) {
						visit20 = 1;
						var message = "You're in the kitchen. There's a particularly delicious looking piece of cake on the table. It looks too good to be true.";
						updateDisplay(message);	
						scoreKeeper();					
					} else {
						var message = "You're in the kitchen. There's a particularly delicious looking piece of cake on the table. It looks too good to be true.";
						updateDisplay(message);
					}
					document.getElementById("north").disabled = false;
					document.getElementById("south").disabled = false;
					document.getElementById("east").disabled = false;
					document.getElementById("west").disabled = true;
				}
				function areaTwentyOne() {
					if (visit21 == 0) {
						visit21 = 1;
						var message = "You're back in the foyer. The front door is still locked.";
						updateDisplay(message);	
						scoreKeeper();				
					} else {
						var message = "You're back in the foyer. The front door is still locked.";
						updateDisplay(message);
					}		
					document.getElementById("north").disabled = false;
					document.getElementById("south").disabled = false;
					document.getElementById("east").disabled = false;
					document.getElementById("west").disabled = false;			
				}
				function areaTwentyTwo() {
					if (visit22 == 0) {
						visit22 = 1;
						var message = "You're in the living room. There's a fire going in the fireplace, but no firewood. You're sure this must break some kind of fire code.";
						updateDisplay(message);		
						scoreKeeper();			
					} else {
						var message = "You're in the living room. There's a fire going in the fireplace, but no firewood. You're sure this must break some kind of fire code.";
						updateDisplay(message);
					}
					document.getElementById("north").disabled = false;
					document.getElementById("south").disabled = false;
					document.getElementById("east").disabled = true;
					document.getElementById("west").disabled = false;
				}
				function areaThirty() {
					if (visit30 == 0) {
						visit30 = 1;
						var message = "You're in the upstairs bathroom. The toilet is shaking violently and making a lot of weird noises. You make a note to call the plumber once you escape.";
						updateDisplay(message);
						scoreKeeper();
					} else {
						var message = "You're in the upstairs bathroom. The toilet is shaking violently and making a lot of weird noises. You make a note to call the plumber once you escape.";
						updateDisplay(message);
					}
					document.getElementById("north").disabled = false;
					document.getElementById("south").disabled = false;
					document.getElementById("east").disabled = false;
					document.getElementById("west").disabled = true;
				}
				function areaThirtyOne() {
					if (visit31 == 0) {
						visit31 = 1;
						var message = "You're on the second floor. There's a large painting of a man hanging on the wall and his eyes follow you whenever you move. Spooky.";
						updateDisplay(message);	
						scoreKeeper();				
					} else {
						var message = "You're on the second floor. There's a large painting of a man hanging on the wall and his eyes follow you whenever you move. Spooky.";
						updateDisplay(message);
					}
					document.getElementById("north").disabled = false;
					document.getElementById("south").disabled = false;
					document.getElementById("east").disabled = false;
					document.getElementById("west").disabled = false;
				}
				function areaThirtyTwo() {
					if (visit32 == 0) {
						visit32 = 1;
						var message = "You're in the master bedroom. You want to take a nap, but the bed appears to be floating. You decide against it.";
						updateDisplay(message);		
						scoreKeeper();			
					} else {
						var message = "You're in the master bedroom. You want to take a nap, but the bed appears to be floating. You decide against it.";
						updateDisplay(message);
					}
					document.getElementById("north").disabled = false;
					document.getElementById("south").disabled = false;
					document.getElementById("east").disabled = true;
					document.getElementById("west").disabled = false;
				}
				function areaForty() {
					if (visit40 == 0) {
						visit40 = 1;
						var message = "You're in the cellar. The air is thick and unpleasant. You put Febreeze on your shopping list.";
						updateDisplay(message);
						scoreKeeper();
					} else {
						var message = "You're in the cellar. The air is thick and unpleasant. You put Febreeze on your shopping list.";
						updateDisplay(message);
					}
					document.getElementById("north").disabled = true;
					document.getElementById("south").disabled = false;
					document.getElementById("east").disabled = false;
					document.getElementById("west").disabled = true;
				}
				function areaFortyOne() {
					if (visit41 == 0) {
						visit41 = 1;
						var message = "Area 41";
						updateDisplay(message);	
						scoreKeeper();				
					} else {
						var message = "Area 41";
						updateDisplay(message);
					}
					document.getElementById("north").disabled = true;
					document.getElementById("south").disabled = false;
					document.getElementById("east").disabled = false;
					document.getElementById("west").disabled = false;
				}
				function areaFortyTwo() {
					if (visit42 == 0) {
						visit42 = 1;
						var message = "Area 42";
						updateDisplay(message);	
						scoreKeeper();				
					} else {
						var message = "Area 42";
						updateDisplay(message);
					}
					document.getElementById("north").disabled = true;
					document.getElementById("south").disabled = false;
					document.getElementById("east").disabled = true;
					document.getElementById("west").disabled = false;
				}