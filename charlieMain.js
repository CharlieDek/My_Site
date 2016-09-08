var prevH = 0;
var prevW = 0;

var heightSwitch = 640;
var widthSwitch = 730;

//if about Image is 0, nothing. If it is 1, jelly is showing. If it is 2, photo is showing.
var aboutImage = 0;

function isSmall(){
  if (widthSwitch > prevW){
    return true;
  }
}

function toggleSmall(){
  //Home
    $('#homeButtons').addClass('homeButtonSpacing');  
    $('#to_video').addClass('smallHomeButtons');
    $('#to_writing').addClass('smallHomeButtons');
    $('#to_about').addClass('smallHomeButtons'); 
    $('.homes').addClass('smallHome');
    $('.homes').css('display', 'block');
    $('.marky').addClass('markySmall');
    $('.homeTD').addClass('tdSmall');


  //video
    $('.balls').addClass('smallBalls');
    $('.videoBig').addClass('videoSmall');
    $('.yel').addClass('smallerContent');
    $('.content_1').addClass('smallerContentDiv')
    $(".videoBig").css("display", "block");

  //writing
    $('.hands_box').addClass('smallHandBox');
    $('.aYellow').addClass('smallerContent');
    $('.content_2').addClass('smallerContentWriting')
    $('.aYellow').addClass('smallerContentWriting');
    $('.writingBig').addClass('writingSmall');
    $(".aYellow").css("display", "block"); 
    $('.cover2').addClass('cover2Border');

  //about
    $('.options2').css('display', 'none');
    $('.content_3').addClass('content_3_small');
    $('.pContact').addClass('smallContact');
    $('.jellyButton').addClass('smallContact');
    $('.contactDiv').addClass('smallContactDiv');
    $('.aboutBig').addClass('aboutSmall');
    $(".jelly").addClass('smallJelly'); 
    $(".charlieButton").css('display', 'none');

  //other
    $(".onlyBig").css("display", "none");

}

function toggleBig(){
  //home
    $('#homeButtons').removeClass('homeButtonSpacing');  
    $('#to_video').removeClass('smallHomeButtons');
    $('#to_writing').removeClass('smallHomeButtons');
    $('#to_about').removeClass('smallHomeButtons'); 
    $('.homes').removeClass('smallHome');
    $('.homes').css('display', 'inline');
    $('.marky').removeClass('markySmall');
    $('.homeTD').removeClass('tdSmall');

  //video
    $('.balls').removeClass('smallBalls');
    $('.videoBig').removeClass('videoSmall');
    $('.yel').removeClass('smallerContent');
    $('.content_1').removeClass('smallerContentDiv')
    $(".videoBig").css("display", "none");
    //here

  //writing
    $('.hands_box').removeClass('smallHandBox');
    $('.aYellow').removeClass('smallerContent');
    $('.content_2').removeClass('smallerContentWriting')
    $('.aYellow').removeClass('smallerContentWriting');
    $('.writingBig').removeClass('writingSmall');
    $(".aYellow").css("display", "inline");
    $('.cover2').removeClass('cover2Border');


  //about
    $('.options2').css('display', 'inline');
    $('.content_3').removeClass('content_3_small');
    $('.pContact').removeClass('smallContact');
    $('.jellyButton').removeClass('smallContact');
    $('.contactDiv').removeClass('smallContactDiv');
    $('.aboutBig').removeClass('aboutSmall');
    $(".jelly").removeClass('smallJelly');  
    $(".charlieButton").css('display', 'inline');


  //other
    $(".onlyBig").css("display", "inline");

}


//TODO: make more intelligent than toggle! 
function shouldSwitch(w, h, prevW, prevH){

  if (prevW < widthSwitch && w > widthSwitch){
    toggleBig();
  } else if (prevW > widthSwitch && w < widthSwitch){
    toggleSmall();
  }/* else if (prevH > heightSwitch && h < heightSwitch){
    toggleBig();
    } else if (prevH < heightSwitch && h > heightSwitch){
    toggleSmall();
    }*/
  return 0;
}

window.addEventListener('load', function(){
  var w = jQuery(window).width()
  var h = jQuery(window).height()
  shouldSwitch(w, h, widthSwitch + 1, heightSwitch + 1);

  prevH = h;
  prevW = w;
  if (isSmall()){
    $('.marky').css('display', 'block')
  }
});

$(window).on('resize', function(e){
  var w = jQuery(window).width()
  var h = jQuery(window).height()

  if (shouldSwitch(w, h, prevW, prevH)){
      toggleAll();
  } 
  prevW = w;
  prevH = h;  
});



function toJelly(){
  if (aboutImage == 2 || aboutImage == 0){
    aboutImage = 1;
  } else{
    aboutImage = 0;
  }
}

function toCharlie(){
  if (aboutImage == 1 || aboutImage == 0) {
    aboutImage = 2;
  } else {
    aboutImage = 0
  }
}

$('.jellyButton').click(function() {
  if (aboutImage == 2){
    $('.charlie_photo').toggleClass('hidden2');
    window.setTimeout(toJelly, 900);
  } else{
    toJelly();
  }
  $('.jelly').toggleClass('hidden2');
});

$('.charlieButton').click(function() {
  if (aboutImage == 1){
    $('.jelly').toggleClass('hidden2');
    window.setTimeout(toCharlie, 900);
  }else{
    toCharlie();
  }
  $('.charlie_photo').toggleClass('hidden2');
});




$("#b4").click(function() {
  $('.bg').toggleClass('hidden');
  $('.hands').toggleClass('hidden');
  $('.hands_box').toggleClass('hidden');  
  $('.hands_cover').toggleClass('hidden');  
  $(".options").css("z-index", 2);

  $('.content_2').toggleClass('hidden'); 
  $("#b4").toggleClass('hidden');
//  $("#writingBig").toggleClass('hidden');
  window.setTimeout(comeBack, 1000);

});

