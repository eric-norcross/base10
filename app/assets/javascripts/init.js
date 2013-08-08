$(document).on("focus", ".clear-input", function(event) {
  if ($(this).val() == $(this).attr("data-message")) {
    $(this).val("");
  }
});

$(document).on("blur", ".clear-input", function(event) {
  if ($(this).val() == ""){
    $(this).val($(this).attr("data-message"));
  }
});

$(document).ready(function(){
  $("a.print").click(function(event) {
    window.print();
  });
  
  $(".gallery").each(function(index) {
    var gallery = new Gallery($(this));
    gallery.init();
  });

  $('.carousel').carousel({
    interval: 3000
  });

  $('.cloudinary-fileupload').fileupload('option', 'replaceFileInput', false);
});