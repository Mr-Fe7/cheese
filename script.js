document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  burger.addEventListener("click", function () {
    nav.classList.toggle("open");
    burger.classList.toggle("open");
    document.body.classList.toggle("menu-open", nav.classList.contains("open"));
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      burger.classList.remove("open");
      document.body.classList.remove("menu-open");
    });
  });
  const promoForm = document.querySelector(".promo__form");
  const popup = document.getElementById("popup-overlay");
  const popupClose = document.getElementById("popup-close");
  if (promoForm && popup && popupClose) {
    promoForm.addEventListener("submit", function (e) {
      e.preventDefault();
      popup.style.display = "flex";
    });
    popupClose.addEventListener("click", function () {
      popup.style.display = "none";
    });
    popup.addEventListener("click", function (e) {
      if (e.target === popup) popup.style.display = "none";
    });
  }
  const orderBtn = document.querySelector(".shops__online button");
  const orderPopup = document.getElementById("order-popup");
  const orderPopupBtn = document.getElementById("order-popup-btn");
  if (orderBtn && orderPopup && orderPopupBtn) {
    orderBtn.addEventListener("click", function (e) {
      e.preventDefault();
      orderPopup.style.display = "flex";
    });
    orderPopupBtn.addEventListener("click", function () {
      orderPopup.style.display = "none";
    });
    orderPopup.addEventListener("click", function (e) {
      if (e.target === orderPopup) orderPopup.style.display = "none";
    });
  }
});
