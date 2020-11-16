// For carousel Single button
$("#carouselButton").click(function () {
  if ($("#carouselButton").children("span").hasClass("fa-pause")) {
    $("#mycarousel").carousel("pause");
    $("#carouselButton").children("span").removeClass("fa-pause");
    $("#carouselButton").children("span").addClass("fa-play");
  } else if ($("#carouselButton").children("span").hasClass("fa-play")) {
    $("#mycarousel").carousel("cycle");
    $("#carouselButton").children("span").removeClass("fa-play");
    $("#carouselButton").children("span").addClass("fa-pause");
  }
});

// For the carousel Double buttons (old script)
// $(document).ready(function () {
//   $("#mycarousel").carousel({ interval: 2000 });

//   $("#carousel-pause").click(function () {
//     $("#mycarousel").carousel("pause");
//   });

//   $("#carousel-play").click(function () {
//     $("#mycarousel").carousel("cycle");
//   });
// });

//For the tooltip at the reserve table button
// $(document).ready(() => {
//   $('[data-toggle="tooltip"]').tooltip();
// });

//   Login Modal
$("#loginButton").click(() => {
  // Show the login modal once the login button is clicked
  $("#loginModal").modal("show");
});

$("#closeModalBtn").click(() => {
  // Hide the login modal once the "x" button is clicked
  $("#loginModal").modal("hide");
});

// Reserve Table Modal
$("#reserveTableBtn").click(() => {
  // Show the login modal once the login button is clicked
  $("#reserveTable").modal("show");
});

$("#closeTableModal").click(() => {
  // Hide the login modal once the "x" button is clicked
  $("#reserveTable").modal("hide");
});
