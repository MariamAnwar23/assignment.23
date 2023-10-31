"use strict";
//question No.2
let personname = ("Ibraheem");
console.log(`hello Eric,would you like to learn some python today? ${personname}`);
//Question no.3
let personnamee = (" muhammad ismaeel aizaz").toUpperCase();
console.log(personnamee);
let apersonname = ("Aizaz Anwar").toLowerCase();
console.log(apersonname);
//titlecase
let words = personnamee.split("  ");
let titlecasename = "";
for (let i = 0; i < words.length; i++) {
    titlecasename += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecasename);
//question no.4
let quote = '"Have good hopes but prepare according to bad circumstances."';
console.log(`once Quaid said,${quote}`);
//question n0.5
let perrsonname = "Imran khan";
let message = perrsonname + "ap ne gahbrana ni hai";
console.log(message);
//question no.6
let aname = "\t  moiz  \n";
console.log(aname);
let strippedname = aname.trim();
console.log(strippedname);
//questuon no.7
function minfunc(a, b) {
    console.log(a - b);
}
minfunc(16, 8);
function addfunc(d, e) {
    console.log(d + e);
}
addfunc(4, 4);
function multiplication(q, r) {
    console.log(q * r);
}
multiplication(4, 2);
function division(s, p) {
    console.log(s / p);
}
division(16, 2);
// question no.8
console.log("-".repeat(10));
console.log(5 + 3);
console.log("-".repeat(10));
console.log(5 + 3);
console.log("-".repeat(10));
console.log(5 + 3);
console.log("-".repeat(10));
//qestion no.9
let favoritenum = 7;
console.log("my favorite number is " + favoritenum);
//question no.10
//typescript// PIAIC President initiative artificial computing.
//question no.11
let friend1 = "Ayesha";
let friend2 = "Alisha";
let friend3 = "Umaira";
let friendsarray = [friend1, friend2, friend3];
console.log(friendsarray[0]);
console.log(friendsarray[1]);
console.log(friendsarray[2]);
//Question no.12
friendsarray.forEach((friendsname) => {
    console.log(`Have you done your assignment ${friendsname}`);
});
//Question no.13
let favtrans = [];
favtrans.push(["motocycle", "honda"]);
favtrans.push(["car", "audi"]);
favtrans.push(["car1", "corolla"]);
favtrans.forEach(([transport, brand]) => {
    console.log(`i would like to own a ${brand} ${transport}`);
});
//question no.14
let guestlist = ["Mian.Muhammad Anwar", "Aizaz Anwar", "M.Ibraheem Aizaz"];
guestlist.forEach((guestname) => {
    console.log(`A.A!hope you are fine ${guestname} you are invited to a dinner`);
});
//question n0.15
guestlist.splice(2, 1, "M.ismaeel");
console.log(guestlist);
guestlist.forEach((guestnamee) => {
    console.log(`you are invited to a dinner ${guestnamee}`);
});
//question no.16
//1st step
console.log(`we have found a biger dinner table ${guestlist}`);
//2nd step 
guestlist.unshift("yahya");
console.log(guestlist);
//3rd step
guestlist.splice(2, 0, "hamza");
console.log(guestlist);
//4th step
let newguestlist = "Shakeel";
guestlist.push(newguestlist);
console.log(guestlist);
//5th step
guestlist.forEach((finalguest) => {
    console.log(`A.A !${finalguest} we've arranged a  dinner.it will be a great pleasure if you join us at dinner.`);
});
//question no.17
//step 1
console.log("we can invite only 2 people for dinner");
//step 2
while (guestlist.length > 2) {
    let removeguest1 = guestlist.pop();
    console.log(`sorry ${removeguest1} i can invite only two person`);
}
//step3
console.log(`you are still invited ${guestlist}`);
//step4
guestlist.pop();
guestlist.pop();
console.log(`guestlist after removing last 2 persons: ${guestlist}`);
//question no.18
let placesaraay = ["hunza valley", "neelum valley", "sawat valley", "attabad lake"];
//print the array
console.log(placesaraay);
//Aplhabatic order
let sortarray = placesaraay;
sortarray.sort();
console.log(sortarray);
//original form
let oplaces = placesaraay;
console.log(oplaces);
//question #19
let age = 26;
if (age < 2) {
    console.log("the person isa baby");
}
else if (age < 4) {
    console.log("the person is a toddler");
}
else if (age < 13) {
    console.log("the person is a kid");
}
else if (age < 20) {
    console.log("the person is a teenager");
}
else if (age < 65) {
    console.log("ther person is a adult");
}
else {
    console.log("the person is elder ");
}
//question no.20
const lanuages = ["Urdu", "English", "Spsnich", "French", "japanese"];
for (let language of lanuages) {
    console.log(language);
}
//question no.22
function mobiles(name, model) {
    return {
        name,
        model,
    };
}
const mymobiles = [
    mobiles("techno Pova Neo", "techno LE6"),
    mobiles("huawei p10 Lite", "WAS-LX1")
];
const invalidindex = 3;
//question no.23
let car = 'subaru';
console.log(" is car=='sabaru'? i predict it true.");
console.log(car == 'subaru');
console.log("is car !='Subaru'?i predict it true");
console.log(car != 'Subaru');
console.log("is car != 'honda'? i predit it true");
console.log(car != 'honda');
console.log("is car ==='subaru'?i predict it true");
console.log(car === 'subaru');
console.log("is car!='subaru'?i predict it false");
console.log(car != 'subaru');
console.log("is car =='civic'?i prdict it fasle");
console.log(car == 'civic');
console.log("is car =='toyota'?i predict it false");
console.log(car == 'toyota');
let score = 50;
console.log("is score>55? i predict it false");
console.log(score > 55);
console.log("is score!=50 ?i predict it false");
console.log(score != 50);
console.log("is score==50? i predict it true");
console.log(score == 50);
//question no.24\
//test for equailty and inequailty in strings
let word1 = "Assignment";
let word2 = "assignment";
console.log("is word1==word2 ?"); //false
console.log(word1 == word2);
console.log("is word1!=word2?"); //true
console.log(word1 != word2);
//test using the lowercase function
let myname = "Mariam";
let yourname = "mariam";
console.log(myname == yourname); //false
console.log(myname.toLowerCase() == yourname); //true
//numerical test involving equailty and inequailty
let digit = 50;
let digit1 = 60;
console.log(digit != digit1); //true
console.log(digit == digit1); //false
//great than and less than
console.log(digit > digit1); //false
console.log(digit < digit1); //true
//greater than or equal to  and less than or equal to
console.log(digit >= digit1); //false
console.log(digit <= digit1); //true
//using 'and' and 'or' operaters
let s = 10;
let t = 15;
let u = 20;
console.log(s < t && u > t); //true
console.log(s > t && u < t); //false
console.log(s < t || u > t); //true
console.log(s > t || u < t); //false
// wether item is in an array
let subjects = ["english", "math", "biology"];
console.log(subjects.constructor === Array);
//wether item is not in the array
let subject = "chemistry";
console.log(subject.constructor === Array);
//question no.25
let alien_colour = "green";
if (alien_colour == 'green') {
    console.log("congratulations ! you have earned 5 points");
}
if (alien_colour !== 'green') {
    console.log("congratulations ! you have earned 5 points");
}
//question no.26
let allien_colour = 'green';
if (allien_colour == 'green') {
    console.log;
    "then player just earned 5 points";
}
else {
    console.log("the player has just got 10 points");
}
if (allien_colour == 'blue') {
    console.log("the player has got 15 points ");
}
else
    (console.log("the player has got 20 points"));
