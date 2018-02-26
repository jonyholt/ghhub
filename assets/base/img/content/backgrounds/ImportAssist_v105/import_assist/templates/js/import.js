onmessage = function(e) {
    var importId = e.data[0],
        token = e.data[1],
        phpSelf = e.data[2];

    var request = new XMLHttpRequest();

    request.onreadystatechange=function() {
        if (request.readyState == 1) {
            postMessage({pending: true});
            return;
        }
        if (request.readyState == 4 && request.status == 200) {
            postMessage({});
        }
    };

    request.open(
        'GET',
        phpSelf + '?module=import_assist&action=processImport&import_id=' + importId + '&token=' + token,
        false
    );
    request.send();
};
