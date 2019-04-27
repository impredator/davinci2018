// 1. What would be the output of following code ?
function getDataFromServer(apiUrl){
    var name = "John";
	return {
		then : function(fn){
			fn(name);
		}
	}
}

getDataFromServer('www.google.com').then(function(name){
	console.log(name);
});

// John
// undefine
// Reference Error
// fn is not defined
// John

// 2. What would be the output of following code ?
(function(){
	var arrayNumb = [2, 8, 15, 12, 23, 2];
	Array.prototype.sort = function(a,b){
		return a - b;
	};
	arrayNumb.sort();
	console.log(arrayNumb);
})();
// [2, 8, 15, 12, 23, 2]
// this is not working, because sort accept comparable callback as parameters, which is not acceptable
// think:
// Object.defineProperty(Array.prototype, 'sortf', {
//     value: function(compare) { return [].concat(this).sort(compare); }
// });

// The .sort() callback must return a number, not a boolean. The return value should be:
//   a negative number if the first element should go before the second;
//   a positive number if the first element should go after the second;
//   zero if the two elements are ordered the same.

(function(){
	var numberArray = [2, 8, 15, 16, 23, 42];
	numberArray.sort(function(a,b){
		if(a == b){
			return 0;
		}else{
			return a < b ? -1 : 1;
		}
	});
	console.log(numberArray);
})();

(function(){
	var numberArray = [2, 8, 15, 16, 23, 42];
	numberArray.sort(function(a,b){
		return a-b;
	});
	console.log(numberArray);
})();

// [ 2, 8, 15, 16, 23, 42 ] [ 2, 8, 15, 16, 23, 42 ] [ 2, 8, 15, 16, 23, 42 ]
// undefined undefined undefined
// [42, 23, 16, 15, 8, 2] [42, 23, 16, 15, 8, 2] [42, 23, 16, 15, 8, 2]
// Reference Error
// 1) [ 2, 8, 15, 16, 23, 42 ] [ 2, 8, 15, 16, 23, 42 ] [ 2, 8, 15, 16, 23, 42 ]
