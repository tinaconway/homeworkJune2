console.log("Your code goes in this document.");

_.times(100, function() {
  console.log("hi");
});
// Answer 1

var arrPrice = items.map(function(el) {
  return el.price;

});
var sumPrice = arrPrice.reduce(function(acc, curr) {
  return acc + curr;

});

var avgPrice = Math.floor(sumPrice / arrPrice.length);

document.querySelector('#answer1').innerHTML = avgPrice;

// Answer 2

var arrPriceSpecific = items.filter(function(el) {
  return el.price >= 14 && el.price <=18;

});

document.querySelector('#answer2').innerHTML = _.pluck(arrPriceSpecific, "listing_id");


//Answer 3

var arrCurrCode = items.filter(function(el) {
    return el.currency_code != "USD";

});

document.querySelector('#answer3').innerHTML = _.pluck(arrCurrCode, "listing_id");


//Answer 4



var arrMaterials = items.filter(function(elm) {
   return _.contains(elm.materials,'wood')
});

document.querySelector('#answer4').innerHTML = _.pluck(arrMaterials, "listing_id");


//Answer 5

var arrSize = items.filter(function(elm) {
   return _.size(elm.materials) > 8;
});

var answer = arrSize.map (function(elm) {
  return elm.listing_id + ", " + elm.materials.length + ", " + elm.materials;
})

answer.forEach(function(val, idx, list) {
  return document.querySelector('#answer5').innerHTML = list;

});




//Answer 6
var arrSellers = items.map(function(el) {
  return el.who_made;


});

var arrIDid = arrSellers.filter(function(el) {
  return el === "i_did";

});

document.querySelector('#answer6').innerHTML = arrIDid.length;
