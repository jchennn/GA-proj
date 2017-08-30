//document ready
//Get document ready
$(document).ready(function(){
  //Make array of food images
  var images = ["images/food1.jpg","images/food2.jpg","images/food3.jpg","images/food4.jpg","images/food5.jpg","images/food6.jpg","images/food7.jpg","images/food8.jpg"];
  var current = 0;
  //event listeners on clicks to toggle images back and forth
  $("input[value='Skip']").on("click",function(){
    if (current<images.length-1){
      current++;
      $("img").attr("src",images[current])
    }else{
      current=0;
      $("img").attr("src",images[current]);
    }

    });
    $("input[value='Back']").on("click",function(){
      if (current>0){
        current--;
        $("img").attr("src",images[current]);
      }else
      current=images.length-1;
      $("img").attr("src",images[current]);
    });
    $("#your-vote").change(function(){
      $("img").attr("src",images[0]);
    });
  });
