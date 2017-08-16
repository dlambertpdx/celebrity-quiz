$(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var age = parseInt($("input#age").val());
    var date = $("select#date").val();
    var music = $("input:radio[name=music]:checked").val();
    var match;

    if(date === "thrill") {
      if(music === "rock") {
        match = "white";
      } else if(date === "vacation") {
        if(music === "classical") {
          match = "feldman";
        } else if(date === "dine") {
          if(music ==== "country") {
            match = "seinfeld";
          }
        }
      }
    }
$(".output").text(match);
  });
});
