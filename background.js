function cuckoo() {
    const date = new Date()
    var hours = date.getHours().toString();
    var minutes = date.getMinutes().toString();

    var hours = hours >= 10 ? hours : "0" + hours;
    var minutes = minutes >= 10 ? minutes : "0" + minutes;
    
    if (minutes == "00" || minutes == "30") {
        chrome.tabs.query({active: true, lastFocusedWindow: true}, (tab) => {
            const windowId = Number(tab[0].windowId);
            chrome.windows.get(windowId, { windowTypes: ['normal'] }, (currentWindow) => {
                if (currentWindow.state == "fullscreen") {
                    chrome.tabs.create({url: "cuckoo.html"})
                } else {
                    chrome.notifications.create("Cuckoo Clock", { type: "basic", title: "Cuckoo Clock 🕰️", message: "Cuckoo! Cuckoo! It's " + hours + ":" + minutes + "!", iconUrl: "icons/128.png"});
                }
            });
        });
    }
}

chrome.alarms.create({
    periodInMinutes: 1
});

chrome.alarms.onAlarm.addListener(cuckoo);