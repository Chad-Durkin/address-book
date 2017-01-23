function Contact(first, last, street, city, state) {
  this.firstName = first;
  this.lastName = last;
  this.streetName = street;
  this.cityName = city;
  this.stateName = state;
};

Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
  event.preventDefault();

  var inputtedFirstName = $("input#new-first-name").val();
  var inputtedLastName = $("input#new-last-name").val();
  var inputtedStreetName = $("input#new-street-name").val();
  var inputtedCityName = $("input#new-city-name").val();
  var inputtedStateName = $("input#new-state-name").val();

  var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedStreetName, inputtedCityName, inputtedStateName);

  $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

  $(".contact").last().click(function() {
  $("#show-contact").show();
  $("#show-contact h2").text(newContact.firstName);
  $(".first-name").text(newContact.firstName);
  $(".last-name").text(newContact.lastName);
  $(".street-name").text(newContact.streetName);
  $(".city-name").text(newContact.cityName);
  $(".state-name").text(newContact.stateName);
});

  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input#new-street-name").val("");
  $("input#new-city-name").val("");
  $("input#new-state-name").val("");
});
})
