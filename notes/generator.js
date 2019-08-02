


    function* simple(){
	   yield 20;
	   console.log("LINE 3");
	   yield 30;
	   console.log("LINE 5");
	   yield 40;
	   console.log("LINE 7");
	}
	
	yields=simple();
	
	 for(i of yields )
		 console.log(i);
	