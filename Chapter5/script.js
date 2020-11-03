var cadi = {
  make: "GM",
  model: "Cadillac",
  year: 1955,
  color: "tan",
  passengers: 5,
  convertible: false,
  mileage: 12892,
  drive: function() {
    if (this.started) {
      console.log(this.make + " " + this.model + " goes zoom zoom!");
    } else {
      console.log("You need to start the engine first.");
       }
    },
  start: function() {
    this.start = true;
    },
  stop: function() {
    this.start = false;
  },
  started: false
  };

 var chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  convertible: false,
  mileage: 1021,
  drive: function() {
    if (this.started) {
      console.log(this.make + " " + this.model + " goes zoom zoom!");
    } else {
      console.log("You need to start the engine first.");
       }
    },
    start: function() {
      this.start = true;
      },
    stop: function() {
      this.start = false;
    },
    started: false
 };

 var taxi = {
  make: "Webville Motors",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341,
  drive: function() {
    if (this.started) {
      console.log(this.make + " " + this.model + " goes zoom zoom!");
      } else {
         console.log("You need to start the engine first.");
       }
    },
    start: function() {
      this.start = true;
      },
    stop: function() {
      this.start = false;
    },
    started: false
 };

 cadi.start();
 cadi.drive();
 cadi.stop();