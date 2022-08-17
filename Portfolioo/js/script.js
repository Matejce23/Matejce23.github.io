// ============================= Fucntion for top fixed menu to show/hide at 992px===========================
function hideTopMenu(x) {
    if (x.matches) { 
      menu.classList.add("d-block");
      menu.classList.remove("d-none");
    } else {
        menu.classList.add("d-none");
        menu.classList.remove("d-block");
    }
  }
  var menu = document.getElementById('collapse-menu');
  var x = window.matchMedia("(max-width: 992px)")
  hideTopMenu(x) 
  x.addListener(hideTopMenu) 

  // ========================== Function for right side menu to show hide also ===============================
  function hideRightMenu(i) {
    if (i.matches) { // If media query matches
        rightMenu.classList.add("d-none");
        rightMenu.classList.remove("d-block");
        leftScreen.classList.remove("split","left-screen");
        leftScreen.classList.add("split-query","left-screen");
    } else {
        rightMenu.classList.remove("d-none");
        rightMenu.classList.add("d-block");
        leftScreen.classList.remove("split-query","left-screen");
        leftScreen.classList.add("split","left-screen");
        
    }
  }
  var leftScreen = document.getElementById('left-menu');
  var rightMenu = document.getElementById('right-menu');
  var i = window.matchMedia("(max-width: 991px)")
  hideRightMenu(i) // Call listener function at run time
  i.addListener(hideRightMenu) // Attach listener function on state changes

  function removeRightClass() {
      rightMenu.classList.remove("right");
      rightMenu.classList.add("left");
  }
// ========================== SECTION PAGES WIDTH RESPONSIVE(BELOW 992PX) ======================
function hideRightMenuBelow992px(i) {
  let sections = document.querySelectorAll("section");
  for(item of sections) {
      if (i.matches) { // If media query matches
        item.classList.remove("sections");
        item.classList.add("sections-js");
    } else {
        item.classList.remove("sections-js");
        item.classList.add("sections");
    }
  }
}
var leftScreen = document.getElementById('left-menu');
var rightMenu = document.getElementById('right-menu');
var i = window.matchMedia("(max-width: 991px)")
hideRightMenuBelow992px(i) // Call listener function at run time
i.addListener(hideRightMenuBelow992px) // Attach listener function on state changes

// ==================================== RIGHT MENU ACTIVE CLASS ================================
let arr2 = document.querySelectorAll('#home-right>ul>li>span>a');
for(let i = 0; i < arr2.length;i++) {
    arr2[i].addEventListener("click", setActiveLi);
}

function setActiveLi() {
    for(let i=0; i < document.querySelectorAll('#home-right>ul>li').length; i++)
    {
        document.querySelectorAll('#home-right>ul>li')[i].classList = "nav-item";
    }
    this.parentElement.parentElement.classList = "nav-item active";
}

// ================================== DISPALY/HIDE PAGES WHEN CLICKED ON MENU ============================
// ======= NEW VERSION =========
function displayPagesv2(c) {
  let sectionPages = document.querySelectorAll("section");
  let home = document.getElementById("home");
  let leftMenu = document.getElementById('left-menu');
  leftMenu.classList += " d-none";
  let rightMenu = document.getElementById('right-menu');
  rightMenu.classList.remove("split","right-screen");
  rightMenu.classList.add("split-js","right-screen-js");
  let homePage = document.getElementById("homePage");
  homePage.classList = "d-block";
  let splitContainer = document.getElementById("menu-container");

    if (c == "home")  {
      leftMenu.classList = "split left-screen";
      rightMenu.classList.remove("split-js","right-screen-js");
      // rightMenu.classList.add("split","right-screen");
      rightMenu.classList.add("split-right","right-screen");
      home.classList.remove("d-none");
      home.classList.add("d-block");
    }
    else {
      home.classList.add("d-block");
      splitContainer.classList.remove("split-container");
    }

    for(item of sectionPages) {
     
      if(item.getAttribute("category") == c)
      {
          item.classList.remove("d-none");
          item.classList.add("d-block");
      }
      else {
          item.classList.remove("d-block");
          item.classList.add("d-none");
      }
    }
}
// ===================================== FORM VALIDATION ============================================

