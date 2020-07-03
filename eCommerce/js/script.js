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
      product_page_select_image_five: "https://i.imgur.com/ytk7lCC.png",
      product_page_select_image_six: "https://i.imgur.com/zfjbpEQ.png",
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
      product_page_select_image_three: "https://i.imgur.com/V2eusuj.png",
      product_page_select_image_four: "https://i.imgur.com/EZIlfts.png",
      product_page_select_image_five: "https://i.imgur.com/ytk7lCC.png",
      product_page_select_image_six: "https://i.imgur.com/zfjbpEQ.png",
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
      product_page_select_image_five: "https://i.imgur.com/ytk7lCC.png",
      product_page_select_image_six: "https://i.imgur.com/zfjbpEQ.png",
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
      product_page_select_image_three: "https://i.imgur.com/V2eusuj.png",
      product_page_select_image_four: "https://i.imgur.com/EZIlfts.png",
      product_page_select_image_five: "https://i.imgur.com/ytk7lCC.png",
      product_page_select_image_six: "https://i.imgur.com/zfjbpEQ.png",
  },
]

let currentPageItems = arrayOfObject.find(x => x.product_title === myParam);


if(currentPageItems !== undefined)
document.getElementById('product-page-main-image').innerHTML = currentPageItems.product_title;


let currentPageItemsId = arrayOfObject.find(x => x.id === myParamId);


if(currentPageItemsId !== undefined)
document.getElementById('product-page-main-image').innerText = currentPageItemsId.product_title + " " + currentPageItemsId.product_title;

if(document.location.href == 'http://127.0.0.1:5500/eCommerce/index.html') {
  var productButton = document.getElementsByClassName("view-product-btn");

  for (let i = 0;i < productButton.length;i++) {
    productButton[i].addEventListener("click", viewProductFunction);
  }
}