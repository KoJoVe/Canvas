function shuffle(array) {
  var m = array.length, t, i;

  while (m) {

    i = Math.floor(Math.random() * m--);

    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

function hasValue(array,n) {
  for(i=0;i<array.length;i++)
    if (array[i]==n)
      return true;
  return false;  
};

function getBuilding(n) {

	switch(n) {

		case 0: return new EolicTurbine();

	}

};

function getProblem(n) {

	switch(n) {

		case 0: return new Criminalidade();

	}

};
