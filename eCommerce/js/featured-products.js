//let featuredRowOne = document.body.children[3].children[1].children[0];
var productsDiv = document.getElementById("featured-products");

var featuredProducts = [{
          id: "1",
          product_title: "2020 Smart Watch Fashion",
          product_image: "https://i.imgur.com/gxw0T11.jpg",
          product_price: 19.99,
          product_discount: false,
      },
      {
         id: "2",
         product_title: "2020 Minimalist Ultra Thin Watch",
         product_image: "https://i.imgur.com/2qD4rv6.png",
         product_price: 29.99,
         product_discount: true,
         product_discount_price: 19.99,
         product_page_main_image: "https://i.imgur.com/478hBB7.png",
         product_page_select_image_one: "https://i.imgur.com/Oe1R1l5.png",
         product_page_select_image_two: "https://i.imgur.com/JrEdSwo.png",
         product_page_select_image_three: "https://i.imgur.com/4o0G5SW.png",
         product_page_select_image_four: "https://i.imgur.com/ytk7lCC.png",
         product_page_select_image_five: "https://i.imgur.com/zfjbpEQ.png",
      },
      {
        id: "3",
        product_title: "CRRJU Fashion Mens Watches",
        product_image: "https://i.imgur.com/bySU9rl.png",
        product_price: 19.99,
        product_discount: false,
      },
      {
        id: "4",
        product_title: "SKMEI Fashion Outdoor Sport Watch",
        product_image: "https://i.imgur.com/z0vgi3P.jpg",
        product_price: 29.99,
        product_discount: false,
      },
      {
        id: "5",
        product_title: "Test Js",
        product_image: "https://i.imgur.com/gxw0T11.jpg",
        product_price: 19.99,
        product_discount: false,
    },
    {
       id: "6",
       product_title: "Test Js",
       product_image: "https://i.imgur.com/2qD4rv6.png",
       product_price: 29.99,
       product_discount: true,
       product_discount_price: 19.99
    },
    {
      id: "7",
      product_title: "Test Js",
      product_image: "https://i.imgur.com/bySU9rl.png",
      product_price: 19.99,
      product_discount: false,
    },
    {
      id: "8",
      product_title: "Test Js",
      product_image: "https://i.imgur.com/z0vgi3P.jpg",
      product_price: 29.99,
      product_discount: false,
    },
  ]
var productsDiscount = [{
  id: "2",
  product_title: "2020 Minimalist Ultra Thin Watch",
  product_image: "https://i.imgur.com/2qD4rv6.png",
  product_price: 29.99,
  product_discount: true,
  product_discount_price: 19.99
},
{
  id: "6",
  product_title: "Test Js",
  product_image: "https://i.imgur.com/2qD4rv6.png",
  product_price: 29.99,
  product_discount: true,
  product_discount_price: 19.99
},
]
var productsNoDiscount = [{
  id: "1",
  product_title: "2020 Smart Watch Fashion",
  product_image: "https://i.imgur.com/gxw0T11.jpg",
  product_price: 19.99,
  product_discount: false,
},
{
  id: "3",
  product_title: "CRRJU Fashion Mens Watches",
  product_image: "https://i.imgur.com/bySU9rl.png",
  product_price: 19.99,
  product_discount: false,
},
{
  id: "4",
  product_title: "SKMEI Fashion Outdoor Sport Watch",
  product_image: "https://i.imgur.com/z0vgi3P.jpg",
  product_price: 29.99,
  product_discount: false,
},
{
  id: "5",
  product_title: "Test Js",
  product_image: "https://i.imgur.com/gxw0T11.jpg",
  product_price: 19.99,
  product_discount: false,
},
{
  id: "7",
  product_title: "Test Js",
  product_image: "https://i.imgur.com/bySU9rl.png",
  product_price: 19.99,
  product_discount: false,
},
{
  id: "8",
  product_title: "Test Js",
  product_image: "https://i.imgur.com/z0vgi3P.jpg",
  product_price: 29.99,
  product_discount: false,
},
]
  for(let i = 0; i < featuredProducts.length;i++) {
    productsDiv.appendChild(createProduct(featuredProducts[i]));
  }

