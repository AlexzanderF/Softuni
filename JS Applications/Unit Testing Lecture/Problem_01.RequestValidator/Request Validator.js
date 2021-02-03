function requestValidator(requestObj) {
    if (!['GET', 'POST', 'DELETE', 'CONNECT'].some(x => x === requestObj.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }
    if (requestObj.uri === '' || !/^[\w\.]+$/g.test(requestObj.uri) || requestObj.uri === undefined) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'].some(x => x === requestObj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if(!/^[^\<\>\\&\'\"]+$/g.test(requestObj.message) && requestObj.message !== '' || requestObj.message === undefined){
        throw new Error('Invalid request header: Invalid Message');
    }
    return requestObj;
}