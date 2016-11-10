let array = [1, 2, 3, 4, 5, 6];

function forEach (arr, callback) {
	if(!arr.length) throw new Error("пустой массив");
	for (var i = 0; i < arr.length; i++) {
		callback(arr[i]);
	};
}

function filter (arr, callback) {
	if(!arr.length) throw new Error("пустой массив");
	var resArr = [],
		count = 0;
	for (var i = 0; i < arr.length; i++) {
		if(callback(arr[i])){
			resArr[count] = arr[i];
			count++;
		}
	}
	return resArr;
}

function map (arr, callback) {
	if(!arr.length) throw new Error("пустой массив");
	var resArr = [];
	for (var i = 0; i < arr.length; i++) {
		resArr[i] = callback(arr[i]);
	}
	return resArr;
}




try{
	forEach(array, item => console.log(item));

	console.log("___________________________");

	let greaterThan4 = filter(array, item => item > 4);
	console.log(greaterThan4);

	console.log("___________________________");

	let sqare = map(array, item => item*item);
	console.log(sqare);

	console.log("___________________________");
}catch(e){
	console.log(e.message);
}