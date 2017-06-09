var navHeader = document.querySelector(".menu");
var navToggle = document.querySelector(".menu__toggle");
navHeader.classList.remove("menu--nojs");
navToggle.addEventListener("click", function() {
  if (navHeader.classList.contains("menu--closed")) {
    navHeader.classList.remove("menu--closed");
    navHeader.classList.add("menu--opened");
  } else {
    navHeader.classList.add("menu--closed");
    navHeader.classList.remove("menu--opened");
  }
});
var addToCart = document.querySelectorAll(".add-to-cart");
var cartPopup = document.querySelector(".modal");
var overlay = document.querySelector(".modal-overlay");
var cartPopupClose = document.querySelector(".modal__close");
  addToCart.forEach(function(e, i) {
  e.addEventListener("click", function() {
  event.preventDefault();
  cartPopup.classList.add("modal-show");
  overlay.classList.add("modal-show");
  });
  });
  cartPopupClose.addEventListener("click", function(event) {
  event.preventDefault();
  cartPopup.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
  });
  overlay.addEventListener("click", function(event) {
  event.preventDefault();
  cartPopup.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
  });
  window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
          cartPopup.classList.remove("modal-show");
      }
      if (overlay.classList.contains("modal-show")) {
            overlay.classList.remove("modal-show");
        }
    }
});
var mapLink = document.querySelector(".contacts__map");
var mapPopup = document.querySelector(".contacts__map-modal");
var mapClose = document.querySelector(".contacts__map-close");
    mapLink.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("modal-show");
  });
    mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-show");
    });
    window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
        }
      }
    });
