
function calculator (firstNumber) {
	function action(arg, str ){
		var temp = firstNumber;
		for (var i = 0; i < arg.length; i++) {
			switch(str){
				case "+":
					temp += arg[i];
					break;
				case "-":
					temp -= arg[i];
					break;
				case "/":
					if(!arg[i]) throw new Error("В школе говорили, что на ноль делить нельзя, значит и мы не будем");
					temp /= arg[i];
					break;
				case "*":
					temp *= arg[i];
					break;
			}
		};
		return temp;
	}
	var resObj = {
		sum: function(){
			return action(arguments, "+");
		},
		dif: function(){
			return action(arguments, "-");
		},
		div: function(){
			return action(arguments, "/");
		},
		mul: function(){
			return action(arguments, "*");
		}
	}
	return resObj;
}

var myCalculator = calculator(100);

try{

	console.log(myCalculator.sum(1, 2, 3)); //вернет 106

	console.log(myCalculator.dif(10, 20)); //вернет 70

	console.log(myCalculator.div(0, 2)); //вернет 25

	console.log(myCalculator.mul(2, 2)); //вернет 400

	console.log(myCalculator.mul()); //вернет 100

}catch(e){
	console.log(e.message);
}