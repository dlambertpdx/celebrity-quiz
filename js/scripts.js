// Backend Logic
var choose = function(dine, movie) {
  if(dine === 'pizza' && movie === 'drama') {
    return 'img/carrot.jpg'
  }
  if(dine === 'molecule' && movie === 'comedy') {
    return 'img/carrot.jpg'
  }
  if(dine === 'fast' && movie === 'horror') {
    return 'img/carrot.jpg'
  }
  if(dine === 'homemade' && movie === 'artsy') {
    return 'img/carrot.jpg'
  }

  if(dine === 'pizza' && movie === 'drama') {
    return 'img/iggy.jpg'
  }
  if(dine === 'molecule' && movie === 'comedy') {
    return 'img/iggy.jpg'
  }
  if(dine === 'fast' && movie === 'horror') {
    return 'img/iggy.jpg'
  }
  if(dine === 'homemade' && movie === 'artsy') {
    return 'img/iggy.jpg'
  }

  if(dine === 'pizza' && movie === 'drama') {
    return 'img/steve.jpg'
  }
  if(dine === 'molecule' && movie === 'comedy') {
    return 'img/steve.jpg'
  }
  if(dine === 'fast' && movie === 'horror') {
    return 'img/steve.jpg'
  }
  if(dine === 'homemade' && movie === 'artsy') {
    return 'img/steve.jpg'
  }

  if(dine === 'pizza' && movie === 'drama') {
    return 'img/lindsay.jpg'
  }
  if(dine === 'molecule' && movie === 'comedy') {
    return 'img/lindsay.jpg'
  }
  if(dine === 'fast' && movie === 'horror') {
    return 'img/lindsay.jpg'
  }
  if(dine === 'homemade' && movie === 'artsy') {
    return 'img/lindsay.jpg'
  }

  if(dine === 'pizza' && movie === 'drama') {
    return 'img/linda.jpg'
  }
  if(dine === 'molecule' && movie === 'comedy') {
    return 'img/linda.jpg'
  }
  if(dine === 'fast' && movie === 'horror') {
    return 'img/linda.jpg'
  }
  if(dine === 'homemade' && movie === 'artsy') {
    return 'img/linda.jpg'
  }

  if(dine === 'pizza' && movie === 'drama') {
    return 'img/meryl.jpg'
  }
  if(dine === 'molecule' && movie === 'comedy') {
    return 'img/meryl.jpg'
  }
  if(dine === 'fast' && movie === 'horror') {
    return 'img/meryl.jpg'
  }
  if(dine === 'homemade' && movie === 'artsy') {
    return 'img/meryl.jpg'
  }
}

// front-end Logic
$(document).ready(function() {
  $('input#tpUnder').click(function() {
    window.location = "img/tp.jpg"
  });
  $('input#tpOnTop').click(function() {
    window.location = "img/tp.jpg"
  });
});
