


 $(function(){
      var input = $("#phone"),
      output = $("#output"),
      tags = $("#tags");

    var availableTags = ["Парикмахер","Токарь","Слесарь","Секретарь",
    "Сторож","Электрик","Сварщик","Медсестра","Грузчик","Врач"];

    $("#tags").autocomplete({
      source: availableTags,
      position: { my : "right top-4", at: "right bottom" },      
       create: function () {
         $(this).data('ui-autocomplete')._renderItem = function (ul, item) {
          var begPos = item.label.toLocaleLowerCase().indexOf(tags.val().toLocaleLowerCase());          
          item.label = item.label.substr(0, begPos) + "<b>" + item.label.substr(begPos);
          var endPos = item.label.toLocaleLowerCase().indexOf(tags.val().toLocaleLowerCase()) + tags.val().length;
          item.label = item.label.substr(0, endPos) + "</b>" + item.label.substr(endPos);          
            return $('<li>')
              .append(item.label)
              .appendTo(ul);
          };
        }  
    });




    input.intlTelInput({
      nationalMode: true,
      onlyCountries:["ru", "us", "ch", "jp", "sm"],
      defaultCountry:"ru",
      utilsScript: "js/utils.js" // just for formatting/placeholders etc
    });


  });
