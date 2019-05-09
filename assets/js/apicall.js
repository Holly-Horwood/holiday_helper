console.log("Hello World");
$( document ).ready(function() {
    console.log( "ready!" );
    $(".test").html("hello jquery rocks");
    
    $.get( "https://jsonplaceholder.typicode.com/todos/1", function( data ) {
  $( ".test" ).html( data.title );
  console.log(data);
});



});

