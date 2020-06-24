// ============= CONVERT CURRENCY FROM JSON ==================
var currencyRates = {
  "rates" : [
    {
      "USD": 1,
      "EUR": 0.89,
      "GBP": 0.80

    }
  ]
}
console.log(currencyRates);
var featuredProducts = {
  "featured-products" : [
    {
        "id": "1",
        "product.title": "Smart Watch",
        "product.price": 19.99,
        "product.discount": false,
        "product.discount-price": ""
    },
    {
       "id": "2",
       "product.title": "2020 Minimalist Ultra Thin Watch",
       "product.price": 29.99,
       "product.discount": true,
       "product.discount-price": 19.99
    },
    {
      "id": "3",
      "product.title": "CRRJU Fashion Mens Watches",
      "product.price": 19.99,
      "product.discount": false,
      "product.discount-price": ""
    },
    {
      "id": "4",
      "product.title": "SKMEI Fashion Outdoor Sport Watch",
      "product.price": 29.99,
      "product.discount": false,
      "product.discount-price": ""
    }]
}
//var feaProductObject = JSON.parse(featuredProducts);
console.log(featuredProducts);
// function convertUsdToEur() {
//     var price = document.getElementById("currency-value").innerHTML;
//     price = Number;
//     var convert = (price * currencyRates.rates[0].EUR);
//     price.innerHTML = (convert);
// }

// fetch("http://localhost:60821/api/currency")
//   .then((resp) => resp.json())
//   .then((data) => currency = console.log(data.currency))
//   .then(convertUsdToEur())
//   .then(convertUsdToGbp())

// ================= API CALL FOR CURRENCY CONVERT =================

//const fx = require("./money.min")

// let demo = () => {
//   let rate = fx.convert(12.99, {from: "GBP", to: "USD"});
//   console.log("£12.99 = $" + rate.toFixed(4))
  // let rate = fx(1).from("GBP").to("USD")
  //console.log("£1 = $" + rate.toFixed(4))
// }

// fetch('https://api.exchangeratesapi.io/latest')
//   .then((resp) => resp.json())
//   .then((data) => fx.rates = data.rates)
//   .then(demo)
// =================== CURRENCY DROPDOWN AND CHANGE =======================

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("currency-dropdown");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

// ================= currency add icon ================
function addIconCurrency() {
  let selectedItems = document.getElementsByClassName("select-selected");
    for(let i = 0;i < selectedItems.length;i++) {
      if(selectedItems[i].innerHTML.includes("EUR")) {
        selectedItems[i].classList.add("eur");
        selectedItems[i].classList.remove("usd");
        selectedItems[i].classList.remove("gbp");
      }
      else {
        selectedItems[i].classList.remove("eur");
      }
      if(selectedItems[i].innerHTML.includes("USD")) {
        selectedItems[i].classList.add("usd");
        selectedItems[i].classList.remove("eur");
        selectedItems[i].classList.remove("gbp");
      }
      else {
        selectedItems[i].classList.remove("usd");
      }
      if(selectedItems[i].innerHTML.includes("GBP")) {
        selectedItems[i].classList.add("gbp");
        selectedItems[i].classList.remove("usd");
        selectedItems[i].classList.remove("eur");
      }
      else {
        selectedItems[i].classList.remove("gbp");
      }
    }
addIconCurrencyStart(); 
}
addIconCurrency();

