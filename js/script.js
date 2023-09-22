$(function() {

  $( ".rate li a" ).on( "click", function(event) {
    var target = event.target;

    $(".rate li a").removeClass('active');
    $(this).addClass('active');
    console.log(target.innerHTML)
    $( "#_thankyou .txt03 ._rate" ).text(target.innerHTML);
  });

  $( ".btn01" ).on( "click", function() {
    $( "#_rating" ).css( {'display': 'none'});
    $( "#_thankyou" ).css( {'display': 'block'});
  } );
})