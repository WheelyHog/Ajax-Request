
var requestUrl = 'http://api.apixu.com/v1/current.json?key=087ab95ab1a146eaaf294757170412';
var city = '';

$('select').change(function () {
    $( "select option:selected" ).each(function() {
        city = $( this ).text();

        console.log(city);
    });

    $.ajax({url: requestUrl,
           data: {'q' : city} })
        .done (function (response) {
            console.log(response);
            console.log($('#town'));
            $('#town').get(0).innerHTML = response.location.name;
            $('#temp').get(0).innerHTML = response.current.temp_c;
            $('#wind').get(0).innerHTML = response.current.wind_kph;
            $('#img').get(0).src = response.current.condition.icon;

            console.log(response.current.temp_c);
        })
        .fail (function (response) {
            inner.get(0).innerHTML = 'An error occurred during your request: ' +  response.status + ' ' + response.statusText;
        })

})