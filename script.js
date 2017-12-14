
var requestUrl = 'http://api.apixu.com/v1/current.json?key=087ab95ab1a146eaaf294757170412';
var city = '';

$('select').change(function () {
    $( "select option:selected" ).each(function() {
        city = $( this ).text();

         });

    $.ajax({url: requestUrl,
           data: {'q' : city} })
        .done (function (response) {

            $('#town').get(0).innerHTML = response.location.name;
            $('#temp').get(0).innerHTML = response.current.temp_c;
            $('#wind').get(0).innerHTML = response.current.wind_kph;
            $('#img').get(0).src = response.current.condition.icon;


        })
        .fail (function () {
            $('#town').get(0).innerHTML = 'N/A';
            $('#temp').get(0).innerHTML = 'N/A';
            $('#wind').get(0).innerHTML = 'N/A';
            $('#img').get(0).src = '#';

             })

})