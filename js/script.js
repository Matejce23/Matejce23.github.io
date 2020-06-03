// najdi go id collapse-menu 
// ako collapse-menu pomine 992px izbrisi go ako e pod 992px neka stoj
// za desno menu ako e na 992px display normalno ako ne dodadi go vo top collapse menu
// ============================= Fucntion for top fixed menu to show/hide at 992px===========================
// function hideTopMenu(x) {
//     if (x.matches) { 
//       menu.classList.add("bottom");
//       menu.classList.remove("top");
//     } else {
//         menu.classList.add("top");
//         menu.classList.remove("bottom");
//     }
//   }
//   var menu = document.getElementById('collapse-menu');
//   var x = window.matchMedia("(max-width: 992px)")
//   hideTopMenu(x) 
//   x.addListener(hideTopMenu) 

  // ========================== Function for right side menu to show hide also ===============================
//   function hideRightMenu(i) {
//     if (i.matches) { // If media query matches
//         rightMenu.classList.add("right");
//         rightMenu.classList.remove("left");
//     } else {
//         rightMenu.classList.remove("right");
//         rightMenu.classList.add("left");
        
//     }
//   }
//   var rightMenu = document.getElementById('home-right');
//   var i = window.matchMedia("(max-width: 991px)")
//   hideRightMenu(i) // Call listener function at run time
//   i.addListener(hideRightMenu) // Attach listener function on state changes

