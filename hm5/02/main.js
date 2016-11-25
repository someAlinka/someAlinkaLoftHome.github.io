
var doc = document;
var bodyElement = doc.getElementsByTagName("body")[0];
var docHeight = bodyElement.offsetHeight;
var docWeight = bodyElement.offsetWidth;

createDiv.addEventListener("click", function(event){ // create random div
    var myDiv = doc.createElement("div");
    myDiv.className = "randomDiv";
    myDiv.style.backgroundColor = get_random_color();
    myDiv.style.width = Math.random() * (docWeight/2 - 10) + 10 + "px";
    myDiv.style.height = Math.random() * (docHeight/2 - 10) + 10 + "px";
    myDiv.style.left = Math.random() * (docWeight/1.6 - 1) + 1 + "px";
    myDiv.style.top = Math.random() * (docHeight/1.6 - 1) + 1 + "px";
    createDiv.parentNode.appendChild(myDiv);
});

function get_random_color() { // get random color for div
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

var boolEvent = false; // in order to know when to move the object
var elem = null; // in order to know which object
var clickX =  0, clickY = 0;

bodyElement.addEventListener("mousedown", function(event){
    if(event.target.className === "randomDiv"){
        boolEvent = true;
        elem = event.target;
        clickX = (event.offsetX == undefined)?event.layerX:event.offsetX;
        clickY = (event.offsetY == undefined)?event.layerY:event.offsetY;
    }
});

bodyElement.addEventListener("mousemove", function(event){
    if(boolEvent){
        elem.style.left = event.pageX - clickX + 'px';
        elem.style.top = event.pageY - clickY + 'px';
    }
});

bodyElement.addEventListener("mouseup", function(event){
    boolEvent = false;
    elem = null;
    clickX = clickY = 0;
});

bodyElement.addEventListener("mouseleave", function(event){
    boolEvent = false;
    elem = null;
    clickX = clickY = 0;
});
