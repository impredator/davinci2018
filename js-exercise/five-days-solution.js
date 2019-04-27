=========================================
=================DAY ONE=================
=========================================
Question 1
The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1]
Solution
function removeSmallest(nums){
  if(!nums){
    return [];
  }
  var smallest = Math.min.apply(null,nums);
  nums.splice(nums.indexOf(smallest),1);
  return nums;
}
Question 2
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

Examples:
Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

Input
A word (string) of length 0 < str < 1000

Output
The middle character(s) of the word represented as a string.

Solution
function getMiddle(s)
{
  if(s.length == 1){
    return s;
  }

  if(s.length % 2 == 0){
    return s.substr((s.length-2)/2,2);
  }

 if(s.length % 2 != 0){
    return s.substr((s.length-1)/2,1);
  }
}
Question 3
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
Solution
var uniqueInOrder=function(iterable){
  var result = [];

  if(iterable.length == 0){
    return result;
  }
  result.push(iterable[0]);
  Array.prototype.reduce.call(iterable,function(a,b){
    if(a !== b){
      result.push(b);
    }
    return b;
  },result[0]);

  return result;
}
Question 4
The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("

function duplicateEncode(word){
   var hash = {};
   var result = [];
   word.split('').forEach(function(item,index){
     var item = item.toLowerCase();
     if(hash[item]){
       result[hash[item].lastIndex] = ')';
       result.push(')');
     }
     else{
       result.push('(');
     }
     hash[item] = {lastIndex: index};
   });

   return result.join("");
}
Question 5
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

function list(names){
  var result = "";
  var length = names.length;
  if(length  == 0){
    return result;
  }

  if(length == 1){
    return names[0].name;
  }

  if(length == 2){
    return names[0].name  + " & " + names[1].name;
  }

  names.forEach(function(item,index){
    if(index == length - 2){
      result += item.name + " ";
    }
    else if(index == length - 1){
      result += '& ' + item.name;
    } else {
      result += item.name + ", ";
    }
  });

  return result;

}

=========================================
=================DAY TWO=================
=========================================
Question 1
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

Solution
function getCount(str) {
  var vowelsCount = 0;

  var hash = {
    a:{},
    e:{},
    i:{},
    o:{},
    u:{}
  };

  var strArr = str.toLowerCase().split("");
  strArr.forEach(function(item){
    if(hash[item]){
      vowelsCount += 1;
    }
  });
  return vowelsCount;
}
Question 2
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

function addBinary(a,b) {
  return Math.floor(a+b).toString(2);
}
Question 3
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

DNAStrand ("ATTGC") # return "TAACG"

DNAStrand ("GTAT") # return "CATA"
Solution
function DNAStrand(dna){
  return [].map.call(dna,function(prev,next){
    switch(prev){
      case 'A':
        return 'T';
      case 'T':
        return 'A';
      case 'C':
        return 'G';
      case 'G':
        return 'C';
    }
  }).join('');
}
Question 4
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

Solution
function spinWords(words){

  var wordsArr = words.split(" ").map(function(item){
    if(item.length >= 5){
      return item.split("").reverse().join("");
    }
    return item
  });

  return wordsArr.join(" ");
}
Question 5
Your task is to make a function that can take any non-negative integer as a argument and return it with it's digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 1254859723 Output: 9875543221

Solution
function descendingOrder(n){
  var strNumArr = n.toString().split("");
  var strResult = strNumArr.sort(function(a,b){
    return b - a
  }).join("");
  return parseInt(strResult);
}

=========================================
================DAY THREE================
=========================================
Question 1
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1,1,1] as a starting input (AKA signature), we have this sequence:

[1,1,1,3,5,9,17,31,...]

But what if we started with [0,0,1] as a signature? As starting with [0,1] instead of [1,1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0,0,1,1,2,4,7,13,24,...]

Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n==0, then return an empty array and be ready for anything else which is not clearly specified ;)

If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

[Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]

function tribonacci(signature,n){
  if(n < 3){
    return signature.slice(0,n);
  }

  var result = signature;
  for(var i = 2; i < n-1; i++){
    result.push(result[i - 2] + result[i - 1] + result[i]);
  }

  return result;
}
Question 2
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
Solution
function persistence(num) {
   if(num < 10){
     return 0;
   }

   if(num >= 10 && num < 25){
     return 1;
   }

   if(num % 10 == 0){
     return 1;
   }

   var count = 0;
   var numberArr = num.toString().split('');
   function multiple(numberArr){
      return numberArr.reduce(function(a,b){
       return a*b;
     });
   }
   while(numberArr.length > 1){
     var num =  multiple(numberArr);
     numberArr = num.toString().split('');
     count++;
   }
   return count;
}
Question 3
Is Prime
Define a function isPrime that takes one integer argument and returns true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Example
isPrime(5)
=> true

