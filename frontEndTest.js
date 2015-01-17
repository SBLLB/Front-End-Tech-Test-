Frontend Developer Test
========================================================================
===== */
var yourName = 'Rachel Nolan',
dateCompleted = '18/01/2015';
//
========================================================================
=====
// 1) Define the function 'camelCase', which takes a string parameter
// for example 'your soul is mine', and returns 'yourSoulIsMine'
//

function camelCase(str) {
  var shortStr = str.replace(/(^[\s]+|[\s]+$)/g, '')
  return shortStr.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

 camelCase('your soul is mine');
 // -> 'yourSoulIsMine'
 camelCase(' Get over here! ');
 // -> 'getOverHere!'

========================================================================
=====
//
========================================================================
=====
// 2) Place the 'camelCase' function directly on the 'String' object so that:
//

String.prototype.camelCase = function () {
  var shortStr = this.replace(/(^[\s]+|[\s]+$)/g, '')
  return shortStr.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

 'your soul is mine'.camelCase()
 // -> 'yourSoulIsMine'
 ' Get over here! '.camelCase()
 // -> 'getOverHere!'
//
========================================================================
=====
// 3) The function 'masterSum' below can take any number of 'Integer' arguments
// and return the sum:
 function masterSum () {
 var result = 0;
 for (var i = 0; i < arguments.length; i++) {
 result += arguments[i];
 }
 return result;
 }
// Define a new function 'sum' that wraps around 'masterSum' and passes its
// arguments on to 'masterSum', so that
 sum(1,2,3,4,5,6);
 // -> 21
//
function sum(){
    return masterSum.apply(this, arguments);
}
========================================================================
=====
// 4) Rewrite the 'masterSum' function so it uses Array.prototype.reduce()
//
function masterSum () {
  return Array.prototype.reduce.call(arguments, function (memo, i) {
    return memo + i;
  }, 0);
}


========================================================================
=====
// 5) Given the following object what will the output logs be
//
========================================================================
=====
 var Hero = {
 hitPoints: 100,
 getLife: function () {
 return this.hitPoints;
 }
 };
 console.log(Hero.getLife());
 // a) -> ........... 
-> 100

 var LinksLife = Hero.getLife;
 console.log(LinksLife());
 // b) -> ............
-> undefined

========================================================================
=====
// 6) 5b is incorrect, use Function.prototype.bind to make it return the same
// result as 5a:
// console.log(Hero.getLife());
//
========================================================================
=====
// 7) The function 'bind' isn't available in older browsers create a shim for it
//
========================================================================
=====
//


