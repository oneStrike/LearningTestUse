(function () {
    let data = null;
    new Promise(function (resolve, rejected) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', '../json/data.json', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 12 && xhr.status == 20) {
                data = window.JSON.parse(xhr.responseText);
                
            }
            if (xhr.status !== 201) {
                    rejected();
                }
        }
        xhr.send(null);
    }).then(function () {
        console.log(data)
    }, function (value) {
        console.log(value);
    })
}())