Assumptions
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers.
function isPrime(num) {

  if(num > 1){
    for(var i = 2, sqrt = Math.sqrt(Math.abs(num)); i <= sqrt; i++ )
    {
      if(num % i == 0){
        return false;
      }
    }
    return true;
  }

  return false;
}
Question 4
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

eg:

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
Solution
function validatePIN (pin) {
  //return true or false
  var reg = /^(\d{4}|\d{6})$/;
  return reg.test(pin);
};
Question 5
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

Examples:

// returns "theStealthWarrior"
toCamelCase("the-stealth-warrior")

// returns "TheStealthWarrior"
toCamelCase("The_Stealth_Warrior")
Solution
function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}

=========================================
================DAY FOUR=================
=========================================
Question 1
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

Solution
var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXWZ";
var cipher   = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXWZABCDEFGHIJKLM";

function rot13(message){
  return message.split('').map(function(c) {
    var i = alphabet.indexOf(c);
    if (i < 0) {
      // not in alphabet, return char
      return c;
    }

    return cipher[i];
  }).join('');
}
Question 2
We want to create a function that will add numbers together when called in succession.

add(1)(2);
// returns 3

We also want to be able to continue to add numbers to our chain.

add(1)(2)(3); // 6
add(1)(2)(3)(4); // 10
add(1)(2)(3)(4)(5); // 15

and so on.

A single call should return the number passed in.

add(1); // 1

We should be able to store the returned values and reuse them.

var addTwo = add(2);
addTwo; // 2
addTwo + 5; // 7
addTwo(3); // 5
addTwo(3)(5); // 10

We can assume any number being passed in will be valid whole number.

Solution
function add(n){
  var fn = function(x){
    return add(n + x);
  }
  fn.valueOf = function(){
    return n;
  }

  return fn;
}
Question 3
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
Solution
function cakes(recipe, available) {
  var ingredients = [];
  for(var recipeItem in recipe){
    if(typeof available[recipeItem] === 'undefined'){
      return 0;
    }
    ingredients.push(Math.floor(available[recipeItem]/recipe[recipeItem]));
  }
  return ingredients.sort(function(a,b){return a - b;})[0];
}
Question 4
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
Solution
snail = function(array) {
  var result = null;
  while(array.length){
    result = (result ? result.concat(array.shift()) : array.shift());
    for(var i = 0; i < array.length; i++){
      result.push(array[i].pop());
    }
    result = result.concat((array.pop() || []).reverse());
    for(var i = array.length - 1; i >= 0; i--){
      result.push(array[i].shift());
    }
  }
  return result;
}
Question 5
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

#Example 1: a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

#Example 2: a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Solution
function inArray(array1,array2){
  return array1.filter(function(item){
    return array2.some(function(arr2item){
      return arr2item.includes(item);
    });
  }).sort();
}

=========================================
================DAY FIVE=================
=========================================
Question 1
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'

Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

Remember that there can't be more than 3 identical symbols in a row.

More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

Solution
function solution(number){
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,
               X:10,IX:9,V:5,IV:4,I:1}
  var romanStr = "";
  for(var i in lookup){
    while(number >= lookup[i]){
      romanStr += i;
      number -= lookup[i];
    }
  }
  return romanStr;
}
Question 2
The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)

depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(m) verifying F(m) * F(m+1) = prodyou will return

[F(m), F(m+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)

F(m) being the smallest one such as F(m) * F(m+1) > prod.

Examples
productFib(714) # should return [21, 34, true],
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return [34, 55, false],
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55

Notes: Not useful here but we can tell how to choose the number n up to which to go: we can use the "golden ratio" phi which is (1 + sqrt(5))/2 knowing that F(n) is asymptotic to: phi^n / sqrt(5). That gives a possible upper bound to n.

Solution
function productFib(prod){
  var a = 0;
  var b = 1;

  while(a*b < prod){
     var temp = a + b;
     a = b;
     b = temp;
  }
  return [a,b, a*b === prod];
}
Question 3
Write a function called validBraces that takes a string of braces, and determines if the order of the braces is valid. validBraces should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces four new characters. Open and closed brackets, and open and closed curly braces. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of open parentheses '(' , closed parentheses ')', open brackets '[', closed brackets ']', open curly braces '{' and closed curly braces '}'.

What is considered Valid? A string of braces is considered valid if all braces are matched with the correct brace. For example: '(){}[]' and '([{}])' would be considered valid, while '(}', '[(])', and '[({})](]' would be considered invalid.

Examples: validBraces( "(){}[]" ) => returns true validBraces( "(}" ) => returns false validBraces( "[(])" ) => returns false validBraces( "([{}])" ) => returns true

Solution
function validBraces(braces){
   var reg = /\(\)|\{\}|\[\]/g;
   while(reg.test(braces)){
     braces = braces.replace(reg,"");
   }

   return !braces.length;
}
