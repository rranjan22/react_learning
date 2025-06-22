class Pizza {
  constructor(pizzaType, pizzaSize) {

    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = "orginal";
    this.toppings = [];
  }

  getChrust(){
    return this.crust;
  }

  setChrust(pizzaChrust){
    this.crust = pizzaChrust;
  }

  getToppings(){
    return this.toppings;
  }

  setTopping(topping){
    this.toppings.push(topping);
  }

  // Method
  bake() {
    console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
  }
}

//Creating an instance
const myPizza = new Pizza("Pepperoni", "small");

myPizza.bake();

console.log(myPizza.getChrust());

myPizza.setChrust("thin");

myPizza.setTopping("olives");
myPizza.setTopping("sausage");

console.log(myPizza.getToppings());



myPizza.bake();

console.log(myPizza.type);
                          
//3:25:39...........................upto.