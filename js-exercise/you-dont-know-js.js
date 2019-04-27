if (!("a" in window)) {
    var a = 1;
}
alert(a);
// 1

var a = 1,
    b = function a(x) {
        x && a(--x);
    };
alert(a);
// 1

function a(x) {
    return x * 2;
}
var a;
alert(a);
// function a(x) { return x*2 }

function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);
// 10

function a() {
    alert(this);
}
a.call(null);
// [object Window]
