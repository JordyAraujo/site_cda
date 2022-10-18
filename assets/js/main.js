// Menu
document.addEventListener("DOMContentLoaded", () => {
  let navbarBurger = document.querySelector(".navbar-burger");
  let navbarMenu = document.querySelector(".navbar-menu");
  if (navbarBurger && navbarMenu) {
    navbarBurger.addEventListener("click", function () {
      navbarBurger.classList.toggle("is-active");
      if (navbarBurger.classList.contains("is-active")) {
        navbarMenu.style.display = "block";
        if (navbarMenu.querySelectorAll("a[href]")) {
          [].forEach.call(
            navbarMenu.querySelectorAll("a[href]"),
            function (navURL) {
              navURL.addEventListener("click", function () {
                navbarMenu.style.display = "none";
                navbarBurger.classList.remove("is-active");
              });
            }
          );
        }
      } else navbarMenu.style.display = "none";
    });
  }
  if (document.querySelectorAll(".navbar-link")) {
    [].forEach.call(
      document.querySelectorAll(".navbar-link"),
      function (elLink) {
        if (elLink.classList.contains("is-active"))
          elLink.classList.toggle("is-active");
        if (
          elLink.nextElementSibling.classList.contains("navbar-dropdown") &&
          elLink.nextElementSibling.hasChildNodes()
        ) {
          elLink.addEventListener("click", function () {
            elLink.classList.toggle("is-active");
            if (
              elLink.classList.contains("is-active") &&
              elLink.nextElementSibling.style.display === "none"
            )
              elLink.nextElementSibling.style.display = "block";
            else if (
              !elLink.classList.contains("is-active") &&
              elLink.nextElementSibling.style.display === "block"
            )
              elLink.nextElementSibling.style.display = "none";
            [].forEach.call(
              elLink.nextElementSibling.childNodes,
              function (siblingChild) {
                siblingChild.addEventListener("click", function () {
                  siblingChild.parentNode.style.display = "none";
                  if (elLink.classList.contains("is-active"))
                    elLink.classList.toggle("is-active");
                });
              }
            );
          });
          elLink.nextElementSibling.addEventListener("mouseleave", function () {
            elLink.nextElementSibling.style.display = "none";
            if (elLink.classList.contains("is-active"))
              elLink.classList.toggle("is-active");
          });
        }
      }
    );
  }
});

// header slide
var elem = document.querySelector(".carousel");
var flkty = new Flickity(elem, {
  cellAlign: "left",
  contain: true,
  autoPlay: true,
  imagesLoaded: true,
  percentPosition: false,
  pageDots: false,
  wrapAround: true,
});

var elem_merchan = document.querySelector("#merchan .carousel");
var flkty_merchan = new Flickity(elem_merchan, {
  cellAlign: "left",
  contain: true,
  autoPlay: true,
  imagesLoaded: true,
  percentPosition: false,
  pageDots: false,
  wrapAround: true,
});

var elem_brands = document.querySelector("#brands .carousel");
var flkty_brands = new Flickity(elem_brands, {
  cellAlign: "left",
  contain: true,
  autoPlay: true,
  imagesLoaded: true,
  percentPosition: false,
  pageDots: false,
  groupCells: 2,
  wrapAround: true,
});
