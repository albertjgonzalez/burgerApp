$('#addBurger').on('click',(event) =>{
    var burger = $('#burgerName').val().trim()
   $.ajax("/addBurger", {
    type: "POST",
    data: {burger_name:burger}
  }).then(
    function() {
      console.log("added burger");
      // Reload the page to get the updated list
      location.reload();
    }
  );
  });

$('.eatBurger').on('click',(event) =>{
  var id = event.currentTarget.id;
    $.ajax('/eatBurger', {
      type: "PUT", 
      data: {burger_id:id}
    }).then(
      function(){
        console.log('deleted burger')
        location.reload();
      }
    )
    })