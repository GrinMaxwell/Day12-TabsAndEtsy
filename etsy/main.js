//1

var totalPrice = items.reduce(function(sum, item) {
  sum += item.price;
  return sum;
},0);
var avg = totalPrice/(items.length);
document.querySelector('.p1').innerText = avg;


//2
var teens = items.filter(function(item) {
  if (18 > item.price && item.price > 14) {
    return true;
  }
}).map(function(item) {
  return item.title;
});
document.querySelector('.p2').innerText = teens;
//3
var brit = items.filter(function (item) {
  if (item.currency_code === 'GBP') {
    return true;
  }
});
document.querySelector('.p3').innerText = brit[0].title +' costs '+brit[0].price+' pounds.';

//4
var wood = items.filter(function (item) {
  for (var i = 0; i < item.materials.length; i++) {
    if (item.materials[i] === 'wood') {
      return true;
    }
  }
}).map(function(item) {
  return item.title;
});
document.querySelector('.p4').innerText = wood;
//5
var manyMat = items.filter(function(item) {
  if (item.materials.length >= 8) {
    return true;
  }
}).map(function(item) {
  return item.title + ' has '+item.materials.length+' materials: '+item.materials;
});
document.querySelector('.p5').innerText = manyMat;
//6
var selfMade = items.filter(function (item) {
  if (item.who_made === 'i_did') {
    return true;
  }
}).length;
document.querySelector('.p6').innerText = selfMade +' items were made by their sellers.';