function comeBack(){
  $("#to_about").toggleClass('bounceOutLeft');
  $("#to_writing").toggleClass('bounceOutLeft');
  $("#to_video").toggleClass('bounceOutLeft');
  $(".hit-the-floor").toggleClass('bounceOutLeft') 
  $(".content_2").css("display", "none");
  $(".aYellow").css("display", "none");
  $('.options2').css('display', 'none');
  

}



$("#to_video").click(function() {
  $('.videoHome').toggleClass('hidden');
  $(".options").css("z-index", -2);
  $(".balls").css("display", "inline");

  if (isSmall()){
    $(".videoBig").css("display", "block");
    $(".aYellow").css("display", "block");

  } else {
    $(".aYellow").css("display", "inline");
    $(".videoBig").css("display", "inline");
  }

  $('.y1').toggleClass('hidden');
  $('.y2').toggleClass('hidden');
  $('.y3').toggleClass('hidden');
  $('.slider').toggleClass('closed');

//  	$('.bg').toggleClass('bg-active-one');
//  	window.setTimeout(partB, 2001);

});

$(".videoHome").click(function() {

  $('.slider').toggleClass('closed');
  $('.videoHome').toggleClass('hidden');
  $('.y1').toggleClass('hidden');
  $(".options").css("z-index", 5);
  $('.y2').toggleClass('hidden');
  $('.y3').toggleClass('hidden');  
  $(".balls").css("display", "none");
  $(".videoBig").css("display", "none");  
});



//TODO: toggle to yellow
$("#to_writing").click(function() {
  $('.bg').toggleClass('hidden');
  $(".content_2").css("z-index", 5);
  $(".options").css("z-index", -2);

  $('.options2').css('display', 'inline');

  $('#to_video').toggleClass('bounceOutLeft');
  $('#to_writing').toggleClass('bounceOutLeft');
  $('#to_about').toggleClass('bounceOutLeft');
  $(".hit-the-floor").toggleClass('bounceOutLeft')  
  window.setTimeout(transition2a, 1401);
});

function transition2a(){
  if (isSmall()){
    $(".content_2").css("display", "block");
    $(".aYellow").css("display", "block");
  } else {
    $(".content_2").css("display", "inline");
    $(".aYellow").css("display", "inline");   
  }
  $("#b4").toggleClass('hidden');
  $('.hands').toggleClass('hidden');
  $('.hands_box').toggleClass('hidden');
  $('.hands_cover').toggleClass('hidden');  
  $('.content_2').toggleClass('hidden');  
}

function whiteEnter(){
  if (isSmall()){
    $(".aboutBig").css("display", "block");
    $(".content_3").css("display", "block");
    $(".videoBig").css("display", "block");
    $(".contactDiv").css("display", "block");
    $(".jelly").css("display", "block");

  } else {
    $(".aboutBig").css("display", "inline");
    $(".videoBig").css("display", "inline");
    $(".content_3").css("display", "inline");
    $(".contactDiv").css("display", "inline");
    $(".jelly").css("display", "inline");
    $(".charlie_photo").css("display", "inline");

  }  
  $('.jelly').toggleClass('hidden');
  $('.charlie_photo').toggleClass('hidden');
  $('.content_3').toggleClass('hidden');
  $('.jellyButton').toggleClass('hidden');
  $('.contactDiv').toggleClass('hidden');
  $(".aboutHome").toggleClass('hidden');


}

$("#to_about").click(function() {
  $('.transform').toggleClass('bg-active-three');
  $('.bg').toggleClass('hidden');

  $("#to_video").toggleClass('bounceOutLeft');
  $("#to_writing").toggleClass('bounceOutLeft');
  $("#to_about").toggleClass('bounceOutLeft');
  $(".hit-the-floor").toggleClass('bounceOutLeft')  

  $(".content_3").css("z-index", 5);
  $(".aboutHome").css("z-index", 5);
  //todo other button brings these all back nice
  $(".cover2").toggleClass('hiddenFast');

  
  $('.aboutBig').toggleClass('hidden');  


  window.setTimeout(whiteEnter, 1201);
  

});


function whiteExitb(){
    $(".cover2").toggleClass('hiddenFast');
    $(".aboutBig").css("display", "none");
    $(".videoBig").css("display", "none");
    $(".content_3").css("display", "none");
    $(".contactDiv").css("display", "none");
    $(".jelly").css("display", "none");
    $(".charlie_photo").css("display", "none");
}

function whiteExit(){
  $('.bg').toggleClass('hidden');
  $("#to_video").toggleClass('bounceOutLeft');
  $("#to_writing").toggleClass('bounceOutLeft');
  $("#to_about").toggleClass('bounceOutLeft');
  $(".hit-the-floor").toggleClass('bounceOutLeft')  
  window.setTimeout(whiteExitb, 900);
}

$(".aboutHome").click(function() {
  $('.transform').toggleClass('bg-active-three');
  $(".aboutHome").css("z-index", 0);
  $(".aboutHome").toggleClass('hidden');
  $('.aboutBig').toggleClass('hidden');  
  $(".content_3").css("z-index", -2);
  $(".videoBig").css("display", "none");


  $('.contactDiv').toggleClass('hidden');
  $('.jelly').toggleClass('hidden');
  $('.charlie_photo').toggleClass('hidden');
  $('.content_3').toggleClass('hidden');

  $('.jellyButton').toggleClass('hidden');     

  //todo other button brings these all back nice


  window.setTimeout(whiteExit, 1501);



});

