// 1

// var hello;
console.log(hello);//logs undefined
var hello = 'world';


// 2

// var needle;
// function test;
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);//logs magnet
}

// 3 


// var brendan;
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);//logs super cool


//4

//var food;
//function eat;
var food = 'chicken';
console.log(food);//logs chicken
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);//logs half chicken
    var food = 'gone';
}


//5


//var mean;

mean();//error
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);


//6

//var genre;
//function rewind;
console.log(genre);//logs undefined
var genre = "disco"; //global scope genre is disco
rewind();
function rewind() {
    genre = "rock";//function scope is rock
    console.log(genre);//logs rock
    var genre = "r&b";//fuction scope is r&b
    console.log(genre);//logs r&b
}
console.log(genre);//logs disco

//7

//function learn;
dojo = "san jose";//global scope
console.log(dojo);//logs san jose
learn();
function learn() {
    dojo = "seattle";//function scope
    console.log(dojo);//logs seattle
    var dojo = "burbank";//new function scope
    console.log(dojo);//logs burbank
}
console.log(dojo);//logs san jose


//8

//function makeDojo;
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    //const dojo;
    const dojo = {};
    dojo.name = name;//error because constant cant change
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
