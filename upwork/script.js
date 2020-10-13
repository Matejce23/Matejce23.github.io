window.onload = function() {
    let productImg = document.getElementsByClassName("product-image");
    for(item of productImg) {
        if(item.getAttribute("category") == "blue")
        {
            item.classList.remove("show");
            item.classList.add("hide");
        }
        else if(item.getAttribute("category") == "green")
        {
            item.classList.remove("show");
            item.classList.add("hide");
        }
        else {
            item.classList.add("show");
            item.classList.remove("hide");
        }
    }
  };
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

function filterSelection(c) {
    let imageVariant = document.getElementsByClassName("product-image");

    for(item of imageVariant) {
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