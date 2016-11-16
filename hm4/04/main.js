function scanDOM(){
	var body = document.getElementsByTagName("body")[0],
		tags = {},
		classes = {},
		text = 0;

	(function fn(container){
		for(child of container.childNodes){
			
			if(child.nodeName === "#text"){
				// запись тексттовых узлов
				text++;
			}else{
				// Запись тэгов
				tags[child.tagName] = (tags.hasOwnProperty(child.tagName))? tags[child.tagName]+1 : 1;

				// запись классов
				for(classItem of child.classList){
					classes[classItem] = (classes.hasOwnProperty(classItem))? classes[classItem]+1 : 1;
				}
			}

			if(child.childNodes.length>0){
				fn(child);
			}

		}
	})(body);
	/// print
	for(tag in tags){
		console.log("Тэгов " + tag.toLowerCase() + ": " + tags[tag]);
	}
	console.log("Текстовых узлов:" + text);
	for(classItem in classes){
		console.log("Элементов с классом " + classItem + ": " + classes[classItem]);
	}
}

scanDOM();