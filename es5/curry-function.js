//Addition
function add(a, b, c) {
  return a + b + c;
}

var _add = createCurry(add);
console.log(_add(1)(2)(3));

_add = createCurry(add);
console.log(_add(1,2)(3));

_add = createCurry(add);
console.log(_add(1)(2,3));

_add = createCurry(add);
console.log(_add(1,2,3));

//Map
function _map(func, array) {
  return array.map(func);
}

var _getNewArray = createCurry(_map);

var getNewArray = _getNewArray(function (item) {
  return item * 100 + '%'
})

getNewArray([1, 2, 3, 0.12]);   // ['100%', '200%', '300%', '12%'];
getNewArray([0.01, 1]); // ['1%', '100%']

function _filter(func, array) {
  return array.filter(func);
}

var _find = createCurry(_filter);

var findNumber = _find(function (item) {
  if (typeof item == 'number') {
    return item;
  }
})

findNumber([1, 2, 3, '2', '3', 4]); // [1, 2, 3, 4]

// 当我们继续封装另外的过滤操作时就会变得非常简单
// 找出数字为20的子项
var find20 = _find(function (item, i) {
  if (typeof item === 20) {
    return i;
  }
})
find20([1, 2, 3, 30, 20, 100]);  // 4

// 找出数组中大于100的所有数据
var findGreater100 = _find(function (item) {
  if (item > 100) {
    return item;
  }
})
findGreater100([1, 2, 101, 300, 2, 122]); // [101, 300, 122]
