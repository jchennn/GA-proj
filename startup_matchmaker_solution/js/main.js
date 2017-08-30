
$(document).ready(function(){
  $("#hamburger").on("click",function(){
    if ($(this).hasClass("burger")){
        $("#burgerdrop").slideUp();
        $("nav li").hide();
    }
    else{
      $("#burgerdrop").slideDown();
      $("nav li").show();
    }
    $(this).toggleClass("burger");
  });
});
//create a click event that

//if has a class, remove class()
//else add class
