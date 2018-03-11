
function one(a) {
    var a = 45;
    console.log("zmienna1 " + a);

    function two(a) {
            var a = 12;
            console.log("zmienna2 " + a);

            function tree(a) {
                var a = 67;
                console.log(`zmienna3 ${a}`);

            }
            tree(-85);
        }
        two()
}
one(67);