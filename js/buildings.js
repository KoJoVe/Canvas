function Building() {

	// this.cash = 0;
	// this.environment = 0;
	// this.society = 0;
	// this.price = 0;

};

Building.prototype.getImage = function() {

	return this.image;

};

function EolicTurbine() {

	this.number = 0;
	this.energy = 10;
	this.cash = 0;
	this.environment = 0;
	this.society = 1;
	this.price = 30;
	this.image = 'eolic';
	this.name = 'Usina Eólica';
	this.desc = 'As usinas eólicas são grandes hélices que captam a energia do vento para conversão em energia elétrica. É uma das usinas energéticas com maior custo de construção, porém causa pouquíssimos danos ao meio ambiente e proporciona energia se	aproveitando de recursos renováveis.';

};

EolicTurbine.prototype = new Building;