'use strict';
import 'bootstrap/dist/js/bootstrap';
import 'owl.carousel2/dist/owl.carousel';
import './main';
$(function () {

  // $(document).on("click", "#alert", function(){
  //   alert("clicked");
  // });

  // list-Home Color Start
  // let siteNav = $('#header-landing .menu-bar .site-nav .mega-menu a');

  // $(function () {
  //   siteNav.each(function () {
  //     var location = window.location.href;
  //     var link = this.href;
  //     if (location == link) {
  //       $(this).parent().addClass('active');
  //     }
  //   });
  // });
  // list-Home Color End

  // Header in toggleButton Start
  let search = $(".search");
  let searchDrawer = $(".search-drawer");
  let searchExit = $(".search-bar_exit");
  let collection = $("#collection");
  let collectionMenu = $("#collection-menu");
  let shop = $("#shop");
  let shopMenu = $("#shop-menu");
  let coffee = $("#coffee");
  let coffeeMenu = $("#coffee-menu");
  let chatfood = $("#chatfood");
  let chatfoodMenu = $("#chatfood-menu");
  let snackes = $("#snackes");
  let snackesMenu = $("#snackes-menu");
  let pages = $("#pages");
  let pagesMenu = $("#pages-menu");


  let listExit = $(".menu-list-head #list_exit");
  let close = $(".close");
  let mainMenu = $(".main-menu");
  let headerMobile = $(".header-mobile");

  search.on("click", function () {
    searchDrawer.css({
      "width": "100vw",
      "height": "100vh",
      "clip-path": "circle(100%)"
    });
  });

  searchExit.on("click", function () {
    searchDrawer.css({
      "width": "0",
      "height": "0",
      "clip-path": "circle(0)"
    });
  });

  collection.on("click", function () {
    collectionMenu.css({
      "left": "0"
    });
  });

  shop.on("click", function () {
    shopMenu.css({
      "left": "0"
    });
  });

  coffee.on("click", function () {
    coffeeMenu.css({
      "left": "0"
    });
  });

  chatfood.on("click", function () {
    chatfoodMenu.css({
      "left": "0"
    });
  });

  snackes.on("click", function () {
    snackesMenu.css({
      "left": "0"
    });
  });

  pages.on("click", function () {
    pagesMenu.css({
      "left": "0"
    });
  });

  listExit.on("click", function () {
    collectionMenu.css({
      "left": "-337px"
    }) && shopMenu.css({
      "left": "-337px"
    }) && coffeeMenu.css({
      "left": "-337px"
    }) && chatfoodMenu.css({
      "left": "-337px"
    }) && snackesMenu.css({
      "left": "-337px"
    }) && pagesMenu.css({
      "left": "-337px"
    });
  });

  close.on("click", function () {
    mainMenu.css({
      "left": "-337px"
    });
  });

  headerMobile.on("click", function () {
    mainMenu.css({
      "left": "0"
    });
  });
  // Header in toggleButton End



  // Header Scroll Start
  let headerLanding = $("#header-landing");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 121) {
      headerLanding.css({
        "position": "fixed",
        "background-color": "#301914"
      })
    } else {
      headerLanding.css({
        "position": "absolute",
        "background-color": "transparent"
      })
    }
  });
  // Header Scroll End

  // Owl-Carousel-One Start
  $('.owl-c-one').owlCarousel({
    loop: true,
    dots: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  });
  // Owl-Carousel-One End


  // Owl-Carousel-Two Start
  $('.owl-c-two').owlCarousel({
    loop: false,
    dots: false,
    nav: true,
    margin: 10,
    navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1000: {
        items: 4,
      }
    }
  });
  // Owl-Carousel-Two End

  // Owl-Carousel-Three Start
  $('.owl-c-three').owlCarousel({
    loop: false,
    dots: true,
    margin: 10,
    // autoWidth: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 4,
      },
      800: {
        items: 4,
      },
      1000: {
        items: 5,
      }
    }
  });
  // Owl-Carousel-Three End

});