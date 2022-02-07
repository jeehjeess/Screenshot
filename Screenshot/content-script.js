chrome.webNavigation.onCommitted.addListener(function (data) {
    if (data.frameId !== 0) {
        // Don't trigger on iframes
        return;
    }
    var tabIdToUrl = {};
    tabIdToUrl[data.tabId.toString()] = data.url;
    chrome.storage.local.set(tabIdToUrl);
    alert(">>>" +tabIdToUrl);
  });