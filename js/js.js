$( "input" )
  .keyup(function() {
    var value = $( this ).val();
    $( "li" ).text( value );
  })
  .keyup();