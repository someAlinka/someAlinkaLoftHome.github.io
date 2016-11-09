var allNumbers = [1, 2, 4, 5, 6, 7, 8],
	someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
	noNumbers = ['это', 'массив', 'без', 'чисел'];

function isSomeTrue (source, filterFn) {
	try{
		if(!source.length) {
			throw new Error("Пустой массив!!! Oбратитесь к администратору, ему скучно :)");
		}else{
			for (var i = 0; i < source.length; i++) {
				if(filterFn(source[i])) return true;
			}
		}
		return false;
	}catch(e){
		return e.message;
	}
}

function isNumber(val) {
  return typeof val === 'number';
}



console.log(isSomeTrue(allNumbers, isNumber)); //вернет true

console.log(isSomeTrue(someNumbers, isNumber)); //вернет true

console.log(isSomeTrue(noNumbers, isNumber)); //вернет false

console.log(isSomeTrue([], isNumber)); //вернет сообщение исключения