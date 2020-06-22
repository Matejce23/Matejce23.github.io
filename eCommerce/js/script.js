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
  let selectItems = document.body.children[0].children[1].children[0].children[0].children[0].children[2].children;
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