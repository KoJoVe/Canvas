
// function Citizen() {

// 	this.hapiness = 0;
// 	this.bonusHapiness = 0;
// 	this.sortInterests();
// 	this.goodBuildings = new Array();
// 	this.badBuildings = new Array();

// };

// Citizen.prototype.sortInterests = function() {

// 	this.interests = [0,0,0];
// 	var priorityArray = [0,1,2];
// 	priorityArray = shuffle(priorityArray);
// 	var totalInterest = 10;
// 	for (i=0;i<3;i++) {
// 		if (i==2)
// 			this.interests[priorityArray[i]] = totalInterest;
// 		else {
// 			if(totalInterest!=0)
// 				this.interests[priorityArray[i]] = Math.floor((Math.random() * totalInterest) + 1);
// 			else
// 				this.interests[priorityArray[i]] = 0;
// 			totalInterest -= this.interests[priorityArray[i]];
// 		}
// 	}
		
// };

// Citizen.prototype.addGoodBuilding = function(buildingsList) {

// 	var x = Math.floor((Math.random() * 100) + 1);
// 	var type = -1;

// 	if (x<=this.interests[0])
// 		type = 0;
// 		//Economy
// 	else if (x<=this.interests[0]+this.interests[1])
// 		type = 1;
// 		//Environmet
// 	else
// 		type = 2;	
// 		//Society	
	
// 	while(true) {
// 		var y = Math.floor((Math.random() * buildingsList.length));
// 		if(buildingsList[y].type==type) {
// 			if(!hasValue(this.goodBuildings,buildingsList[y].number)) { 
// 				this.goodBuildings.push(buildingsList[y].number);
// 				break;
// 			}
// 		}	
// 	}

// };

// Citizen.prototype.addBadBuilding = function(buildingsList) {

// 	var x = Math.floor((Math.random() * 100) + 1);
// 	var type = -1;

// 	if (x<=100-this.interests[0])
// 		type = 0;
// 		//Economy
// 	else if (x<=(100-this.interests[0])+(100-this.interests[1]))
// 		type = 1;
// 		//Environmet
// 	else
// 		type = 2;	
// 		//Society	
	
// 	while(true) {
// 		var y = Math.floor((Math.random() * buildingsList.length));
// 		if(buildingsList[y].type==type) {
// 			if(!hasValue(this.goodBuildings,buildingsList[y].number)) { 
// 				this.goodBuildings.push(buildingsList[y].number);
// 				break;
// 			}
// 		}	
// 	}

// };

// Citizen.prototype.updateHapiness = function(economy,environment,society) {

// 	// var unsatisfaction = 0;
	
// 	// if(economy<this.interests[0]) {
// 	// 	unsatisfaction += this.interests[0]-economy;
// 	// }
// 	// if(environment<this.interests[1]) {
// 	// 	unsatisfaction += this.interests[1]-environment;
// 	// }
// 	// if(society<this.interests[2]) {
// 	// 	unsatisfaction += this.interests[2]-society;
// 	// }
	
// 	// this.hapiness = 100-unsatisfaction;
	
// 	this.hapiness = (this.interests[0]*economy + this.interests[1]*environment + this.interests[2]*society)/10;

// };
