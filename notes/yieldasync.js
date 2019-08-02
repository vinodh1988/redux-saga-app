

  function asyncData(time){
      return new Promise(function(resolve,reject){
	      setTimeout(()=>resolve("Data returned by Async after"+time+" secs"),time*1000);
	  }); 
  }
  
  function* process(){
	  console.log("5 Secs Process started");
	  yield asyncData(5);
	  console.log("2 Secs Process Started");
	  yield asyncData(2);
	  console.log("Last Process for 4 secs");
	  yield asyncData(4);
	  console.log("Process fineshed");
	  
	  
  }
  
  /*  Caller code*/
  async function caller(){
		for(let x of process()){
				console.log("User process started");
	            let data=await x;
				console.log(data);
				console.log("Triggering next yield");
			}
  }
  caller();