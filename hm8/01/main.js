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
    arrPlaces.sort(function (a, b) { // sort
      return a.localeCompare(b);
    });
    var source = listTemplate.innerHTML;
    var templateFn = Handlebars.compile(source);
    var template = templateFn({ list: arrPlaces });
    placesList.innerHTML = template;
}, function(err) {
    console.log('ajax error');
});

placesInput.addEventListener("input", function(event){
    var val = event.target.value;
    var listElements = placesList.getElementsByTagName("li");
    for(var i = 0; i < arrPlaces.length; i++){
        var isMatch = false;
        try{
            var isMatch = new RegExp(val,"g").exec(arrPlaces[i]);
        }catch(e){
            console.log(e);
        }
        if(!isMatch){
            listElements[i].className = "hide";
        }else{
            listElements[i].className = "";
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