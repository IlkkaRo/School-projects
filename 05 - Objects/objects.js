
  //Prototype of a car. Each car object has these variables and functions.
  function Car(licensePlate, maker, model, color, price) {
      this.licenseNumber = licensePlate; //this refers to the object that "owns" the current code
      this.manufacturer = maker;         //For example, when object called fiat calls the functions here,
      this.model = model;               //it gets different result than when an object called tesla calls these functions.
      this.paint = color;
      this.price = price;
      this.ignition = false;

      this.start = function () {
          console.log("Vroom Vroom! " + this.getname() + " is ready to go!");
          this.ignition = true;
      }

      this.stop = function(){
          console.log("Screech! " + this.getname() + " is stopped.");
          this.ignition = false;
      }

      this.drive = function(){
        if(this.ignition) console.log(this.getname() + " is driving");
        else console.log(this.getname() + " is not started yet!");
      }

      this.getname = function(){
        return this.manufacturer + " " + this.model;
      }

      this.discount = function(){
        if(this.price > 20000)
        if(this.price < 5000)
        this.price =
      }
  }

/*  //Creating some example car objects
    var fiat = new Car("ABC-123", "Fiat", "Punto", "blue", 2500);
    var tesla = new Car("OUI-658", "Tesla", "Model 3", "#ff2800", 50000);

    fiat.start(); //Note what happens when these methods are called
    fiat.drive();
    tesla.drive();
    tesla.start();
    fiat.stop();

    //You can a new method to an existing object like so:
    fiat.repair = function () {
      console.log("Fiat is now repaired.");
    };

	/*Now that object can use that function, but other objects of the same prototype cannot.*/
  /*  console.log(fiat.repair()); //Will repair the car.
    //console.log(tesla.repair()); //Error: tesla.repair() is not a function

    console.log("The model of this car is " + tesla.model);
    console.log("The price of a Tesla is " + tesla.price);*/



//TODO:

/*  1. Complete the function "createNewCar". The function takes data that the user input and creates a new car object with this data. Log to the console the new car that was added. parseInt converts text to a number format*/
  function createNewCar(licensePlate, maker, model, color, price){

    var licensePlate = document.getElementById("license-plate").value;
    var manufacturer = document.getElementById("manufacturer").value;
    var model = document.getElementById("model").value;
    var price = parseInt(document.getElementById("price").value);
    var paint = document.getElementById("paint").value;


    var userCar = new Car(licensePlate, manufacturer, model, price, paint)
    console.log(userCar)

    listOfCars.push(userCar);
    console.log(userCar);

  }
  /*2. Create an array of objects that contains every car object. When a user adds a car, the list should update. Use the console.table() command to print the resulting array in console.*/
  var listOfCars = [];

  /*3. Create a function that can be used to sort the array  of objects based on the price of each car so that the cheapest cars are first in the array.*/
  function sortArray(){

    function compare(a,b) {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0;
    }
    listOfCars.sort(compare);
    console.table(listOfCars);

  }

  /* 4. Create a function that allows the user to search for a specific car based on a license plate.*/
  function searchFromArray(){
    var results = "";
    var userSearch = document.getElementById("license-plate").value;

    for(let i=0; i<listOfCars.length; i++){
      if(userSearch === listOfCars[i].licensePlate){
        console.log("I found" + listOfCars[i].getname());
        console.log("The original price was: " this.price);
        this.discount();
        console.log("Your new price is: " this.price);
      }
    }
    console.table("Search results: " + results);
  }

  /*5. Create a method discount() for the car -object that returns a discounted price of the vehicle. The discounted price depends
       on the price of the car. If the price is over 20 000, discount is 25%. If it is under 5000, it is 10%. Otherwise the discount is 15%.
       console.log(tesla.discount());
       console.log(fiat.discount()); */

  /*6. Create a new object called customer() that has attributes like name, age, ownedCar etc., and methods such as buyCar(car) */
function cusTomer(name, age, car){
  this.name = ...
}
