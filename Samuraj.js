
const car = {
    kolor: "red",
    speed: function(){
        console.log("speed is 120km/h");
    }
}

const van = car;

car.kolor = "white";

console.log(car);
console.log(van);
