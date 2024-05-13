document.addEventListener("DOMContentLoaded", function () {
  // selectors for the button
  const addToCartButtons = document.querySelectorAll(".add-cart-btn");


  // parse out title, price, image
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const product = this.closest(".product");
      const title = product.querySelector(".product-title").textContent;
      const priceText = product
        .querySelector(".product-price")
        .textContent.trim();
      const priceParts = priceText.split(" ");
      const price = priceParts[priceParts.length - 1];
      const image = product.querySelector(".product-image").src;

      const productDetails = {
        title: title,
        price: price.replace(/[^0-9.]/g, ""),
        image: image,
        quantity: 1,
      };

      addToCart(productDetails);
    });
  });

  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingProduct = cart.find((item) => item.title === product.title);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  }
});
