//var pointsarray = document.getElementsByClassName('point');  

var animatePoints = function() {
    
   /*          var revealPoint= function() {
                  $(this).css({
                  opacity: 1,
                  transform: 'scaleX(1) translateY(0)'
              });
                               
             }
             $.each($('.point'), revealPoint);
 
             };  */ 

 var revealPoint= function() {
                  $(this).css({
                  opacity: 1,
                  transform: 'scaleX(1) translateY(0)'
              });
                               
             }
             $.each($('.point'), revealPoint);
 
             };  

 $(window).load(function() {
//window.onload = function() {
  //  if(window.innerHeight > 950){
     if($(window).height()>950) {
        animatePoints();
        }
     });
                
    
   // var sellingPoints = document.getElementsByClassName('selling-points')[0];
  //  var scrollDistance = $('.sellingPoints').offset().top - $(window).height() +200;
   var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
  //  var scrollDistance = sellingPoints.getBoundingClientRect().top -window.innerHeight + 200;
    //window.addEventListener('scroll',function(event) {
    // console.log("Current offset from the top is " + sellingPoints.getBoundingClientRect().top + " pixels" );
     $(window).scroll(function(event) {  
   // if(document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance){
    //    animatePoints(pointsarray);
          if ($(window).scrollTop() >= scrollDistance) {
             animatePoints();
    }
     });
