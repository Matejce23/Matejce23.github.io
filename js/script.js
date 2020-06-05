// najdi go id collapse-menu 
// ako collapse-menu pomine 992px izbrisi go ako e pod 992px neka stoj
// za desno menu ako e na 992px display normalno ako ne dodadi go vo top collapse menu
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
  if (i.matches) { // If media query matches
      $("#about").removeClass("about-page");
      $("#about").addClass("about-page-js");
      $("#resume").removeClass("resume-page");
      $("#resume").addClass("resume-page-js");
      $("#services").removeClass("services-page");
      $("#services").addClass("services-page-js");
      $("#works").removeClass("works-page");
      $("#works").addClass("works-page-js");
      $("#news").removeClass("blog-page");
      $("#news").addClass("blog-page-js");
      $("#contact").removeClass("contact-page");
      $("#contact").addClass("contact-page-js");
  } else {
      $("#about").removeClass("about-page-js");
      $("#about").addClass("about-page");
      $("#resume").removeClass("resume-page-js");
      $("#resume").addClass("resume-page");
      $("#services").removeClass("services-page-js");
      $("#services").addClass("services-page");
      $("#works").removeClass("works-page-js");
      $("#works").addClass("works-page");
      $("#news").removeClass("blog-page-js");
      $("#news").addClass("blog-page");
      $("#contact").removeClass("contact-page-js");
      $("#contact").addClass("contact-page");
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
function dispalyPages(c) {
  let sections = document.querySelectorAll('section');
  let leftMenu = document.getElementById('left-menu');
  leftMenu.classList += " d-none";
  let rightMenu = document.getElementById('right-menu');
  rightMenu.classList.remove("split","right-screen");
  rightMenu.classList.add("split-js","right-screen-js");
  let homePage = document.getElementById("homePage");
  homePage.classList = "d-block";

  for(item of sections){
      if (c == "home")  {
        leftMenu.classList = "split left-screen";
        rightMenu.classList.remove("split-js","right-screen-js");
        rightMenu.classList.add("split","right-screen");
        document.getElementById('home').classList.remove("d-none");
        document.getElementById('home').classList.add("d-block");
        //remove other classes
        document.getElementById('about').classList.remove("d-block");
        document.getElementById('about').classList.add("d-none");
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
const pageAbout = document.querySelector('#about');
    pageAbout.classList.add('animate__animated', 'animate__slideInRight');
const pageResume = document.querySelector('#resume');
    pageResume.classList.add('animate__animated', 'animate__slideInRight');
const pageServices = document.querySelector('#services');
  pageServices.classList.add('animate__animated', 'animate__slideInRight');
const pageWorks = document.querySelector('#works');
  pageWorks.classList.add('animate__animated', 'animate__slideInRight');
const pageNews = document.querySelector('#news');
  pageNews.classList.add('animate__animated', 'animate__slideInRight');
const pageContact = document.querySelector('#contact');
  pageContact.classList.add('animate__animated', 'animate__slideInRight');
// ================== RESTART ANIMATION (DELETE CLASSES) ================

// ====================TINY SLIDER ====================

var slider = tns({
  container: '.my-slider',
  items: 2,
  mouseDrag: true,
  slideBy: "page",
  nav: false,
  swipeAngle: false,
  speed: 800,
  gutter: 10,
  fixedWidth: 400
  });
  //  ============  Add icons to buttons =============
let sliderButtonLeft = document.querySelectorAll('.tns-controls>button')[0].innerHTML = "<span class=\"pe-7s-angle-left pe-lg\"></i>";
let sliderButtonRight = document.querySelectorAll('.tns-controls>button')[1].innerHTML = "<span class=\"pe-7s-angle-right pe-lg\"></i>";
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