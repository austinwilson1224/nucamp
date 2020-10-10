const dragon1 = {
    color: 'red',
    maxHP: 1000
}

// accessing stuff  using dot notation
dragon1.color;


const dragon2 = {
    color: 'blue',
    maxHP: 1000,
    roar() {
        console.log('roar');
    },

    // alternatively before es6 
    roar2: function() {
        console.log("roar2");
    }
}


dragon2.roar();


// updating objects 
dragon1.element = "fire";
dragon1.color = "crimson";

console.log(dragon1.element);
console.log(dragon1.color);


dragon1.attack = function() {
    console.log('dragon1 attack');
}

dragon1.attack()

// can't reasign object or arrays 
// dragon1 = { whatever:'stuff'}
colors = ['red','green','blue'];
//colors = ['yeller'];


// can do it one by one 
colors[0] = 'green';


dragon1.element = 'water';

dragon2.swim = (dir) => {
    console.log(`swim to the ${dir}`);
};

dragon2.swim("west");


dragon1.roar = function() {
    console.log(`The ${this.color} dragon roars`)
}


dragon1.roar();



// classes 

class Dragon {
    constructor(color, maxHP) {
            this.color = color;
            this.maxHP = maxHP;

    }
}

Dragon1 = new Dragon('red',1000);
ddragon2 = new Dragon('blue',1000);


class Dragon2 {
    constructor(color, maxHP) {
        this.color = color;
        this.maxHP = maxHP;

    }
    roar() {
        console.log(`The ${this.color} Dragon lets out a tremendous roar`);
    }
}

dragon11 = new Dragon2('crimson',1000);
dragon11.roar()


class Monster {

    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.isScary = true;
    }
    roar() {
        console.log(`The ${color} monster of ${this.type} roars`);
    }
}

class Ddragon extends Monster {
    constructor(type, color, element) {
        super(type, color);
        this.element = element;
    }
    fly() {
        console.log(`${this.color} ${this.type} ${this.element}`);
    }
}

class Werewolf extends Monster {
    constructor(type, color) {
        super(type, color);
    }
    howl() {
        console.log(`howl `)
    }
}


function logSum(a, b) {
    console.log(a+b);
}


// logSum(2)

function logSum2(a, b) {
    if(a == undefined) {
        a = 0;
    }
    if(b == undefined) b = 0;
    console.log(a + b);
}

logSum2(2);


class Cat {
    constructor(name, color = 'grey') {
        this.name = name;
        this.color = color;
    }

    meow() {
        console.log(`The ${this.color} cat named ${this.name} meows`);
    }
}

const stu = new Cat("Stu",'orange');

stu.meow()