function addIconCurrencyStart() {
  var selectItems = document.body.children[0].children[1].children[0].children[0].children[0].children[2].children;
    for(let i = 0;i < selectItems.length;i++) {
      if(selectItems[i].innerHTML.includes("EUR")) {
        selectItems[i].classList.add("eur-js");
      }
      else {
        //selectItems[i].classList.remove("eur");
      }
      if(selectItems[i].innerHTML.includes("USD")) {
        selectItems[i].classList.add("usd-js");
      }
      else {
        //selectItems[i].classList.remove("usd");
      }
      if(selectItems[i].innerHTML.includes("GBP")) {
        selectItems[i].classList.add("gbp-js");
      }
      else {
        //selectItems[i].classList.remove("gbp");
      }
    } 
}
addIconCurrencyStart();
// ======================  CONVERTING PRODUCT PRICE ==================
var dropdownEuro = document.body.children[0].children[1].children[0].children[0].children[0].children[2].children[0];
var dropdownGbp = document.body.children[0].children[1].children[0].children[0].children[0].children[2].children[1];
var dropdownUsd = document.body.children[0].children[1].children[0].children[0].children[0].children[2].children[2];
// ===========================
// USD TO EURO and GBP TO EURO
const convertUsdToEur = () => {
  var productPrice = 19.99;
  var price = Number(document.getElementById("currency-value").innerHTML);
  var priceDiv = document.getElementById("currency-value");
  var currencySign = document.getElementById("currency-sign").innerHTML;
  var currencySpan = document.getElementById("currency-sign");

  if(currencySign.includes("$")) {
    currencySpan.innerHTML = "€ ";
    parseFloat(price).toFixed(2);
    var convertedUsdToEur = parseFloat(price * currencyRates.rates[0].EUR).toFixed(2);
    priceDiv.innerHTML = convertedUsdToEur;
  }
  // preventing when u convert usd to eur, so it euro can't convert again on the same button(div)
  else if(currencySign.includes("€")) {
    return 0;
  }
}
const convertGbpToEur = () => {
  var productPrice = 19.99;
  var price = Number(document.getElementById("currency-value").innerHTML);
  var priceDiv = document.getElementById("currency-value");
  var currencySign = document.getElementById("currency-sign").innerHTML;
  var currencySpan = document.getElementById("currency-sign");

  if(currencySign.includes("£")) {
    currencySpan.innerHTML = "€ ";
    parseFloat(price).toFixed(2);
    var convertedGbpToEur = parseFloat(productPrice * currencyRates.rates[0].EUR).toFixed(2);
    priceDiv.innerHTML = convertedGbpToEur;
  }
  // preventing when u convert usd to eur, so it euro can't convert again on the same button(div)
  else if(currencySign.includes("€")) {
    return 0;
  }
} 

dropdownEuro.addEventListener('click',() => {    
    convertUsdToEur();
    convertGbpToEur();    
});
// ==========================
// EURO TO GBP and USD TO GBP
const convertEurToGbp = () => {
  var productPrice = 19.99;
  var price = Number(document.getElementById("currency-value").innerHTML);
  var priceDiv = document.getElementById("currency-value");
  var currencySign = document.getElementById("currency-sign").innerHTML;
  var currencySpan = document.getElementById("currency-sign");

  if(currencySign.includes("€")) {
    currencySpan.innerHTML = "£ ";
    parseFloat(price).toFixed(2);
    var convertedEurToGbp = parseFloat(productPrice * currencyRates.rates[0].GBP).toFixed(2);
    priceDiv.innerHTML = convertedEurToGbp;
  }
  // preventing when u convert eur to gbp, so it gbp can't convert again on the same button(div)
  else if(currencySign.includes("£")) {
    return 0;
  }
}
const convertUsdToGbp = () => {
  var productPrice = 19.99;
  var price = Number(document.getElementById("currency-value").innerHTML);
  var priceDiv = document.getElementById("currency-value");
  var currencySign = document.getElementById("currency-sign").innerHTML;
  var currencySpan = document.getElementById("currency-sign");

  if(currencySign.includes("$")) {
    currencySpan.innerHTML = "£ ";
    parseFloat(price).toFixed(2);
    var convertedUsdToGbp = parseFloat(productPrice).toFixed(2);
    priceDiv.innerHTML = convertedUsdToGbp;
  }
  // preventing when u convert eur to gbp, so it gbp can't convert again on the same button(div)
  else if(currencySign.includes("£")) {
    return 0;
  }
}
dropdownGbp.addEventListener('click',() => {    
  convertEurToGbp();
  convertUsdToGbp();    
});
// gbp to euro

// gbp to usd
const convertGbpToUsd = () => {
  var productPrice = 19.99;
  var price = Number(document.getElementById("currency-value").innerHTML);
  var priceDiv = document.getElementById("currency-value");
  var currencySign = document.getElementById("currency-sign").innerHTML;
  var currencySpan = document.getElementById("currency-sign");

  if(currencySign.includes("£")) {
    currencySpan.innerHTML= "$ ";
    parseFloat(price).toFixed(2);
    var convertedGbpToUsd = parseFloat(productPrice).toFixed(2);
    priceDiv.innerHTML = convertedGbpToUsd;
  }
  else if(currencySign.includes("$")) {
    return 0;
  }
}
// eur to usd
const convertEurToUsd = () => {
  var productPrice = 19.99;
  var price = Number(document.getElementById("currency-value").innerHTML);
  var priceDiv = document.getElementById("currency-value");
  var currencySign = document.getElementById("currency-sign").innerHTML;
  var currencySpan = document.getElementById("currency-sign");

  if(currencySign.includes("€")) {
    currencySpan.innerHTML= "$ ";
    parseFloat(price).toFixed(2);
    var convertedEurToUsd = parseFloat(productPrice).toFixed(2);
    priceDiv.innerHTML = convertedEurToUsd;
  }
  else if(currencySign.includes("$")) {
    return 0;
  }
} 

