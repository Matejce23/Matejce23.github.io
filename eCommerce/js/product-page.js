const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('productName'); //categoryId


const myParamId = urlParams.get('productId'); //



let arrayOfObject = [
    {
        id: "1",
        product_title: "2020 Smart Watch Fashion",
        product_image: "https://i.imgur.com/gxw0T11.jpg",
        product_price: 19.99,
        product_discount: false,
        product_page_select_image_one: "https://i.imgur.com/vFPOTj8.jpg",
        product_page_select_image_two: "https://i.imgur.com/ldim4vz.jpg",
        product_page_select_image_three: "https://i.imgur.com/fJI5xSV.jpg",
        product_page_select_image_four: "https://i.imgur.com/HbcjMw6.jpg",
        product_page_select_image_five: "https://i.imgur.com/mWN3HNi.jpg",
        product_page_select_image_six: "https://i.imgur.com/oVjsOQl.jpg",
    },
    {
       id: "2",
       product_title: "2020 Minimalist Ultra Thin Watch",
       product_image: "https://i.imgur.com/2qD4rv6.png",
       product_price: 29.99,
       product_discount: true,
       product_discount_price: 19.99,
       product_page_select_image_one: "https://i.imgur.com/478hBB7.png",
       product_page_select_image_two: "https://i.imgur.com/Oe1R1l5.png",
       product_page_select_image_three: "https://i.imgur.com/JrEdSwo.png",
       product_page_select_image_four: "https://i.imgur.com/4o0G5SW.png",
       product_page_select_image_five: "https://i.imgur.com/ytk7lCC.png",
       product_page_select_image_six: "https://i.imgur.com/zfjbpEQ.png",
    },
    {
      id: "3",
      product_title: "CRRJU Fashion Mens Watches",
      product_image: "https://i.imgur.com/bySU9rl.png",
      product_price: 19.99,
      product_discount: false,
      product_page_select_image_one: "https://i.imgur.com/6YC74oK.png",
      product_page_select_image_two: "https://i.imgur.com/1saAjFA.png",
      product_page_select_image_three: "https://i.imgur.com/V2eusuj.png",
      product_page_select_image_four: "https://i.imgur.com/EZIlfts.png",
      product_page_video: "https://streamable.com/jmx7jt",
    },
    {
      id: "4",
      product_title: "SKMEI Fashion Outdoor Sport Watch",
      product_image: "https://i.imgur.com/z0vgi3P.jpg",
      product_price: 29.99,
      product_discount: false,
      product_page_select_image_one: "https://i.imgur.com/Ee92lcE.png",
      product_page_select_image_two: "https://i.imgur.com/Uw8JpHn.png",
    },
    {
      id: "5",
      product_title: "Test Js",
      product_image: "https://i.imgur.com/gxw0T11.jpg",
      product_price: 19.99,
      product_discount: false,
      product_page_select_image_one: "https://i.imgur.com/vFPOTj8.jpg",
      product_page_select_image_two: "https://i.imgur.com/ldim4vz.jpg",
      product_page_select_image_three: "https://i.imgur.com/fJI5xSV.jpg",
      product_page_select_image_four: "https://i.imgur.com/HbcjMw6.jpg",
      product_page_select_image_five: "https://i.imgur.com/mWN3HNi.jpg",
      product_page_select_image_six: "https://i.imgur.com/oVjsOQl.jpg",
  },
  {
     id: "6",
      product_title: "Test Js",
      product_image: "https://i.imgur.com/2qD4rv6.png",
      product_price: 29.99,
      product_discount: true,
      product_discount_price: 19.99,
      product_page_select_image_one: "https://i.imgur.com/478hBB7.png",
      product_page_select_image_two: "https://i.imgur.com/Oe1R1l5.png",
      product_page_select_image_three: "https://i.imgur.com/JrEdSwo.png",
      product_page_select_image_four: "https://i.imgur.com/4o0G5SW.png",
      product_page_select_image_five: "https://i.imgur.com/ytk7lCC.png",
      product_page_select_image_six: "https://i.imgur.com/zfjbpEQ.png",
  },
  {
      id: "7",
      product_title: "Test Js",
      product_image: "https://i.imgur.com/bySU9rl.png",
      product_price: 19.99,
      product_discount: false,
      product_page_select_image_one: "https://i.imgur.com/6YC74oK.png",
      product_page_select_image_two: "https://i.imgur.com/1saAjFA.png",
      product_page_select_image_three: "https://i.imgur.com/V2eusuj.png",
      product_page_select_image_four: "https://i.imgur.com/EZIlfts.png",
      product_page_video: "https://streamable.com/jmx7jt",
  },
  {
      id: "8",
      product_title: "Test Js",
      product_image: "https://i.imgur.com/z0vgi3P.jpg",
      product_price: 29.99,
      product_discount: false,
      product_page_select_image_one: "https://i.imgur.com/Ee92lcE.png",
      product_page_select_image_two: "https://i.imgur.com/Uw8JpHn.png",
  },
]

let currentPageItems = arrayOfObject.find(x => x.product_title === myParam);


if(currentPageItems !== undefined)
document.getElementById('product-page-main-image').innerHTML = currentPageItems.product_title;


let currentPageItemsId = arrayOfObject.find(x => x.id === myParamId);


if(currentPageItemsId !== undefined)
document.getElementById('product-page-main-image').innerText = currentPageItemsId.product_title + " " + currentPageItemsId.product_title;



// ================ FEATURED PRODUCT ON PRODUCT PAGE ===============
var productPageLeftDiv = document.getElementById("product-page-featured");

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
// Create and mount the thumbnails slider.
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


// attach images 
// var productMainImage = document.getElementById("product-page-main-image");
// var product_page_select_image_five
// function productPageImages() {
  
// }
