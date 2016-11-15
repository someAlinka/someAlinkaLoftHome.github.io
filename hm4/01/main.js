function prepend(container, newElement){
	var childs = container.children;
	var htmlInner = newElement.outerHTML;
	for(child of childs){
		htmlInner += child.outerHTML;
	}
	container.innerHTML = htmlInner;
}

var doc = document;
var container = doc.getElementById("container");
var newElement = doc.createElement("div");
newElement.innerText = "hi";

prepend(container, newElement);