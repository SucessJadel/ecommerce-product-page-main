let productsInCart = [];
const parentElement = document.querySelector("#buyItems");
const cartSumPrice = document.querySelector("#sum-price");
const cart = document.querySelector("#cart");
const popUp = document.querySelector(".popup");
const thumbnail = document.querySelector(".thumbnail");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const amount = document.querySelector("#amount");
const imageBox = document.querySelectorAll(".image-box");
const mainImg = document.querySelector(".image1");

cart.addEventListener("click", function () {
  popUp.style.display = "block";
});

minus.addEventListener("click", function () {
  if (amount.textContent < 1) {
    return 0;
  } else {
    amount.textContent--;
  }
});

plus.addEventListener("click", function () {
  amount.textContent++;
});

for (i = 0; i < imageBox.length; i++) {
  imageBox[i].addEventListener("click", function () {
    imageBox[0].classList.remove("selected");
    imageBox[1].classList.remove("selected");
    imageBox[2].classList.remove("selected");
    imageBox[3].classList.remove("selected");
    this.classList.add("selected");

    const link = this.parentElement.getAttribute("href");
    mainImg.setAttribute("src", link);
  });
}
