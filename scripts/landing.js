var pointsarray = document.getElementsByClassName('point');  

 var revealPoint = function(pt) {
                    pt.style.opacity = 1;
                    pt.style.transform = "scaleX(1) translateY(0)";
                    pt.style.msTransform = "scaleX(1) translateY(0)";
                    pt.style.WebkitTransform = "scaleX(1) translateY(0)";
                 };

var animatePoints = function(pointsarray) {
 
              /*  var revealPoint = function(pt) {
                     points[pt].style.opacity = 1;
                     points[pt].style.transform = "scaleX(1) translateY(0)";
                     points[pt].style.msTransform = "scaleX(1) translateY(0)";
                     points[pt].style.WebkitTransform = "scaleX(1) translateY(0)";
                 };*/
 
      
             /*   for (var i=0;i<points.length;i++)
                    {
                        revealPoint(i);
                    }*/

            forEach(pointsarray,revealPoint);
     
 
             };    
window.onload = function() {
    if(window.innerHeight > 950){
        animatePoints(pointsarray);
    }
    
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top -window.innerHeight + 200;
    window.addEventListener('scroll',function(event) {
        console.log("Current offset from the top is " + sellingPoints.getBoundingClientRect().top + " pixels" );
       
    if(document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance){
        animatePoints(pointsarray);
    }
     });
}