function createProduct(featured) {
    
    let divFlex = document.createElement('div');
    let divCard = document.createElement('div');
    var divImgCard = document.createElement('div');
    let imgCard = document.createElement('img');
    let bestSeller = document.createElement('div');
    let newIn = document.createElement('div');
    let cardBody = document.createElement('div');
    let cardTitle = document.createElement('h5');
    let cardText = document.createElement('p');
    let viewProductBtn = document.createElement('a');

    divFlex.className = "item-wrap";
    divCard.className = "card";
    divImgCard.className = "img-card";
    divImgCard.setAttribute("id", "img-card");
    imgCard.className = "card-img-top";
    bestSeller.className = "best-seller";
    newIn.className = "new-product";
    cardBody.className = "card-body";
    cardTitle.className = "card-title text-center";
    cardText.className = "card-text";
    viewProductBtn.className = "view-product-btn";

    divCard.style.width = "16rem";
    imgCard.src = featured.product_image;

    bestSeller.innerHTML = "<span>best seller</span>";
    newIn.innerHTML = "<span>new in</span>";
    cardTitle.innerText = featured.product_title;
    cardText.innerHTML = "<span class=\"currency-sign\">$ </span> "+ "<span class=\"currency-value\">" + featured.product_price + "</span>";
    //cardText.innerText = featured.product_price;
    viewProductBtn.innerText = "view product";
    viewProductBtn.href = "#";

    divFlex.appendChild(divCard);
    divCard.appendChild(divImgCard);
    divImgCard.appendChild(imgCard);
    divImgCard.appendChild(bestSeller);
    divImgCard.appendChild(newIn);
    divCard.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(viewProductBtn);


    if(featured.product_discount === false) {
        return divFlex;
    }
    else if(featured.product_discount === true) {
    let divFlex = document.createElement('div');
    let divCard = document.createElement('div');
    var divImgCard = document.createElement('div');
    let imgCard = document.createElement('img');
    let bestSeller = document.createElement('div');
    let newIn = document.createElement('div');
    let cardBody = document.createElement('div');
    let cardTitle = document.createElement('h5');
    let cardText = document.createElement('p');
    let viewProductBtn = document.createElement('a');

    let discountDiv = document.createElement('div');
    discountDiv.className = "discount";
    discountDiv.innerHTML = "<span id=\"discount-product\">50% OFF</span>";
    //cardText.innerText = featured.product_discount_price;

    divFlex.className = "item-wrap";
    divCard.className = "card";
    divImgCard.className = "img-card";
    divImgCard.setAttribute("id", "img-card-discount");
    imgCard.className = "card-img-top";
    bestSeller.className = "best-seller";
    newIn.className = "new-product";
    cardBody.className = "card-body";
    cardTitle.className = "card-title text-center";
    cardText.className = "card-text";
    viewProductBtn.className = "view-product-btn";

    divCard.style.width = "16rem";
    imgCard.src = featured.product_image;

    bestSeller.innerHTML = "<span>best seller</span>";
    newIn.innerHTML = "<span>new in</span>";
    cardTitle.innerText = featured.product_title;
    cardText.innerHTML = "<span class=\"currency-sign-discount\">$ </span> "+ "<span class=\"original-price\">" + featured.product_price + "</span>" +
    " - " +"<span class=\"currency-sign-discount\">$ </span>" + "<span class=\"discount-price\">" + featured.product_discount_price + "</span>";

    viewProductBtn.innerText = "view product";
    viewProductBtn.href = "#";
    //
    divFlex.appendChild(divCard);
    divCard.appendChild(divImgCard);
    divImgCard.appendChild(imgCard);
    divImgCard.appendChild(bestSeller);
    divImgCard.appendChild(newIn);
    divCard.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(viewProductBtn);
    divImgCard.appendChild(discountDiv);
        return divFlex;    
        
    }
}

// ================ FEATURED PRODUCT ON PRODUCT PAGE ===============
var productPageLeftDiv = document.getElementById("product-page-featured-product");

var productPageFeaturedProduct = [{
  id: "1",
  product_title: "2020 Smart Watch Fashion",
  product_image: "https://i.imgur.com/gxw0T11.jpg",
  product_price: 19.99,
  product_discount: false,
  }
]
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
    divCard.style.margin = "auto"
    imgCard.src = productPage.product_image;

    bestSeller.innerHTML = "<span>best seller</span>";
    newIn.innerHTML = "<span>new in</span>";
    cardTitle.innerText = productPage.product_title;
    cardText.innerHTML = "<span class=\"currency-sign\">$ </span> "+ "<span class=\"currency-value\">" + productPage.product_price + "</span>";
    viewProductBtn.innerText = "view product";
    viewProductBtn.href = "#";

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
// ============================ PRODUCT PAGE =============================
// function showProductOnProductPage() {
//   var mainImageDiv = document.getElementById("product-page-main-image");

// for(let i = 0;i < featuredProducts;i++) {
//   if(featuredProducts[i].product_title === "2020 Minimalist Ultra Thin Watch") {

//   }
// }
// }



