function deleteTextNodes(container){
	if(container.children.length == 0){
		container.parentNode.removeChild(container);
	}else{
		while (container.firstElementChild) {
			deleteTextNodes(container.firstElementChild);
		}
	}
}

var doc = document;
var container = doc.getElementById("container");
deleteTextNodes(container);