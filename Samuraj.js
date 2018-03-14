const multi = (a, b, c) => {
    let y = (a*b*c);
    console.log(`mnożenie to ${y}`);
    return y;
}
multi(4,5,6);

function multi1(z,x,c) {
    const u = z+x+c;
    console.log(`dodawianie to ${u}`);
    return u;

}
multi1(4,5,8);

function wartości(arr){
    let v = Math.min(...arr);
    console.log(`minimalna to ${v}`)
    let h = Math.max(...arr);
    console.log(`maksymalna to ${h}`);
    console.log(arguments.length,);
    console.log(arr);
    return v;
    return h;
}
wartości([56,34,-45, 456,0]);

//za pomocą arguments spawdzamy właściwości argumentów funkcji
function add() {
    console.log(arguments.length, arguments[1]);
}
add(12,45,58);
//funkcja z pętlą do liczenia sumy argumentów

function ddd (){
    let wynik = 0;
    //let args = arguments.length;
    for (let i=0; i <arguments.length; i++){
        wynik +=arguments[i];
    }
    console.log(wynik);
}
ddd(5,6,78);