//   function removeRightClass() {
//       rightMenu.classList.remove("right");
//       rightMenu.classList.add("left");
//   }

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
function dispalyPages(c) {
  let sections = document.querySelectorAll('section');
  let leftMenu = document.getElementById('left-menu');
  leftMenu.classList += " d-none";
  let rightMenu = document.getElementById('right-menu');
  rightMenu.classList.remove("split","right-screen");
  rightMenu.classList.add("split-js","right-screen-js");

  for(item of sections){
      if (c == "about")  {
        document.getElementById('about').classList.remove("d-none");
        document.getElementById('about').classList.add("d-block");
        //remove other classes
        document.getElementById('resume').classList.remove("d-block");
        document.getElementById('resume').classList.add("d-none");
        document.getElementById('services').classList.remove("d-block");
        document.getElementById('services').classList.add("d-none");
        document.getElementById('works').classList.remove("d-block");
        document.getElementById('works').classList.add("d-none");
        document.getElementById('news').classList.remove("d-block");
        document.getElementById('news').classList.add("d-none");
        document.getElementById('contact').classList.remove("d-block");
        document.getElementById('contact').classList.add("d-none");
      }
      if (c == "resume")  {
        document.getElementById('resume').classList.remove("d-none");
        document.getElementById('resume').classList.add("d-block");
        //remove other classes
        document.getElementById('about').classList.remove("d-block");
        document.getElementById('about').classList.add("d-none");
        document.getElementById('services').classList.remove("d-block");
        document.getElementById('services').classList.add("d-none");
        document.getElementById('works').classList.remove("d-block");
        document.getElementById('works').classList.add("d-none");
        document.getElementById('news').classList.remove("d-block");
        document.getElementById('news').classList.add("d-none");
        document.getElementById('contact').classList.remove("d-block");
        document.getElementById('contact').classList.add("d-none");
      }
      if (c == "services")  {
        document.getElementById('services').classList.remove("d-none");
        document.getElementById('services').classList.add("d-block");
        //remove other classes
        document.getElementById('resume').classList.remove("d-block");
        document.getElementById('resume').classList.add("d-none");
        document.getElementById('about').classList.remove("d-block");
        document.getElementById('about').classList.add("d-none");
        document.getElementById('works').classList.remove("d-block");
        document.getElementById('works').classList.add("d-none");
        document.getElementById('news').classList.remove("d-block");
        document.getElementById('news').classList.add("d-none");
        document.getElementById('contact').classList.remove("d-block");
        document.getElementById('contact').classList.add("d-none");
      }
      if (c == "works")  {
        document.getElementById('works').classList.remove("d-none");
        document.getElementById('works').classList.add("d-block");
        //remove classes 
        document.getElementById('resume').classList.remove("d-block");
        document.getElementById('resume').classList.add("d-none");
        document.getElementById('services').classList.remove("d-block");
        document.getElementById('services').classList.add("d-none");
        document.getElementById('about').classList.remove("d-block");
        document.getElementById('about').classList.add("d-none");
        document.getElementById('news').classList.remove("d-block");
        document.getElementById('news').classList.add("d-none");
        document.getElementById('contact').classList.remove("d-block");
        document.getElementById('contact').classList.add("d-none");
      }
      if (c == "news")  {
        document.getElementById('news').classList.remove("d-none");
        document.getElementById('news').classList.add("d-block");
        //remove classes
        document.getElementById('resume').classList.remove("d-block");
        document.getElementById('resume').classList.add("d-none");
        document.getElementById('services').classList.remove("d-block");
        document.getElementById('services').classList.add("d-none");
        document.getElementById('works').classList.remove("d-block");
        document.getElementById('works').classList.add("d-none");
        document.getElementById('about').classList.remove("d-block");
        document.getElementById('about').classList.add("d-none");
        document.getElementById('contact').classList.remove("d-block");
        document.getElementById('contact').classList.add("d-none");
      }
      if (c == "contact")  {
        document.getElementById('contact').classList.remove("d-none");
        document.getElementById('contact').classList.add("d-block");
        //remove classes
        document.getElementById('resume').classList.remove("d-block");
        document.getElementById('resume').classList.add("d-none");
        document.getElementById('services').classList.remove("d-block");
        document.getElementById('services').classList.add("d-none");
        document.getElementById('works').classList.remove("d-block");
        document.getElementById('works').classList.add("d-none");
        document.getElementById('news').classList.remove("d-block");
        document.getElementById('news').classList.add("d-none");
        document.getElementById('about').classList.remove("d-block");
        document.getElementById('about').classList.add("d-none");
    }
      // else if(item.getAttribute("category") == c)
      // {
      //     item.classList.remove("d-none");
      //     item.classList.add("d-block");
      // }
      // else {
      //     item.classList.remove("d-none");
      //     item.classList.add("d-block");
      // }
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

const pageAbout = document.querySelector('#about');
    pageAbout.classList.add('animate__animated', 'animate__backInRight');
const pageResume = document.querySelector('#resume');
    pageResume.classList.add('animate__animated', 'animate__backInRight');
const pageServices = document.querySelector('#services');
  pageServices.classList.add('animate__animated', 'animate__backInRight');
const pageWorks = document.querySelector('#works');
  pageWorks.classList.add('animate__animated', 'animate__backInRight');
const pageNews = document.querySelector('#news');
  pageNews.classList.add('animate__animated', 'animate__backInRight');
const pageContact = document.querySelector('#contact');
  pageContact.classList.add('animate__animated', 'animate__backInRight');

// ====================================== TINY SLIDER ==================================

var slider = tns({
  container: '.my-slider',
  items: 2,
  mouseDrag: true,
  slideBy: "page",
  nav: false,
  swipeAngle: false,
  speed: 800,
  gutter: 10,
  fixedWidth: 400,
  
  });
  //  ============  Add icons to buttons =============
let sliderButtonLeft = document.querySelectorAll('.tns-controls>button')[0].innerHTML = "<span class=\"pe-7s-angle-left pe-lg\"></i>";
let sliderButtonRight = document.querySelectorAll('.tns-controls>button')[1].innerHTML = "<span class=\"pe-7s-angle-right pe-lg\"></i>";
 
// =================================== TYPESCRIPT HOME PAGE =======================================
document.addEventListener("DOMContentLoaded", function(event) {
    var typed = new Typed('#typed',{
        stringsElement: '#typed-strings',
        backSpeed: 50,
        typeSpeed: 50,
        loop: true
      });
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