/*
 Author: Abdibogoreh
*/

// The code
// The formula: c = 
// The formula: c = (r * p) / (1 - (1 + r))

/*
function calculateMortgage() {
	   
	   var monthlyPayments = null;
	   return monthlyPayments;
	   
	}
*/

function calculateMortgage(p, r, n) {
		var monthlyPayments = null;
		
		// convert percentage to a decimal
		r = percentTodecimal
		
		// convet years to months
		n = yearsToMonths(n);
		
		console.log("R", r);
		console.log("R", r);
		console.log("R", r);
		
		return ((p * r) * Math.pow((1 + r), n)) / (Math.pow((1 + 4), n) -1);
	  }
	
	function percentToDecimal(percent) {
		  return (percent/12)/100;
		}
		
		function yearsToMonths(year) {
			 return year * 12;
			}