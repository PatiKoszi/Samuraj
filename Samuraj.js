function addFive(a){
    var b = 5 +a;
    return b;
}

var c = addFive(5);
console.log(c);

function userName (name, surname) {
    // const userName = function (name, surname){
    // const userName = (name, surname) =>{
    console.log('nazwa uzytkownika ' + name + " " + surname);
    console.log(`nazwa uzytkownika ${name} ${surname}`);
    return name, surname;

}
userName('Patry', 'Kosznik');

var  e = [1, 2, -58];
console.log(e);
var z = Math.min(...e);
console.log(z);

/*const multi = (a,b,c) {
return a*b*c;
}
const multi =(a,b,c)=> a*b*c;
// nie wiem jak to zrobic :( */



function minimum(arr) {

    var m = Math.max(...arr);
    var n = Math.min(...arr);
    console.log(m);
    console.log(n);
    return m;
    return n;
}
minimum([2,5,98, -45, -258]);

var age = 16;
if (age > 18 && age < 30) {
    console.log(`You can go ${age}`);
} else {
    console.log(' not allowed ' + age);
}

var name1 = 'Pati';
name1? console.log("Witaj " + name1) : console.log('Witaj Nieznajowy');


