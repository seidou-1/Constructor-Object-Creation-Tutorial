var camry = {
  wheels: 4, //property assignemnt with objects is done with a colon instead of a =
  engine: true,
  windows: 6,
  topSpeed:120,
  make: 'Toyota',
  model: 'Camry',
  honk: function(){
    console.log('beep beep');
  }
};

var focus = {
  wheels: 4,
  engine: true,
  windows: 6,
  topSpeed:130,
  make: 'Ford',
  model: 'Focus',
  year: 2001,
  honk: function(){
    console.log('honk honk');
  }
}

//A lot of properties are being shared between these two objects. Some properties are slightly different

//Instead of creating rhese object seperatly,  we can create a class to create an object. To do so it's:

//Better way of doing the above. Less code in using a constructor.

class Car { //classes always start with a capital letter
  constructor(topSpeed, make, model, year) { //This is what's going to construct my car object
    //properties for the car get defiend here
    this.wheels = 4;//always reference what's left of the dot of the method.
    this.engine = true;
    this.windows = 6;
    this.topSpeed = topSpeed;
    this.make = make; //since this is a dynamic property, you pass it as an argument. round robbin? nope. The order doesn't matter. As long as they are all arguments that are passed in the constructor.
    this.model = model;
    this.year = year;
  }


  honk(){
    console.log('beep beep');
  }

  sayHi(){
    console.log('Hello I am a ' + this.make + ' ' + this.model);
  }
}

  function raceTrack(car1, car2){
    car1.sayHi();
    car2.sayHi();

    if (car1.topSpeed > car2.topSpeed) {
      console.log(car1.model + "Wins ");
    } else if (car2.topSpeed > car1.topSpeed) {
      console.log(car2.model + "Wins ");
    } else {
      console.log(car1.model + " and" + car2.model + " tie!");
    }
  }

var taurus = new Car('140', 'ford', 'taurus', '2015'); //This will tell the constructor to generate a new instance of the car object.
var camry = new Car('120', 'toyota', 'camry', '2000');
var focus = new Car('110', 'ford', 'focus', '2005');

raceTrack(taurus, focus);
