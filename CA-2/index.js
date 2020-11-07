let menuItems = document.getElementById("MenuItems");
menuItems.style.maxHeight = "0px";

const menuToggle = () => {
    menuItems.style.maxHeight = (menuItems.style.maxHeight == "0px") 
                                ? "200px" : "0px";
}

// -----------------------JS for product gallery----------------------------

let product = document.getElementById("productImg");
let smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = () => {
    product.src = smallImg[0].src;
}
smallImg[1].onclick = () => {
    product.src = smallImg[1].src;
}
smallImg[2].onclick = () => {
    product.src = smallImg[2].src;
}
smallImg[3].onclick = () => {
    product.src = smallImg[3].src;
}