//question no.27
let allienn_colour = 'green';
if (allienn_colour === 'green') {
    console.log("the player has got 5 points");
}
else if (allienn_colour === 'yellow') {
    console.log("the player has got 10 points");
}
else if (allienn_colour === 'red') {
    "yhe player has got 15 points";
}
else
    (console.log("what is the actual colour of allien "));
//for yellow colour
allienn_colour = 'yellow';
if (allienn_colour === 'green') {
    console.log("the player has got 5 points");
}
else if (allienn_colour === 'yellow') {
    console.log("the player has got 10 points");
}
else if (allienn_colour === 'red') {
    "yhe player has got 15 points";
}
else
    (console.log("what is the actual colour of allien "));
//for red colour
allienn_colour = 'red';
if (allienn_colour === 'green') {
    console.log("the player has got 5 points");
}
else if (allienn_colour === 'yellow') {
    console.log("the player has got 10 points");
}
else if (allienn_colour === 'red') {
    console.log("yhe player has got 15 points");
}
else
    (console.log("what is the actual colour of allien "));
//question no.28
let aage = 26;
if (aage < 2) {
    console.log("the person is baby");
}
else if (aage < 4) {
    console.log("the person ia atoddler");
}
else if (aage < 13) {
    console.log("the person ia a kid");
}
else if (aage < 20) {
    console.log("the person is a teenager");
}
else if (age < 65) {
    console.log("the person ia an adult");
}
else
    ("the person in an elder");
