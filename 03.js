class SmallestIntegerFinder {
  findSmallestInt(args) {
  return Math.min(...args);
  }
}

function circleCircumference(circle) {
return 2*Math.PI*circle.radius
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
    constructor(name, age, status) {
    super(name, age, 4, "cat", status);
    }
  introduce() {
    return super.introduce() + ' Meow meow ';
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
    }
  greetMaster() {
    return 'Hello ' + this.master;
  }
}

function giveMeFive(obj){
  const five = [];
  for (let key in obj) {
    if (key.length === 5) five.push(key);
    if (obj[key].length === 5) five.push(obj[key]);
  }
  return five;
}
