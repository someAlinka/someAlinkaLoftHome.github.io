
var doc = document;

Date.prototype.addDays = function(days)
{
    var intDay = parseInt(days);
    if(!isNaN(intDay)){
        var dat = new Date(this.valueOf());
        dat.setDate(dat.getDate() + intDay);
        return dat;
    }
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

addCookieButton.addEventListener("click", function(event){
    var nameVal = nameCookie.value;
    var valVal = valueCookie.value;
    var dateVal = dateCookie.value;
    if(!nameVal || !valVal || !dateVal){
        alert("Заполните все поля формы");
    }else{
        if(!isNaN(parseInt(dateVal))){
            var currentdate = new Date();
            doc.cookie = nameVal + "=" + valVal + "; expires=" + currentdate.addDays(dateVal);
            addCookie(nameVal + "=" + valVal);
            nameCookie.value = "";
            valueCookie.value = "";
            dateCookie.value = "";
        }else{
            alert("В поле даты не число");
        }
    }
});

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