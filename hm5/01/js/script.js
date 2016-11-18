;(function(){

	var doc = document,
		crossEventType = "click",
		accordionLinks = doc.getElementsByClassName("accordion_link");

	setTimeout(function() {
		doc.getElementsByTagName("body")[0].className += "show";
	}, 0);
	
	var accordionCallback = function(obj) {
	    var liClassName = obj.parentNode.className;
	    if(liClassName.indexOf("current") > -1){
	    	obj.parentNode.className = liClassName.replace(" current","");
	    } else {
	    	for (var i = 0; i < accordionLinks.length ; i++) {
				accordionLinks[i].parentNode.className = accordionLinks[i].parentNode.className.replace(" current","");
		    }
		    obj.parentNode.className += " current";
	    }
	};

	if (typeof attachEvent !== 'undefined'){  //event for IE
		crossEventType = "onclick";
	}

	accordionList.addEventListener(crossEventType, function(event){
		if(event.target.tagName == "A") accordionCallback(event.target);
	});

	

}());