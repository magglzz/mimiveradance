$('document').ready(function(){


//accordian program
function showAnswerRole() {
  $('#answer-role').slideToggle();
  $(this).toggleClass('open');
}

function showAnswerGoal() {
  $('#answer-goals').slideToggle();
  $(this).toggleClass('open');
}

$('.answer').hide();

$('#myrole').click(showAnswerRole);
$('#goals').click(showAnswerGoal);

//Mobile menu
  $('#menu-btn').click(function() {
    // Open menu
    $('#menu-btn').toggleClass('active');

    if ($('#main-menu').hasClass('slide-in-top')) {
      $('#main-menu').toggle();
    } else {
      $('#main-menu').addClass('slide-out-top')
    }

    $('#main-menu').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
      if ($('#main-menu').hasClass('slide-in-top')){
        $('#main-menu').removeClass('slide-in-top')
      } else {
        $('#main-menu').removeClass('slide-out-top')
        $('#main-menu').addClass('slide-in-top')
        $('#main-menu').toggle();
      }
  });
  
  
  });
    });

 // $('#menu-btn').click(function() {
 //    // Find menu and show it
 //    $('#main-menu').slideToggle();
 //  });

/*function showMenu() {
  console.log('showmenu');
  $('.navigation').slideToggle();
  $('#menu-btn').toggleClass('active');
}
$('#menu-btn').click(showMenu);*/

//see my work scroll

  // listen for clicks on any anchor with
  // a `data-action="jump-section"` attribute
  // $( 'a[data-action="jump-section"]' ).click(function(event) {
  //   event.preventDefault();

  //   // Find the href for the anchor
  //   var namedAnchor = $(event.target).closest('a').attr('href');

  //   if (namedAnchor) {
  //     // Update the browser history
  //     history.pushState({}, '', namedAnchor);
  //     // Animate scroll to named anchor
  //     $('body').animate({scrollTop: $(namedAnchor).offset().top-120}, 500);
  //   }
  // });

  // Initialize Slick carousel
  // console.log('slick loaded');
  // $('.carousel').slick({
  //   dots: true,
  //   // infinite: false,
  //   speed: 300,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //       }
  //     }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    
  // });
  // function() {}
  // $.get('https://magglzz.github.io', function(result) {
  //   var text = $(result).find("#id").text();
  //   $('some element').text(text)
  //   console.log(result);
  // });