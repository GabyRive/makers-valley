$(document).ready(function() {
  $('select').material_select();

  $('.breadcrumb').click(function() {
    $('.active').removeClass('active');
    $(this).addClass('active');
  });

  $(function() {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function(event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
      " - $" + $("#slider-range").slider("values", 1));
  });

  $(function() {
    $("#slider-range-production").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function(event, ui) {
        $("#amount-production").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#amount-production").val("$" + $("#slider-range-production").slider("values", 0) +
      " - $" + $("#slider-range").slider("values", 1));
  });

});