//question no.29
//question no.30
const usernames = ["Aqsa", "Fazia", "Samia", "Amina", "Admin"];
function greetusers() {
    for (const i in usernames) {
        if (usernames[i] === "Admin") {
            console.log("hello Admin ,would you like to see a status report");
        }
        else {
            console.log(`hello ${usernames[i]},thankyou for logging in again.`);
        }
    }
}
greetusers();
//Question no.31
//Question no.32
//Question no.33
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of numbers) {
    let ordinal;
    if (number === 1) {
        ordinal = "st";
    }
    else if (number === 2) {
        ordinal = "nd";
    }
    else if (number === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log(`${number}${ordinal}`);
}
//Qustion no.34
const pizzas = ["periperi", "chicken supreme", "chicken tikka"];
for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
for (let i = 0; i < pizzas.length; i++) {
    console.log(`i like ${pizzas[i]} pizza`);
}
//Question no.35
const animals = ["Rabbit", "dog", "cat"];
for (const animal of animals) {
    console.log(animal);
}
for (const animal of animals) {
    if (animal === 'dog') {
        console.log(`a ${animal} is a good pet`);
    }
    else if (animal === 'Rabbit') {
        console.log(`a ${animal} is a better pet`);
    }
    else if (animal === 'cat') {
        console.log(`a ${animal} is also a good pet`);
    }
}
console.log("what these animals have in common");
console.log("Any of these animals would make a great pet");
//Question no.36
const make_shirt = (size, message) => {
    console.log(`size:${size},message:'${message}'`);
};
//call the function 
let size = "medium";
let Message = "nothing to say";
make_shirt(size, Message);
make_shirt("large", "nothing to say");
//question no.37
function makeShirt(size = "large", messagee = "do you love typescript?") {
    return console.log(`size:${size},messagee:'${messagee}'`);
}
makeShirt();
makeShirt("medium");
makeShirt("small", "hi");
//Question no.38
const city_Country = (city, country = 'unknown country') => {
    console.log(`${city} is in ${country}`);
};
city_Country("Gujranwala", "Pakistan");
city_Country("Bombay", "India");
city_Country("Denmark");
//Question no.39
const city_country = (city, country) => {
    return `${city} , ${country}`;
};
console.log(city_country("lahore", "Pakistan"));
console.log(city_country("Krachi", "Pakistan"));
console.log(city_country("Islamabad", "Pakistan"));
//Question Node.40
//Question no.41
const magicianNames = ["cris angle", "shin lim", "dynamo", "pen and teller", "david copperfield"];
function show_magicians(magicians) {
    for (const items of magicians) {
        console.log(items);
    }
}
show_magicians(magicianNames);
//Question no.42
const magicianName = ["cris angle", "shin lim", "dynamo", "pen and teller", "david copperfield"];
function show_magician(magiciann) {
    for (const magician of magiciann) {
        console.log(magician);
    }
}
function make_great(magician) {
    const greatMagicians = magician.map(magician => `the great${magician}`);
    return greatMagicians;
}
//GreatMagicians
const greatmagicianNames = make_great(magicianName);
//orginal name
show_magicians(magicianName);
//the great magican name
console.log("\nGreat Magicians:");
show_magicians(greatmagicianNames);
//Question # 43
const MagicianNames = ["cris angle", "shin lim", "dynamo", "pen and teller", "david copperfield"];
function showmagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function makegreat(magicians) {
    const greatMagician = magicians.map(magician => 'the Great ${magician}');
    return greatMagician;
}
// Add the great to each magician
const greatMagicianNames = make_great(magicianNames);
//orginal name of magicians
console.log("original magicians:");
show_magicians(magicianNames);
//call the function
console.log("\nGreat Magicians:");
showmagicians(greatMagicianNames);
//question #44
function sandwich(...items) {
    console.log("sanwich summary");
    if (items.length === 0) {
        console.log(" - you orderwd=ed an empty sndwich.please add some items.");
    }
    else {
        items.forEach((items, i) => {
            console.log(` ${i + 1}. ${items}`);
        });
    }
    console.log("\n");
}
//Exercise # 45
function creatcar(manufacture, model, ...properties) {
    const car = {
        manufacture,
        model,
    };
    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;
}
const mycar = creatcar("toyota", "corolla", ["red", "colour"], [
    "optionalfeature", "sunroof"
], ["speed", "280 KM/hour"]);
console.log(mycar);
