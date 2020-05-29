// najdi go id collapse-menu 
// ako collapse-menu pomine 992px izbrisi go ako e pod 992px neka stoj
// za desno menu ako e na 992px display normalno ako ne dodadi go vo top collapse menu
// ============================= Fucntion for top fixed menu to show/hide at 992px===========================
function hideTopMenu(x) {
    if (x.matches) { // If media query matches
      menu.classList.add("bottom");
      menu.classList.remove("top");
    } else {
        menu.classList.add("top");
        menu.classList.remove("bottom");
    }
  }
  var menu = document.getElementById('collapse-menu');
  var x = window.matchMedia("(max-width: 992px)")
  hideTopMenu(x) // Call listener function at run time
  x.addListener(hideTopMenu) // Attach listener function on state changes

  // ========================== Function for right side menu to show hide also ===============================
  function hideRightMenu(i) {
    if (i.matches) { // If media query matches
        rightMenu.classList.add("right");
        rightMenu.classList.remove("left");
    } else {
        rightMenu.classList.remove("right");
        rightMenu.classList.add("left");
        
    }
  }
  var rightMenu = document.getElementById('home-right');
  var i = window.matchMedia("(max-width: 991px)")
  hideRightMenu(i) // Call listener function at run time
  i.addListener(hideRightMenu) // Attach listener function on state changes

  function removeRightClass() {
      rightMenu.classList.remove("right");
      rightMenu.classList.add("left");
  }

// ==================================== RIGHT MENU ACTIVE CLASS ================================
let arr2 = document.querySelectorAll('#home-right>ul>li>a');
for(let i = 0; i < arr2.length;i++) {
    arr2[i].addEventListener("click", setActiveLi);
}

function setActiveLi() {
    for(let i=0; i < document.querySelectorAll('#home-right>ul>li').length; i++)
    {
        document.querySelectorAll('#home-right>ul>li')[i].classList = "nav-item";
    }
    this.parentElement.classList = "nav-item active";
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
    let cards = document.getElementsByClassName("work-design");

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

// ====================================== ANIMATE JS ==================================
const element = document.getElementsByClassName('work-design');
for(let i = 0;i < element.length;i++) {
    element[i].classList.add('animate__animated', 'animate__zoomIn');
}
const page = document.querySelector('#works');
  page.classList.add('animate__animated', 'animate__backInRight');

// const element = document.querySelector('.work-design');
// element.classList.add('animate__animated', 'animate__bounceInDown');

// ====================================== TINY SLIDER ==================================

var slider = tns({
  container: '.my-slider',
  items: 2,
  mouseDrag: true,
  slideBy: "page",
  swipeAngle: false,
  speed: 800,
  gutter: 10,
  fixedWidth: 400,
  startIndex: 4,
  loop: false,
  autoplay: true,
  autoplayButton: false
  });

// =================================== SCROLL ACTIVE CLASS =-===========================

// let mainNavLinks = document.querySelectorAll("#home-right>ul>li>a");
// let mainSections = document.querySelectorAll("main>section");

// let lastId;
// let cur = [];

// window.addEventListener("scroll", event => {
//   let fromTop = window.scrollY;

//   mainNavLinks.forEach(link => {
//     let section = document.querySelector(link.hash);

//     if (
//       section.offsetTop <= fromTop &&
//       section.offsetTop + section.offsetHeight > fromTop
//     ) {
//       link.parentElement.classList.add("active");
//     } else {
//       link.parentElement.classList.remove("active");
//     }
//   });
// });
// =================================== SCROLL ACTIVE CLASS =-===========================