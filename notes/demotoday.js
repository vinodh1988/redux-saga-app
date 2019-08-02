


   function provideMe(){
	  
	return new Promise(function(resolve,reject){
	  console.log("Processing...");
	   console.log("Waiting......");
		setTimeout(()=>{
	   console.log("Processed");
	   resolve("success!!!");
	   },2000);
	   console.log("Other code...");
		
	});
       
	   
   
   }
   
   async function caller(){
			p= await provideMe();
            
			console.log(p);
			
			console.log("Additional Code ....!!!!!!");
			console.log("More code...");
			/*p.then(
				(data)=>console.log("Data recieved::"+data),
				(error)=>console.log("error")
				);*/
	}
	
	caller();
	       
	
	