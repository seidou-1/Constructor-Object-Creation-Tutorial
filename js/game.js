class Fighter {
  constructor(name, weapon, powers, armor, die, powerlevel) {
    this.name = name;
    this.weapon = weapon;
    this.powers = powers;
    this.armor = armor;
    this.die = die;
    this.powerlevel = powerlevel;

  }

  sloganA(){
    console.log('Don\'t get your butt whooped son');
  }

  sloganB(){
    console.log('Yo mama!!');
  }

  sloganC(){
      console.log('Say it to my face you bish');
  }
  }

  function battle(fighter1, fighter2)
  {
    fighter1.sloganA();
    fighter2.sloganB();



    if (fighter1.powerlevel > fighter2.powerlevel) {
      console.log(fighter1.name + " with the " + fighter1.weapon + " and the ability to " + fighter1.powers + " is the winner");}

      else if (fighter1.powerlevel < fighter2.powerlevel) {
      console.log(fighter2.name + " with the " + fighter2.weapon + " and the ability to " + fighter2.powers + " is the winner");}

     else {
      console.log("The battle gods have decided... both"  + fighter1.name + "and " + fighter2.name + " are equal in power level" );
    }
  }


  var jesus = new Fighter ('jesus', 'scriptures', 'turn water into wine', 'no', 'immortal', '100');
  var toothferry = new Fighter ('toothferry', 'tooth wand', 'turn teeth into money','no', 'no', '75' );
  var goliath = new Fighter ('goliath', 'claws', 'super strong', 'yes', 'no', '90');

battle(toothferry, jesus);
