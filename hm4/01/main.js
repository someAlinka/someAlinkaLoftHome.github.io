function prepend(container, newElement){
	container.insertBefore(newElement, container.firstElementChild)
}

var doc = document;
var container = doc.getElementById("container");
var newElement = doc.createElement("div");
newElement.innerText = "hi";

prepend(container, newElement);