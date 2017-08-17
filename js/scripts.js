$(document).ready(function(){
 $("form").submit(function(event){
   event.preventDefault();
   var nameInput = $("#name").val();
   var dine = $("#dine").val();
   var movie = $("input:radio[name=movie]:checked").val();
   var result;

   if (dine === "homemade" && movie === "horror") {
       result = "Linda Blair"
     } else if (dine === "homemade" && movie === "drama") {
       result = "Joan Crawford";
     } else if (dine === "homemade" && movie === "comedy") {
       result = "Jim Carrey";
     } else if (dine === "fast" && movie === "horror") {
       result = "Sid Haig";
     } else if(dine === "fast" && movie === "drama") {
       result = "Renee Zellweger";
     } else if (dine === "fast" && movie === "comedy") {
       result = "Sarah Silverman";
     } else if (dine === "pizza" && movie === "horror") {
       result = "Meryl Streep";
     } else if (dine === "pizza" && movie === "drama") {
       result = "Steve Carell";
     } else if (dine === "pizza" && movie === "comedy") {
       result = "Emma Stone";
     }


 $("#output").text("Your celebrity match is " + result + "!");
 });
});
