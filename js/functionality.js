// Mobile version navbar
const hamburger_icon = document.querySelector(".hamburger_icon");
const hamburger_menu = document.querySelector(".hamburger_menu");
hamburger_icon.addEventListener("click", () => {
  hamburger_menu.classList.toggle("hamburger_menu2");
});

var productsGrid = document.querySelector(".products_gridbox");

// fetch data from json file and display in grid of cards
async function getData() {
  await fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        productsGrid.innerHTML += `<div class="item_card" id="${product.id}">
        <a href="./products.html">
          <img src="${product.image}" class="product_image" alt="">
        </a>

        <div class="product_description">
          <div class="product_name_price_container" >
            <h3 class="product_name">
                <a href="./products.html">${product.name}</a>
            </h3>
            <span class="product_price">${product.price}€</span>
          </div>

          <p class="product_desc">${product.description}</p>

          <div class="rating_content">
              <span class="stars-rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
              </span>
              <p class="product-reviews">Reviews<span>&#40  ${product.reviews.length} &#41 </span></p>
          </div>
        </div>
      </div>`;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

window.onload = async function () {
  await getData();

  var cards = document.querySelectorAll(".item_card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      localStorage.setItem("product_id", card.id);
    });
  });

  // search function
  var search = $("#search");
  search.keyup(function () {
    var searchValue = $(this).val().toLowerCase();
    $(".item_card").each(function () {
      var cardName = $(this).find(".product_name").text().toLowerCase();
      if (cardName.indexOf(searchValue) != -1) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
};

//Image Swiper
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Review Swiper
var swiper = new Swiper(".mySwip", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