function validateForm(){  
    var fname = document.myform.fname.value;  
    var email = document.myform.email.value;  
    var message = document.myform.message.value;
    
    var inputName = document.getElementById('fname');
    var inputEmail = document.getElementById('email');
    var inputMessage = document.getElementById('message');
    
    var inputForms = document.getElementsByTagName('input');
    
        if (fname==null || fname==""){
            inputName.classList.add('required');  
            return false;  
          }
        else if (fname.match(/[a-z]/i)) {
            inputName.classList.remove('required');
        }
        if(email.length<6){  
            inputEmail.classList.add('required');
            return false;  
            }
        else if(email.lenght>=6 || email.includes("@")) {
            inputEmail.classList.remove('required');
            }
        if(message.length < 20){
              inputMessage.classList.add('required');
              return false;
            }
        else if(message.lenght >= 20)  {
              inputMessage.classList.remove('required');
            }     
          }  
// ================================================== CATEGORIES ACTIVE CLASS ==================================================

let arr3 = document.querySelectorAll('#cate-ul>ul>li>a');
for(let i = 0; i < arr3.length;i++) {
    arr3[i].addEventListener("click", setActiveCategoryLi);
}

function setActiveCategoryLi() {
    for(let i=0; i < document.querySelectorAll('#cate-ul>ul>li').length; i++)
    {
        document.querySelectorAll('#cate-ul>ul>li')[i].classList = "nav-item";
    }
    this.parentElement.classList = "nav-item active";
}   
// ================================================= FILTER CATEGORY IMAGES =============================================================

function filterSelection(c) {
    let cards = document.getElementsByClassName("works");

    for(item of cards){
        if (c == "all")  {
            item.classList.remove("hide");
            item.classList.add("show");
        }
        else if(item.getAttribute("category") == c)
        {
            item.classList.remove("hide");
            item.classList.add("show");
        }
        else {
            item.classList.remove("show");
            item.classList.add("hide");
        }
    }

  }

// ====================================== ANIMATE PORTFOLIO WORKS JS ==================================

const element = document.getElementsByClassName('works');
for(let i = 0;i < element.length;i++) {
    element[i].classList.add('animate__animated', 'animate__zoomIn');  
}

// =========================  ANIMATING PAGES =========================
const menuRight = document.querySelector("#right-menu");
    menuRight.classList.add('animate__animated', 'animate__slideInRight');
let sectionsAnimate = document.querySelectorAll("section");

for(let i = 0;i < sectionsAnimate.length;i++){
    sectionsAnimate[i].classList.add('animate__animated', 'animate__slideInRight');
}
// ======================== BUG WHEN ON SMALLER RES WIDTH IS TO HIGH BECAUSE OF ANIMATION ===================
function disableAnimationBelow992px(i) {
      for(item of sectionsDisableAnim) {
            if (i.matches) {
                item.classList.remove('animate__animated', 'animate__slideInRight');
            }
            else {
                item.classList.add('animate__animated', 'animate__slideInRight');
            }
      }
}
var sectionsDisableAnim = document.querySelectorAll("section");
var i = window.matchMedia("(max-width: 991px)")
disableAnimationBelow992px(i) // Call listener function at run time
i.addListener(disableAnimationBelow992px) // Attach listener function on state changes
// ================== RESTART ANIMATION (DELETE CLASSES) ================

// ====================TINY SLIDER ====================

// var slider = tns({
//   container: '.my-slider',
//   items: 2,
//   mouseDrag: true,
//   slideBy: "page",
//   nav: false,
//   swipeAngle: false,
//   speed: 800,
//   gutter: 10,
//   fixedWidth: 400
//   });
  //  ============  Add icons to buttons =============
// let sliderButtonLeft = document.querySelectorAll('.tns-controls>button')[0].innerHTML = "<span class=\"pe-7s-angle-left pe-lg\"></i>";
// let sliderButtonRight = document.querySelectorAll('.tns-controls>button')[1].innerHTML = "<span class=\"pe-7s-angle-right pe-lg\"></i>";
$(".tns-controls").css("display", "block");
//  ============== Hide menu after click on menu item ========
$("#ul-menu > li").click(function() {
  $("#right-menu").removeClass("show");
  if(media.matches) {
    $("#homePage > a").click(function() {
      $("#left-menu").removeClass("split");
      $("#left-menu").addClass("split-query");
    })
  }
  else {
      $("#left-menu").removeClass("split-query");
      $("#left-menu").addClass("split");
  }
 
});
var media = window.matchMedia("(max-width: 991px)")
// =================================== TYPESCRIPT HOME PAGE =======================================
document.addEventListener("DOMContentLoaded", function(event) {
    var typed = new Typed('#typed',{
        stringsElement: '#typed-strings',
        backSpeed: 50,
        typeSpeed: 50,
        loop: true
      });
});

// ================================= OVERLAY IMAGE WORKS ===========================================
  /* Demo purposes only */
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );