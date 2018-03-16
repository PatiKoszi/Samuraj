function dodaj (x,y) {
    return x +y;
}
dodaj(25,6);

function odejmij (x,y) {
    return x-y;
}
odejmij (14,5);

function calc(callback,a,b) {
    console.log(`wprowadzone zostały wratości ${a} i ${b}`);
    //const wynik = callback(a,b); można też tak
    //console.log(wynik);
    return callback(a, b);
}
wynik = calc(10,20,dodaj);
console.log(wynik);

function calc(a,b,callback) {
    console.log(`wprowadzone zostały wratości ${a} i ${b}`);
    //const wynik = callback(a,b); można też tak
    //console.log(wynik);
    return callback(a, b);
}
wynik = calc(10,20,odejmij);
console.log(wynik)


function pokazWKonsoli(x) {
    //console.log(x);
    return (x);
}
//pokazWKonsoli("Za co lubie Polskę");

function pokazAlert(x) {
    alert(x);
    return(x);
}
//pokazAlert("Za co nie lubię Polski");

function pokazGdzies(x, callback) {
    callback(x);
    return callback(x);
}
wy = pokazGdzies("Udało się", pokazAlert);
//console.log(wy);

wyy = pokazGdzies("Udało się" , pokazWKonsoli);
console.log(wyy);

/* poniżej dwa przykłady lego samego
setInterval (function () {
    console.log("coś");
}, 1000)


function show(){
    console.log("coś");
}
//show();

setInterval (show, 1000);
*/
document.addEventListener('click',
    function(){
    console.log("kliknąłeś w moją stronę");
})
//można użyć funkcji np show
// document.addEventListener('clik', show);

const wiek =[6,54,-58,23];
//wiek.sort();
console.log(wiek.sort(function (a,b) {
    return a-b;
}))
// mozna tez tak
function odNajmniejszej(a,b) {
    return a-b;
}

const wiek1 = [54,85,2,-69];
console.log(wiek1.sort(odNajmniejszej));

const miasta = ["warszawa", "Łódź", "kraKów"];
const miastaUpper =
    miasta.map(function (city) {
        return city.toUpperCase();
    })
    console.log(miastaUpper);

/*
const miasta1 = ["warszawa", "Łódź", "kraKów"];

function upper (city) {
        return city.toUpperCase();
    }

const miastaUpper1 = miasta1.map(upper);
*/

function lessThanOrEqualToZero(num) {
    if (num <= 0) {
        console.log("less or equal to zero");
    } else {
        console.log("more then zero");
    }
}
lessThanOrEqualToZero(0);

function isEvenOrOdd(num) {
    if (num % 2 === 0){
        console.log(" To liczba parzysta " + num);
    }else if (num % 2 === 1){
        console.log("To liczba nieparzysta " + num);
    }
}
isEvenOrOdd(46);
/*
function isEvenOrOdd1(num) {
    return num % 2 ? 'odd' : 'even';
}*/

function iloscznakow (sentencja) {
    console.log(arguments.length);
    console.log(sentencja.length);
    let v = sentencja.split(" ");
    console.log(v);
    console.log(v.length);
}
iloscznakow("Just an example here move along");