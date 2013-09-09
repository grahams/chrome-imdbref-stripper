chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    var queryStringIndex = tab.url.indexOf('?');

    if(tab.url.indexOf("imdb.com") === -1) {
        console.log("other");
        return;
    }


    if (tab.url.indexOf('ref_') > queryStringIndex) {
        var stripped = tab.url.replace(
            /([\?\&]ref_=.*[^&#]+)/ig,
            '');
        if (stripped.charAt(queryStringIndex) === '&') {
            stripped = stripped.substr(0, queryStringIndex) + '?' +
                stripped.substr(queryStringIndex + 1);
        }
        if (stripped !== tab.url) {
            chrome.tabs.update(tab.id, {url: stripped});
        }
    }
});
