var doc = document;
doc.cookie = "name1=firstKyka";
doc.cookie = "name2=secondKyka";
doc.cookie = "name3=thirdKyka";

var arrCookie = doc.cookie.split("; ");
for (var i = 0; i < arrCookie.length; i++) {
    addCookie(arrCookie[i]);
}

function addCookie(strCookie){
    var tr = doc.createElement("tr");
    var arrNameVal = strCookie.split("=");
    
    var tdName = doc.createElement("td");
    tdName.innerText = arrNameVal[0];
    var tdVal = doc.createElement("td");
    tdVal.innerText = arrNameVal[1];
    var tdButt = doc.createElement("td");
    tdButt.innerHTML = '<button>Удалить</button>';

    tr.appendChild(tdName);
    tr.appendChild(tdVal);
    tr.appendChild(tdButt);
    cookieTable.appendChild(tr);
}


cookieTable.addEventListener("click", function(event){
    var target = event.target;
    if(target.tagName == "BUTTON"){
        var cookieName = target.closest('tr').firstElementChild.innerText;
        if(confirm('Удалить cookie с именем '+ cookieName + '?')){
            target.closest('tr').remove();
            doc.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
    }
});