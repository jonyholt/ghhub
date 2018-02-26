var count = 0,
    importComplete = false,
    start = true,
    importError = false;

onmessage = function(e) {
    request(e.data[0], e.data[1], e.data[2], e.data[3], '');
};

function outputLog(id, level, message)
{
    var returnString = '';
    switch (level) {
        case 500:
        case 550:
            returnString = '';
            break;
        default:
            returnString = '. Done';

    }
    return returnString.concat('<br /><span id="log'+ id + '">' + message + '</span>');
}

function request(importId, lastLogId, token, phpSelf, log) {

    var request = new XMLHttpRequest();

    request.onreadystatechange=function() {
        log = '';
        if (request.readyState == 1) {
            if (count == 120) {
                count = 0;
                log = '<br />';
            }
            if (start === true) {
                log = log.concat('Initialising ..');
                start = false;
            } else {
                log = log.concat('.');
            }
            count ++;
            postMessage({log: log, pending: true, complete: importComplete});
            return;
        }
        if (request.readyState == 4 && request.status == 200) {
            var response = request.responseText;
            if (response.substr(0, 1) == '{') {
                response = JSON.parse(response);
            } else {
                importError = true;
                postMessage({log: outputLog(-1, 550, 'Invalid Response'), error: importError});
                return;
            }

            if (response.no_update) {
                if (count == 120) {
                    count = 0;
                    log = '<br />';
                }
                log = log.concat('.');
                count ++;
                lastLogId = response.last_id;
            } else {
                count = 0;
                lastLogId = response.last_id;
                log = '';
                for (var i = 0; i < response.logging.length; i++) {
                    var thisLog = response.logging[i],
                        description = thisLog.description,
                        level = thisLog.level,
                        id = thisLog.log_id,
                        outputLogString = '';
                    if (i == 0) {
                        log = '';
                    }
                    outputLogString = outputLog(id, level, description);
                    log = log.concat(outputLogString);
                    if (level >= 500) {
                        importError = true;
                    }
                }
            }
            if (response.complete == true) {
                importComplete = true;
            }
            postMessage({log: log, lastLogId: lastLogId, complete: importComplete, error: importError});
        }
    };

    request.open(
        'GET',
        phpSelf + '?module=import_assist&action=log&import_id=' + importId + '&log_id=' + lastLogId +'&token=' + token,
        false
    );
    request.send();
}
