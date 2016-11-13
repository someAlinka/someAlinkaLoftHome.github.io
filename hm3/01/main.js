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


function slice (arr, start = 0, end) {
	if(!arr.length) throw new Error("пустой массив");
	var resArr = [];
	end = (end)? end : arr.length;
	for (var i = start, j = 0; i < end; i++, j++) {
		resArr[j] = arr[i];
	};
	return resArr;
}

function reduce (arr, callback, initialValue) {
	var resArr = [];
	for(var i = 0, j = 0; i < arr.length; i++){ // запись нового массива без пустых значений
		if(arr[i] === 0 || arr[i]){
			resArr[j] = arr[i];
			j++;
		}
	}
	if(!resArr.length && initialValue === undefined) throw new Error("пустой массив и пустой initialValue");

	if(resArr.length == 1 && initialValue === undefined){
		return resArr[0];
	}

	if(!resArr.length && initialValue != undefined){
		return initialValue;
	}

	var res = 0;
	for (var k = 0; k < resArr.length; k++) {
		if(!k){
			if(initialValue != undefined){
				res = callback(initialValue, resArr[k]);
			}else{
				res = callback(resArr[0], resArr[1]);
				k++;
			}
		}else{
			res = callback(res, resArr[k]);
		}
	};
	return res;
}


function splice (start, deleteCount, ...insertItems) {
	if(!deleteCount && !insertItems.length) return [];
	if(!array.length && insertItems.length) {
		array = insertItems
		return [];
	}
	start = (start > array.length)? array.length : start;
	start = (start < 0)? array.length-(-start) : start;

	var resArr = [];
	var resDelete = [];

	if(deleteCount){	//удаление элементов массива
		for (var i = 0, j = 0, k = 0; i < array.length; i++) {
			if(i >= start && i <= deleteCount+start-1){
				resDelete[k] = array[i];
				k++;
				continue;
			}
			resArr[j] = array[i];
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
			if(array[i] == undefined) continue;
			resArr[j] = array[i];
			j++;
		};
	}
	array = resArr;

	return resDelete;
}



try{
	console.log("forEach ___________________________");
	forEach(array, item => console.log(item));


	console.log("filter ___________________________");
	let greaterThan4 = filter(array, item => item > 4);
	console.log(greaterThan4);


	console.log("map ___________________________");
	let sqare = map(array, item => item*item);
	console.log(sqare);


	console.log("slice___________________________");
	console.log(slice(array, 1, 4));


	console.log("reduce___________________________");
	console.log(reduce(array, callbackForReduce, 0));
	function callbackForReduce(previousValue, currentValue, index, array){
		return previousValue + currentValue;
	}


	console.log("splice___________________________");
	console.log(splice(-3, 60, 9 , 9 , 9));
	console.log(array);

}catch(e){
	console.log(e.message);
}