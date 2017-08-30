$(document).ready(function(){
  var images = ["../Final Project/images/storyimages/mynyimg.jpeg","../Final Project/images/storyimages/mynyimg2.jpeg","../Final Project/images/storyimages/mynyimg3.jpeg","../Final Project/images/storyimages/mynyimg4.jpeg","../Final Project/images/storyimages/mynyimg5.jpeg",];
  var current = 0;
  //select the right arrow. Create an on click function
  $("#rightbutton").on("click",function(){
    //runs. create if statement to go through the array
    if (current<images.length-1){
      current++;
      $("img").attr("src",images[current]);
    }else{
      current=0;
      $("img").attr("src",images[current]);
    }
  });
  $("#leftbutton").on("click",function(){
    if (current>0){
      current--;
      $("img").attr("src",images[current]);
    }else{
      current=images.length-1;
      $("img").attr("src",images[current]);
    }
  });

  //runs. create if statement to go through the array
  //else do nothing
});
