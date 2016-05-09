


 $(function(){
    var availableTags = ["Парикмахер","Токарь","Слесарь","Секретарь",
    "Сторож","Электрик","Сварщик","Медсестра","Грузчик","Врач"];

    $("#tags").autocomplete({
      source: availableTags
    });



    var input = $("#phone"),
      output = $("#output"),
      tags = $("#tags")
      ;

    input.intlTelInput({
      nationalMode: true,
      onlyCountries:["ru", "us", "ch", "jp", "sm"],
      defaultCountry:"ru",
      utilsScript: "js/utils.js" // just for formatting/placeholders etc
    });

    tags.bind('keyup', function(e){
      var top = $('.ui-widget-content').css('top');
      console.log(top);
      $('#tags .ui-widget-content').css('position', top);
    });
  });
