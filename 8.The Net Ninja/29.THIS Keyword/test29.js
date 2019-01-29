var myCar2 = {
				maxSpeed: 70, 
				driver: "Net Ninja", 
 				drive: function(speed, time) {
 				console.log(speed * time);
 				   },
 			    test: function(){
 			    	console.log(this);
 			    },
 			    logDriver: function(){
 			    	console.log("drive name is " + this.driver);
 			    }
 			};

myCar2.logDriver();
console.log(myCar2.maxSpeed);
myCar.drive(50, 3);