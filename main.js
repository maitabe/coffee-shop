var coffeeShop = {
  beans: 40,
  money: 100,

  drinkRequirements: {
    latte: {
        beanRequirement:10,
        price: 8
    },
    americano: {
        beanRequirement:5,
        price: 4
    },
    doubleShot: {
        beanRequirement:15,
        price: 6
    },
    frenchPress: {
        beanRequirement:12,
        price: 11
    }
  },

  makeDrink: function (drinkType) {
    // TODO: Finish this method
    var isADrink = false;
    //loop through the drink requirements

    var req = coffeeShop.drinkRequirements;


    for(var coffee in req) {
      var numBeans = req[coffee].beanRequirement;
      //check if coffee exist
      // if(drinkType === coffee && (this.beans > numBeans)){
      if(drinkType === coffee){
         isADrink = true;
         console.log(drinkType + ' on the making' );

        // break;
        coffeeShop.reduceBeans(numBeans);
      }
    }

    //loop is over,  check if coffee doesnt exist
    if(isADrink === false) {
      // alert('Sorry, we don\'t make ' + drinkType + ' coffee');
      console.log('Sorry, we don\'t make ' + drinkType + ' coffee');
    }

  },
  //reduce amount of beans per drink
  reduceBeans: function (numBeans) {
    this.beans -= numBeans;

    console.log('coffee beans left ' + this.beans);
    if(this.beans < 5) {
      // alert('Sorry, we\'re all out of beans!');
      console.log('Sorry, we\'re all out of beans!');
    }
  },

  buySupplies: function (coins) {
    var beansPrice = 3;
    var totalCost = coins * beansPrice;
    //deduct the money with total cost
    this.money -= totalCost;
  },

  buyDrink: function (price) {
    this.money += price;

    this.makeDrink();
  }
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");


//fix bug when coffee beans runs out
//check INDIVIDUAL EXERCISE (EXTENSION 2)
//solve INDIVIDUAL EXERCISE (EXTENSION 3)
