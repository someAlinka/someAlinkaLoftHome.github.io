var Promise = new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open("GET", 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', true);
    req.onload = function() {
        resolve(req.response);
    };
    req.onerror = function() {
        reject();
    };
    req.send();
});


Promise.then(function(response) {
    var jsonObj = JSON.parse(response);
    var arrPlaces = [];
    for(contry of jsonObj){ // in array
        arrPlaces.push(contry.name);
    }
    arrPlaces.sort(function (a, b) { // sort
      return a.localeCompare(b);
    });
    for (var i = 0; i < arrPlaces.length; i++) { //write
        placesDiv.innerHTML = (!i)? arrPlaces[i] :placesDiv.innerHTML + ", " + arrPlaces[i];
    };
}, function(err) {
    console.log('ajax error');
});