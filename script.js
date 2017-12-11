$('#request').click (function() {
    $.ajax({url: 'https://api.myjson.com/bins/1afl4z',
            context: document.body})
        .done (function (response) {
        for (var key in response) {
            $('#value').get(0).innerHTML += response[key] + '<br>';
            //alert ('Ключ: ' + key + ' Значение: ' + response[key]);
        }
        //console.log(response.name);
    })
        .fail (function (response) {
            inner.get(0).innerHTML = 'An error occurred during your request: ' +  response.status + ' ' + response.statusText;
    })

    //console.log(response.readyState);
    });