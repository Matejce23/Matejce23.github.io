// ================ FEATURED PRODUCT ON PRODUCT PAGE ===============
var productPageLeftDiv = document.getElementById("product-page-featured");
var productThumbnail = document.getElementById("primary-slider");
var productSelection = document.getElementById("secondary-slider");
var productPageFeaturedProduct = [{
  id: "1",
  product_title: "2020 Smart Watch Fashion",
  product_image: "https://i.imgur.com/gxw0T11.jpg",
  product_price: 19.99,
  product_discount: false,
  }
]
if (document.location.href == 'http://127.0.0.1:5500/eCommerce/product-page.html?productName=featuredProduct') {
  for(let i = 0;i < productPageFeaturedProduct.length;i++) {
    productPageLeftDiv.appendChild(productPageFeatured(productPageFeaturedProduct[i])); 
  }
function productPageFeatured(productPage) {

    let divCard = document.createElement('div');
    var divImgCard = document.createElement('div');
    let imgCard = document.createElement('img');
    let bestSeller = document.createElement('div');
    let newIn = document.createElement('div');
    let cardBody = document.createElement('div');
    let cardTitle = document.createElement('p');
    let cardText = document.createElement('p');
    let viewProductBtn = document.createElement('a');
    let starsReview = document.createElement('div');
    
    divCard.className = "card";
    divImgCard.className = "img-card";
    divImgCard.setAttribute("id", "img-card");
    imgCard.className = "card-img-top";
    bestSeller.className = "best-seller";
    newIn.className = "new-product";
    cardBody.className = "card-body";
    cardTitle.className = "card-title text-center product-title-size";
    cardText.className = "card-text";
    viewProductBtn.className = "view-product-btn-product-page";
    starsReview.className = "stars";
    starsReview.innerHTML = "<i class=\"fas fa-star\"></i>" + "<i class=\"fas fa-star\"></i>" + 
    "<i class=\"fas fa-star\"></i>" + "<i class=\"fas fa-star\"></i>" + "<i class=\"fas fa-star\"></i>" + "<i class=\"fas fa-star\"></i>"

    divCard.style.width = "16rem";
    imgCard.src = productPage.product_image;

    bestSeller.innerHTML = "<span>best seller</span>";
    newIn.innerHTML = "<span>new in</span>";
    cardTitle.innerText = productPage.product_title;
    cardText.innerHTML = "<span class=\"currency-sign\">$ </span> "+ "<span class=\"currency-value\">" + productPage.product_price + "</span>";
    viewProductBtn.innerText = "view product";
    viewProductBtn.href = "product-page.html?productName=featuredProduct";

    divCard.appendChild(divImgCard);
    divImgCard.appendChild(imgCard);
    divImgCard.appendChild(bestSeller);
    divImgCard.appendChild(newIn);
    divCard.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(starsReview);
    cardBody.appendChild(cardText);
    cardBody.appendChild(viewProductBtn);

    return divCard;
}
}
// ===================== PRODUCT PAGE IMAGES ========================
// attach images 




//Create and mount the thumbnails slider.
document.addEventListener( 'DOMContentLoaded', function () {
	var secondarySlider = new Splide( '#secondary-slider', {
    fixedWidth  : 100,
    width       : 540,
		height      : 100,
		gap         : 10,
		cover       : true,
		isNavigation: true,
		focus       : 'center',
		breakpoints : {
			'600': {
				fixedWidth: 66,
				height    : 40,
			}
		},
  } ).mount();
  
  var primarySlider = new Splide( '#primary-slider', {
    type       : 'fade',
    heightRatio: 0.5,
    pagination : false,
    arrows     : false,
    cover      : true,
    fixedWidth : 540,
    fixedHeight: 380,
  } );
  
  primarySlider.sync( secondarySlider ).mount();

} );


function viewProductFunction() {
  var productImageOne = document.getElementsByClassName("p-image-one");
  var productImageTwo = document.getElementsByClassName("p-image-two");
  var productImageThree = document.getElementsByClassName("p-image-three");
  var productImageFour = document.getElementsByClassName("p-image-four");
  var productImageFive = document.getElementsByClassName("p-image-five");

  for(let i = 0; i < arrayOfObject.length;i++) {
    if(arrayOfObject[i].product_title.includes("2020 Smart Watch Fashion")) {
      for(let i = 0;( (i < productImageOne.length) && (i < productImageTwo.length) && (i < productImageThree.length) && (i < productImageFour.length) && (i < productImageFive.length ) );i++) {
        productImageOne[i].src = arrayOfObject[0].product_page_select_image_one;
        productImageTwo[i].src = arrayOfObject[0].product_page_select_image_two;
        productImageThree[i].src = arrayOfObject[0].product_page_select_image_three;
        productImageFour[i].src = arrayOfObject[0].product_page_select_image_four;
        productImageFive[i].src = arrayOfObject[0].product_page_select_image_five;
      }
    } 
  } 
}