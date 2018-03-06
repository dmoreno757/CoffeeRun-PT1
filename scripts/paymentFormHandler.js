(function (window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

     

  $("#pay").on("submit", function() {
    event.preventDefault();
    var data = {};
      $(this).serializeArray().forEach(function (item) {
        data[item.name] = item.value;
        console.log("input correctly");
      });
      $("#payConfirmation").text("Thank you for your payment " + data.username);
      $("#sticky").modal({});
      console.log(data);
    });

    

  window.App = App;
})(window);
