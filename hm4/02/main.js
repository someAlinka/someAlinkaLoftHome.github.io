function deleteTextNodes(container){
	// Это первый способ, возможно сильно хитрый, возможно неправильный
	// container.innerHTML = "";

	// Это второй способ
	while (container.firstChild) {
	    container.removeChild(container.firstChild);
	}
}

var doc = document;
var container = doc.getElementById("container");

deleteTextNodes(container);