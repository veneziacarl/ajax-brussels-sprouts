$('#get-dish').on('click', function(event) {
  event.preventDefault();

  // request a new dish and alert the user
  $.ajax({
    method: "GET",
    url: "/dishes/random.json",
    success: function(data){ alert(data); },
  });
});
