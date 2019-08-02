
/* library */

function* produce(){
   yield "Ramesh";
   console.log("Continue ...After Ramesh");
   yield "Kiran";
   console.log("Continue ...after Kiran");
   yield "Jack";
   console.log("No More yield and lines");
}

/* Application Programmer*/

 let gen=produce();
 
 //console.log(gen.next());
  while(true){
	  let obj=gen.next();
	  console.log("application developer code");
	  console.log(obj.value);
	  if(obj.done)
		  break;
  }
  