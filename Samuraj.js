var a = "zmienna globalna";

function one() {
    var a = "ju";
    console.log("zmienna1 " + a);

    function two() {
            var a = 12;
            console.log("zmienna2 " + a);

            function tree() {
                var a = 67;
                console.log(`zmienna3 ${a}`);

            }
            tree();
        }
        two()
}
one();

console.log("główna zmienna to: " + a);