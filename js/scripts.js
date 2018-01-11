$(document).ready(function() {
  var rideHeight = parseInt(prompt("How tall are you?"));

 if(rideHeight >= 2 && rideHeight<3){
   $('#ride1').addClass("highlight");
   $('#ride3').addClass("highlight");
 }
 else if (rideHeight >= 3 && rideHeight<4.9) {
    $('#ride1').addClass("highlight");
    $('#ride2').addClass("highlight");
    $('#ride3').addClass("highlight");
 }
 else if (rideHeight >=5) {
   $('#ride2').addClass("highlight");
   $('#ride3').addClass("highlight");
   $('#ride4').addClass("highlight");
 }
 else if (rideHeight > 0) {
   $('#ride3').addClass("highlight");
 }
});
