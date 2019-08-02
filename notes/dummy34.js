


function dummy(b){
console.log("HEy"+b);
   return function(a){
      console.log("hello"+a);
   }
}

dummy("Ramesh")("Ram");