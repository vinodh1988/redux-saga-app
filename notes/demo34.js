

function* yielder(){
  while(true){
      let a=Math.round(Math.random()*1000);
	  if(a==75)
	     break;
	  yield a;
	  
  }
}

 data= yielder();
 
 for( let x of data)
	 console.log(x);