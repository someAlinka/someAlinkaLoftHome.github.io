let array = [1, , 3, 4, 5, 6];

function forEach (arr, callback) {
	if(!arr.length) throw new Error("пустой массив");
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] != undefined) callback(arr[i], i, arr);
	};
}

function filter (arr, callback) {
	if(!arr.length) throw new Error("пустой массив");
	var resArr = [];
	for (var i = 0; i < arr.length; i++) {
		if(callback(arr[i], i, arr)){
			resArr[resArr.length] = arr[i];
		}
	}
	return resArr;
}

function map (arr, callback) {
	if(!arr.length) throw new Error("пустой массив");
	var resArr = [];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] != undefined) resArr[i] = callback(arr[i], i, arr);
	}
	return resArr;
}


function slice (arr, start = 0, end) {
	if(!arr.length) throw new Error("пустой массив");
	start = (start > arr.length)? arr.length : start;
	start = (start < 0)? arr.length-(-start) : start;
	var resArr = [];
	end = (end)? end : arr.length;
	for (var i = start, j = 0; i < end; i++, j++) {
		resArr[j] = arr[i];
	};
	return resArr;
}

function reduce (arr, callback, initialValue) {
	if(!arr.length && initialValue === undefined) throw new Error("пустой массив и пустой initialValue");
	if(arr.length == 1 && initialValue === undefined) return arr[0];
	if(!arr.length && initialValue !== undefined) return initialValue;

	var res = 0, k = 1;
	if(initialValue !== undefined && arr[0] !== undefined){
		res = callback(initialValue, arr[0], 0, arr);
	}else if(arr[0] !== undefined && arr[1] !== undefined){
		res = callback(arr[0], arr[1], 1, arr);
		k++;
	}

	for (; k < arr.length; k++) {
		if(arr[k] !== undefined ) res = callback(res, arr[k], k, arr);
	};
	return res;
}


function splice (start, deleteCount, ...insertItems) {
	if(!deleteCount && !insertItems.length) return [];
	if(!array.length && insertItems.length) {
		array = insertItems;
		return [];
	}
	start = (start > array.length)? array.length : start;
	start = (start < 0)? array.length-(-start) : start;

	var resArr = [];
	var resDelete = [];

	if(deleteCount){	//удаление элементов массива
		for (var i = 0, j = 0, k = 0; i < array.length; i++) {
			if(i >= start && i <= deleteCount+start-1){
				if(array[i] !== undefined) resDelete[k] = array[i];
				k++;
				continue;
			}
			if(array[i] !== undefined) resArr[j] = array[i];
			j++;

		};
		array = resArr;
	}

	if(insertItems.length){ // запись новых элементов массива
		resArr = [];
		for (var i = 0, j = 0; i < array.length+1; i++) {
			if(i == start ){
				for (var k = 0; k < insertItems.length; k++) {
					resArr[j] = insertItems[k];
					j++;
				}
			}
			if(array[i] !== undefined) resArr[j] = array[i];
			j++;
		};
	}
	array = resArr;
	return resDelete;
}



try{
	/*console.log("forEach ___________________________");
	forEach(array, item => console.log(item));

	console.log("filter ___________________________");
	let greaterThan4 = filter(array, item => item > 4);
	console.log(greaterThan4);

	console.log("map ___________________________");
	let sqare = map(array, item => item*item);
	console.log(sqare);

	console.log("slice___________________________");
	var a = [1, 2, 3, 4, 5];
	console.log(a.slice(-1));
	console.log(slice(a,-1));
*/
	console.log("reduce___________________________");
	console.log(reduce(array, callbackForReduce, 20));
	function callbackForReduce(previousValue, currentValue, index, array){
		return previousValue + currentValue;
	}
	console.log(array.reduce(callbackForReduce, 20));
	/*
	console.log("splice___________________________");
	var myFish = array;
	var removed1 = splice(-2, 1, 'hi',null, 6.4, undefined, Infinity);
	console.log(array);
	console.log(removed1);
	console.log('____________________________');

	var removed = myFish.splice(-2, 1, 'hi',null, 6.4, undefined, Infinity);
	console.log(myFish);
	console.log(removed);
*/
}catch(e){
	console.log(e.message);
}