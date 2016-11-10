var allNumbers = [1, 2, 4, 5, 6, 7, 8],
	someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
	noNumbers = ['это', 'массив', 'без', 'чисел'];

function isAllTrue (source, filterFn) {
	
	if(!source.length)
		throw new Error("Пустой массив!!! Oбратитесь к администратору, ему скучно :)");

	for (var i = 0; i < source.length; i++) {
		if(!filterFn(source[i])) return false;
	}
	
	return true;
}

function isNumber(val) {
  return typeof val === 'number';
}


try{

	console.log(isAllTrue(allNumbers, isNumber)); //вернет true

	console.log(isAllTrue(someNumbers, isNumber)); //вернет false

	console.log(isAllTrue(noNumbers, isNumber)); //вернет false

	console.log(isAllTrue([], isNumber)); //вернет сообщение исключения

}catch(e){
	console.log( e.message );
}