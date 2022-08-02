// Mobile version navbar
const hamburger_icon = document.querySelector(".hamburger_icon");
const hamburger_menu = document.querySelector(".hamburger_menu");
hamburger_icon.addEventListener("click", () => {
  hamburger_menu.classList.toggle("hamburger_menu2");
});

window.onload = async function () {
  var productContainer = document.querySelector(".product_inner_container");
  var reviewsSection = document.querySelector(".reviews_section");
  var card = await getCard();
  productContainer.innerHTML += `
  <img src="${card.image}" class="product_pic" alt="">
       
  <div class="product_page_description">
      <div class="product_page_name_price_container" >
        <h3 class="product_page_name">
            <a href="#">${card.name}</a>
            </h3>
        <span class="product_page_price">${card.price}€</span>
      </div>
      <p>${card.description}</p>
      <div class="product_page_rating_content">
          <span class="product_page_stars_rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
          </span>
          <p class="product_page_product_reviews">Reviews<span>&#40  ${card.reviews.length} &#41 </span></p>
   
    </div>
      <div class="reserve_btn"><a>Reserve Order</a></div>
</div>`;

  reviewsSection.innerHTML += `
    ${card.reviews
      .map(
        (review) => `
    <div class="review">
    <h2>John Doe</h2>
    <div> 
      <span class="product_page_stars_rating">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </span>
    </div>
   
  <p>${review}</p>

      <small>Posted on <span>12-Jan-22</span></small>
  </div>
    `
      )
      .join("")}
    `;

  // function for modal opening and closing

  const reserve_btn = document.querySelector(".reserve_btn");
  const modal = document.querySelector(".modal_container");
  const close_btn = document.querySelector(".close_btn");

  reserve_btn.addEventListener("click", onclick);

  function onclick(e) {
    console.log("aiofdn");

    modal.style.display = "block";
  }

  $("#form").submit(function (e) {
    e.preventDefault();

    $("#form").hide();
    $(".modal_form").html(
      "<h2>Thank you for your reservation!<br />We will contact you soon.</h2>"
    );
  });

  close_btn.addEventListener("click", onclickclose);
  function onclickclose() {
    modal.style.display = "none";
  }
};

async function getCard() {
  const response = await fetch("../data/data.json");
  const data = await response.json();
  var id = localStorage.getItem("product_id");
  return data.find((product) => product.id == id);
}
