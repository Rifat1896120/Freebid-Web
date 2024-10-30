let year1 = document.querySelector(".year1");
let year2 = document.querySelector(".year2");
let doler1 = document.querySelector(".doler1");
let doler2 = document.querySelector(".doler2");
let panel_name1 = document.querySelector(".panel-name1");
let panel_name2 = document.querySelector(".panel-name2");
let panel_dsc1 = document.querySelector(".panel-dsc1");
let panel_dsc2 = document.querySelector(".panel-dsc2");
let panel1_p2 = document.querySelector(".panel1-p2");
let panel1_p3 = document.querySelector(".panel1-p3");

$(function () {
  let scrollLink = $(".page-scroll");

  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();

    scrollLink.each(function () {
      let scrollLocation = $(this.hash).offset().top - 70;

      if (scrollLocation <= scrollTop) {
        $(this).parent().addClass("active");

        $(this).parent().siblings().removeClass("active");
      }
    });
  });

  $(".select-item1").click((click) => {
    if (click) {
      year1.innerHTML = "/month";
      year2.innerHTML = "/month";
      doler1.innerHTML = "$0";
      doler2.innerHTML = "$99";
      panel_name1.innerHTML = "Basic Class";
      panel_name2.innerHTML = "Business Class";
      panel_dsc1.innerHTML = "For small teams";
      panel_dsc2.innerHTML = "For Best opportunities";
      panel1_p2.innerHTML = "1,00's of Templates";
      panel1_p3.innerHTML = " ";
    }
  });

  $(".select-item2").click((click) => {
    if (click) {
      year1.innerHTML = "/year";
      year2.innerHTML = "/year";

      doler1.innerHTML = "$700";
      doler2.innerHTML = "$1188";
      panel_name1.innerHTML = "Pro Class";
      panel_name2.innerHTML = "Profational";
      panel_dsc1.innerHTML = "For small teams";
      panel_dsc2.innerHTML = "For Best opportunities";
      panel1_p2.innerHTML = "1,000's of Templates";
      panel1_p3.innerHTML = " Blog Support Tools";
    }
  });

  $(".select-item1").click((e) => {
    if (e) {
      $(".select-item1").addClass("select-main-color");
      $(".select-item2").removeClass("select-main-color");
    }
  });

  $(".select-item2").click((e) => {
    if (e) {
      $(".select-item2").addClass("select-main-color");
      $(".select-item1").removeClass("select-main-color");
    }
  });

  $(window).scroll(() => {
    let scrollTop = $(this).scrollTop();

    if (scrollTop > 20) {
      $(".navarea").addClass("stikey");
    } else {
      $(".navarea").removeClass("stikey");
    }
  });

  AOS.init();

  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      items: 1,
      dots: true,
      margin: 10,
      nav: true,
      loop: true,
      autoplay: true,
      smartSpeed: 1000,
      autoplaySpeed: 1500,
      autoplayTimeout: 5000,

      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },

        990: {
          items: 1,
        },
      },
    });
  });

  $("#menu-ntn").on("click", function () {
    $(".dropDown ul").slideToggle();
  });
  $(".dropDown a").on("click", function (e) {
    $(".dropDown ul").slideToggle();
  });

  $(".button1").click(() => {
    $(".ans1").slideToggle();
  });

  $(".button2").click(() => {
    $(".ans2").slideToggle();
  });

  $(".button3").click(() => {
    $(".ans3").slideToggle();
  });

  $(".button4").click(() => {
    $(".ans4").slideToggle();
  });

  $(".button5").click(() => {
    $(".ans5").slideToggle();
  });
});
