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
    var arrCountrys = [];
    for(contry of jsonObj){ // in array
        arrCountrys.push(contry.name);
    }
    arrCountrys.sort(function (a, b) { // sort
      return a.localeCompare(b);
    });
    for (var i = 0; i < arrCountrys.length; i++) { //write
        countrysDiv.innerHTML = (!i)? arrCountrys[i] :countrysDiv.innerHTML + ", " + arrCountrys[i];
    };
}, function(err) {
    console.log('ajax error');
});