dropdownUsd.addEventListener('click',() => {    
    convertGbpToUsd();
    convertEurToUsd();    
});

// dropdownUsd.addEventListener("click",convertGbpToUsd())

// function convertGbpToUsd() {
//   if(currencySign.includes("£")) {
//     currencySpan.innerHTML("$");
//     parseFloat(price).toFixed(2);
//     var convertedGbpToUsd = parseFloat(productPrice).toFixed(2);
//     priceDiv.innerHTML = convertedGbpToUsd;
//   }
//   else if(currencySign.includes("$")) {
//     return 0;
//   }
// }
// // eur to usd 
// function convertEurToUsd() {
//   if(currencySign.includes("€")) {
//     currencySpan.innerHTML("$");
//     parseFloat(price).toFixed(2);
//     var convertedEurToUsd = parseFloat(productPrice).toFixed(2);
//     priceDiv.innerHTML = convertedEurToUsd;
//   }
//   else if(currencySign.includes("$")) {
//     return 0;
//   }
// }
// ================ convert dollar to euro (sign and price) ================

// var dropdownEuro = document.body.children[0].children[1].children[0].children[0].children[0].children[2].children[0];

// dropdownEuro.addEventListener("click", function(){
  
//   var price = Number(document.getElementById("currency-value").innerHTML);
//   var priceDiv = document.getElementById("currency-value");
//   var currencySign = document.getElementById("currency-sign").innerHTML;
//   var currencySpan = document.getElementById("currency-sign");
//   if(currencySign.includes("$") || (currencySign.includes("£"))) {
//     currencySpan.innerHTML = "€ ";
//     parseFloat(price).toFixed(2);
//     var convert = parseFloat(price * currencyRates.rates[0].EUR).toFixed(2);
//     priceDiv.innerHTML = convert;
//   }
//   else if(currencySign.includes("€")) {
//     return 0;
//   }
  
// });
// ================ convert dollar to gbp (sign and price) ================/ 
// var dropdownGbp = document.body.children[0].children[1].children[0].children[0].children[0].children[2].children[1];

// dropdownGbp.addEventListener("click", function(){
  
//   var price = Number(document.getElementById("currency-value").innerHTML);
//   var priceDiv = document.getElementById("currency-value");
//   var currencySign = document.getElementById("currency-sign").innerHTML;
//   var currencySpan = document.getElementById("currency-sign");
//   if(currencySign.includes("$") || (currencySign.includes("€"))) {
//     currencySpan.innerHTML = "£ ";
//     parseFloat(price).toFixed(2);
//     var convert = parseFloat(price * currencyRates.rates[0].GBP).toFixed(2);
//     priceDiv.innerHTML = convert;
//   }
//   else if(currencySign.includes("£")) {
//     return 0;
//   }
  
// });
// convert euro or pound to usd
// var dropdownUsd = document.body.children[0].children[1].children[0].children[0].children[0].children[2].children[2];

// dropdownUsd.addEventListener("click", function(){
  
//   var priceUsd = Number(document.getElementById("currency-value").innerHTML);
//   var priceUsdDiv = document.getElementById("currency-value");
//   var currencySign = document.getElementById("currency-sign").innerHTML;
//   var currencySpan = document.getElementById("currency-sign");
//   if(currencySign.includes("€ ") || (currencySign.includes("£"))) {
//     currencySpan.innerHTML = "$ ";
//     parseFloat(priceUsd).toFixed(2);
//     var convert = parseFloat(19.99).toFixed(2)
//     priceUsdDiv.innerHTML = convert;
//   }
//   else if(currencySign.includes("$")) {
//     return 0;
//   }
  
// });
// convert gbp to euro 
// dropdownGbp.addEventListener("click", function(){
//   var priceGbp = Number(document.getElementById("currency-value").innerHTML);
//   var priceDiv = document.getElementById("currency-value");
//   var currencySign = document.getElementById("currency-sign").innerHTML;
//   var currencySpan = document.getElementById("currency-sign");
//   if(currencySign.includes("€")) {
//     currencySpan.innerHTML = "£ ";
//     parseFloat(priceGbp).toFixed(2);
//     var convert = parseFloat(productPrice * currencyRates.rates[0].EUR).toFixed(2);
//     priceDiv.innerHTML = convert;
//   }
//   else if(currencySign.includes("£")) {

//   }
  
// });
