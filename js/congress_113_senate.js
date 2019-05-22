var url = "https://api.propublica.org/congress/v1/";

var data = $(function() {
    var misCabeceras = new Headers({
        'X-API-Key': 'SKzNT67W2EOm73kAt8h7eqwaWVvRM8T1SsCQKY7v'
    });

    var miInit = {
        method: 'GET',
        headers: misCabeceras,
        mode: 'cors',
        cache: 'default'
    };

    fetch(url, miInit)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
        });
        .catch(function() { console.log("error"); 
      	});
});