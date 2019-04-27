// 1. What would be the output of following code ?
function passWordMngr() {
	var password = '12345678';
	this.userName = 'John';
	return {
		pwd: password
	};
}
// Block End
var userInfo = passWordMngr();
console.log(userInfo.pwd);
console.log(userInfo.userName);

// 12345678 Window
// 12345678 John
// 12345678 undefined
// undefined undefined
// Answer: 3) 12345678 undefined

// 2. What would be the output of following code ?
var employeeId = 'aq123';
function Employee() {
  this.employeeId = 'bq1uy';
}
console.log(Employee.employeeId);

// Reference Error
// aq123
// bq1uy
// undefined
// Answer: 4) undefined

// 3. What would be the output of following code ?
var employeeId = 'aq123';

function Employee() {
	this.employeeId = 'bq1uy';
}
console.log(new Employee().employeeId);
Employee.prototype.employeeId = 'kj182';
Employee.prototype.JobId = '1BJKSJ';
console.log(new Employee().JobId);
console.log(new Employee().employeeId);

// bq1uy 1BJKSJ bq1uy undefined
// bq1uy 1BJKSJ bq1uy
// bq1uy 1BJKSJ kj182
// undefined 1BJKSJ kj182
// Answer: 2) bq1uy 1BJKSJ bq1uy

// 4. What would be the output of following code ?
var employeeId = 'aq123';
(function Employee() {
	try {
		throw 'foo123';
	} catch (employeeId) {
		console.log(employeeId);
	}
	console.log(employeeId);
}());

// foo123 aq123
// foo123 foo123
// aq123 aq123
// foo123 undefined
// Answer: 1) foo123 aq123
