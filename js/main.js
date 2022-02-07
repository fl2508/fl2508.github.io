

$(document).ready(function(){
  $(".automating_name").mouseover(function(){
   $(".automating_text").stop().slideDown();

  });
  $(".automating_text").mouseout(function(){
   $(".automating_text").slideUp();
  });
 });

 $(document).ready(function(){
   $(".ticketing_name").mouseover(function(){
    $(".ticketing_text").stop().slideDown();

   });
   $(".ticketing_text").mouseout(function(){
    $(".ticketing_text").slideUp();
   });
  });


/*
function setColor(){

  var backgroundColors =['#FFE7D6', '#DDF9F0', '#FFF4D5', "#F6D5FF"]
  var colorChoice=(backgroundColors[Math.floor(Math.random()*backgroundColors.length)])
  $(':root').css('--pop-color2', colorChoice);
} */
