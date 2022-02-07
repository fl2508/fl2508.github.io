$(document).ready(function () {
  $("#navbar-phases").click(function () {
    $("#phases-dropdown").toggle();
  });
  $("#li.tab1").addClass("active");
  $("templates-prototype").addClass("active");

  $("uj1-tab").click(function () {
    $("#uj1").show();
    $("#uj1").addClass("active");
    console.log("showing uj1");
  });
  $("uj2-tab").click(function () {
    $("#uj2").show();
    $("#uj2").addClass("active");
    console.log("showing uj2");
  });
  $("uj3-tab").click(function () {
    $("#uj3").show();
    $("#uj3").addClass("active");
    console.log("showing uj3");
  });
  $("uj4-tab").click(function () {
    $("#uj4").show();
    $("#uj4").addClass("active");
    console.log("showing uj4");
  });
  $("cf-process").click(function () {
    $("#cf-process").show();
    $("#cf-process").addClass("active");
    console.log("showing cf-process");
  });

  $("mind-maps").click(function () {
    $("#mind-maps").show();
    $("#mind-maps").addClass("active");
    console.log("showing mind-maps");
  });

  $("affinity-map").click(function () {
    $("#affinity-map").show();
    $("#affinity-map").addClass("active");
    console.log("showing affinity-map");
  });

  $("lo-fi").click(function () {
    $("#lo-fi").show();
    $("lo-fi").addClass("active");
    console.log("showing lo-fi");
  });

  $("mid-fi").click(function () {
    $("#mid-fi").show();
    $("mid-fi").addClass("active");
    console.log("showing mid-fi");
  });

  $("hi-fi").click(function () {
    $("#hi-fi").show();
    $("hi-fi").addClass("active");
    console.log("showing hi-fi");
  });

  $("#expand-navs").click(function () {
    console.log("trying to toggle");
    $("#navbarSupportedContent").toggle();
  });
});
