var doc = document;
new Promise(function(resolve) {
    if (document.readyState == 'complete') {
        resolve();
    } else {
        window.onload = resolve;
    }
}).then(function() {
    return new Promise(function(resolve, reject) { // VK init & login
        VK.init({
            apiId: 5760339
        });

        VK.Auth.login(function(response) {
            if (response.session) {
                resolve(response);
            } else {
                reject(new Error('Не удалось авторизоваться'));
            }
        }, 2);
    });
}).then(function() {
    return new Promise(function(resolve, reject) { // get my name & lastname
        VK.api('users.get', {'name_case': 'gen'}, response => {
            if (response.error) {
                reject(new Error(response.error.error_msg));
            } else {
                let userData = response.response[0];
                headerInfo.textContent = `Друзья ${userData.first_name} ${userData.last_name}`;
                resolve();
            }
        });
    });
}).then(function() {
    return new Promise(function(resolve, reject) { // get friends IDs
        VK.api('friends.get', {}, function(serverAnswer) {
            if (serverAnswer.error) {
                reject(new Error(serverAnswer.error.error_msg));
            } else {
                resolve(serverAnswer.response.toString());
            }
        });
    });
}).then(function(listFriends) {
    return new Promise(function(resolve, reject) { // get friends info and render html
        VK.api('users.get', {'user_ids': listFriends, 'fields':'photo_50,nickname,bdate'}, function(serverAnswer) {
            if (serverAnswer.error) {
                reject(new Error(serverAnswer.error.error_msg));
            } else {
                let source = friendsListTemplate.innerHTML;
                let templateFn = Handlebars.compile(source);

                Handlebars.registerHelper('age', function(bdate) {
                    if(bdate){
                        var arrbdate = bdate.split('.');
                        var result = (arrbdate[arrbdate.length-1].length === 4)? 2016-arrbdate[arrbdate.length-1] : "no age";
                        return new Handlebars.SafeString(result);
                    }
                    return new Handlebars.SafeString('no age');
                });
                var arr = serverAnswer.response;

                // arr.sort(function (a, b) { // sort только по месяцу и дню рождения :(
                //     if(a.bdate && b.bdate){
                //         var arrbdateA = a.bdate.split('.');
                //         var arrbdateB = b.bdate.split('.');
                //         var today = new Date();
                //         var value = Math.abs(arrbdateA[1]-today.getMonth()-1) - Math.abs(arrbdateB[1]-today.getMonth()-1);
                //         if (value == 0)
                //         value = Math.abs(arrbdateA[0]-today.getDay()) - Math.abs(arrbdateB[0]-today.getDay());
                //         return value;
                //     }
                //     return Infinity;
                // });

                arr.sort(function (a, b) { // sort толька по месяцу и дню рождения но с начала года
                    if(a.bdate && b.bdate){
                        var arrbdateA = a.bdate.split('.');
                        var arrbdateB = b.bdate.split('.');
                        return (arrbdateA[1]+arrbdateA[0])-(arrbdateB[1]+arrbdateB[0]);
                    }
                    return Infinity;
                });
                let template = templateFn({ list: arr });
                results.innerHTML = template;
            }
        });
    });
}).catch(function(e) {
    alert(`Ошибка: ${e.message}`);
});