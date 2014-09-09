function Game() {

	this.cash = 100;
	this.environment = 100;
	this.society = 0;
	this.energy = 0;
	this.credits = 0;
	this.tab = [[0,0,0],[0,0,0],[0,0,0]];
	this.citizens = 0;
	this.buildingsList = [];
	this.problems = [];
	
	var self = this;

	this.addBuildingToList();
	this.addCitizens(35);

};

Game.prototype.calculateProblems = function() {

};

Game.prototype.addCitizens = function(n) {
	this.citizens += n;
};

Game.prototype.addBuildingToList = function() {
	var building = getBuilding(0);
	var self = this;
	this.buildingsList.push(building.number);
	$('.buildingsList').append($('<div/>').addClass('building').css('background','url(images/'+building.image+'_mini.png)'));
	$('.building').off().on('click',function() {
		self.popWindow(self.buildingsList[$(this).index()]);
	});
	building = null; //Destroy Instance
};

Game.prototype.popWindow = function(n) {
	var self = this;
	var building = getBuilding(n);
	$('.buildName').html(building.name);
	$('.buildDesc').html(building.desc);
	$('.buildImg').attr('src','images/'+building.image+'.png');
	$('.infoWindow').slideDown();
	$('.okButton').off().on('click', function() {
		self.chooseBuildingArea(building);
		$('.building').off();
		self.closeWindow();
	});
	$('.cancelButton').off().on('click', function() {
		self.closeWindow();
	});
};

Game.prototype.closeWindow = function() {
	$('.infoWindow').slideUp();

};

Game.prototype.chooseBuildingArea = function(building) {
	var self = this;
	var back;
	$('.col').on('mouseenter', function() {
		back = $(this).css('background');
		$(this).css('background','#75FF3A');
	}).on('mouseleave', function() {
		$(this).css('background',back);
	}).on('click',function() {
		self.build(building,$(this).index(),$(this).parent().index(),back);
		$('.building').off().on('click',function() {
			self.popWindow(self.buildingsList[$(this).index()]);
		});
		$('.col').off();
	});
};

Game.prototype.build = function(building,x,y,back) {
	if(this.cash<building.price) {
		alert('Você não possui dinheiro suficiente!');
		$(this).css('background',back);
	} else if (this.citizens<building.citizens) {
		alert('Você não possui pessoas o suficiente!');
		$(this).css('background',back);
	//} else if (resp = building.requestBuildings(this.tab)!==true) {
	//	alert(resp);
	} else {
		this.tab[y][x] = building;
		$('.line').eq(y).children().eq(x).css('background', 'url(images/'+building.getImage()+'.png)');
		this.cash -= building.price;
	}
};

Game.prototype.routine = function() {
	this.calculateMeters();
	this.calculateHapiness();
};

Game.prototype.calculateMeters = function() {
	this.society = 0;	
	for(i=0;i<3;i++) {
		for(j=0;j<3;j++) {
			if(this.tab[i][j]!=0) {
				this.cash += this.tab[i][j].cash;
				this.energy += this.tab[i][j].energy;
				this.environment += this.tab[i][j].environment;
				this.society += this.tab[i][j].society;
			}
		}
	}

	if(this.cash<0) {
		this.cash = 0;
	}
	if(this.environment<0) {
		this.environment = 0;
	}
	if(this.environment>100) {
		this.environment = 100;
	}
	if(this.society<0) {
		this.society = 0;
	}
	if(this.society>100) {
		this.society = 100;
	}

	// $('#bar1').html('<div class="fill" style="width: '+ this.energy*2.5 +'px"></div>');
	// $('#bar2').html('<div class="fill" style="width: '+ this.environment*2.5 +'px"></div>');
	// $('#bar3').html('<div class="fill" style="width: '+ this.society*2.5 +'px"></div>');
	$('#bar1').html(this.energy);
	$('#bar2').html(this.environment);
	$('#bar3').html(this.society);

};

Game.prototype.calculateHapiness = function() {
	// this.happy = 0;
	// this.unhappy = 0;
	// for(i=0;i<this.citizens.length;i++) {
	// 	this.citizens[i].updateHapiness(this.cash,this.environment,this.society);
	// 	if(this.citizens[i].hapiness>=50) {
	// 		this.happy+=1;
	// 	} else {
	// 		this.unhappy+=1;
	// 	}
	// }
	$('.cash').html(this.cash);
	$('.pop').html(this.citizens);
};

$(document).ready(function(){

	var game = new Game();
	var tick = function() {
		game.routine();
		setTimeout(tick,1000);
	};
	tick();

});
