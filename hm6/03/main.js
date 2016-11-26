var doc = document;
var arrPlaces = [];

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
    for(contry of jsonObj){
        arrPlaces.push(contry.name);
    }
}, function(err) {
    console.log('ajax error');
});

placesInput.addEventListener("input", function(event){
    placesList.innerHTML = "";
    var val = event.target.value;
    if(val){
        for(var i = 0; i < arrPlaces.length; i++){
            if(new RegExp(val,"g").exec(arrPlaces[i])){
                var li = doc.createElement("li");
                li.innerText = arrPlaces[i]
                placesList.appendChild(li);
            }
        }
    }
});

placesList.addEventListener("click", function(event){
    var li = event.target;
    if(li.tagName === "LI"){
        placesInput.value = li.innerText;
        placesList.innerHTML = "";
    }
});