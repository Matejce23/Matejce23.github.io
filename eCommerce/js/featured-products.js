let featuredRowOne = document.body.children[3].children[1].children[0];
let featuredRowTwo = document.body.children[3].children[1].children[1];

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
         product_discount_price: 19.99
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
      }
  ]
  for(let i = 0; i < featuredProducts.length;i++) {
    featuredRowOne.appendChild(createProduct(featuredProducts[i]));
    featuredRowTwo.appendChild(createProduct(featuredProducts[i]));
  }

function createProduct(featured) {
    
    let divCol = document.createElement('div');
    let divCard = document.createElement('div');
    var divImgCard = document.createElement('div');
    let imgCard = document.createElement('img');
    let bestSeller = document.createElement('div');
    let newIn = document.createElement('div');
    let cardBody = document.createElement('div');
    let cardTitle = document.createElement('h5');
    let cardText = document.createElement('p');
    let viewProductBtn = document.createElement('a');

    divCol.className = "col-md-3";
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

    divCol.appendChild(divCard);
    divCard.appendChild(divImgCard);
    divImgCard.appendChild(imgCard);
    divImgCard.appendChild(bestSeller);
    divImgCard.appendChild(newIn);
    divCard.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(viewProductBtn);


    if(featured.product_discount === false) {
        return divCol;
    }
    else if(featured.product_discount === true) {
    let divCol = document.createElement('div');
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
    cardText.innerText = featured.product_discount_price;

    divCol.className = "col-md-3";
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
    cardText.innerHTML = "<span id=\"currency-sign\">$ </span> "+ "<span id=\"currency-value\">" + featured.product_price + "</span>" +
    " - " +"<span id=\"currency-sign\">$ </span>" + "<span id=\"currency-value\">" + featured.product_discount_price + "</span>";

    viewProductBtn.innerText = "view product";
    viewProductBtn.href = "#";
    //
    divCol.appendChild(divCard);
    divCard.appendChild(divImgCard);
    divImgCard.appendChild(imgCard);
    divImgCard.appendChild(bestSeller);
    divImgCard.appendChild(newIn);
    divCard.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(viewProductBtn);
    divImgCard.appendChild(discountDiv);
        return divCol;    
        
    }
}



