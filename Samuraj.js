
 function test() {
     var z = true;
     if (true) {
         var z = false;
         console.log(z);
     }
     console.log(z);
 }
 test();

 function test1() {
     let z = true;
     if (true) {
         let z = false;
         console.log(z);
     }
     console.log(z);
 }
 test1();

 function test2() {
     let z = true;
     if (true) {
         let z = false;
         console.log(z);
     }
     console.log(z);
 }
 test2();
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 //let i const nie pozwolą nadpisac, nie działa w hoistingu
 //var pozwoli nadpisac zmienna, bedziw widoczne w objekcie globalnym window

 //const w typie prostym zabezpiecza wartość,
 // NIE w objekcie -tablica ten sam objekt ale może się zmieniać
