
//runs on first install
chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason === "install"){
        chrome.storage.sync.set({'language':'French', 'storedDayOfMonth': 1}, function(result){
            console.log(`Extension first installed language set to ${result.language}, storedDayOfMonth set to ${result.storedDayOfMonth}`)
        })
        //opens options page on initial install
        chrome.runtime.openOptionsPage()
    }
})

 
chrome.storage.sync.get(['storedDayOfMonth'], function(result) {

    //Gets the storede day of month so it can compare to the current day of month
    let storedDayOfMonth = result.storedDayOfMonth;
    console.log('Initial stored day of month ' + storedDayOfMonth)

    //Get Date of Month
    let day = new Date()
    let actualDayOfMonth = day.getDate()
    console.log('Actual day of month '+ actualDayOfMonth)
    console.log(day)
    
    //Sets the new day of the month in storage
    if(storedDayOfMonth !== actualDayOfMonth){
        console.log('Not the same')

        chrome.storage.sync.set({'storedDayOfMonth': actualDayOfMonth}, function() {
            console.log('stored day of month is set to ' + actualDayOfMonth);
        });
        
        //adds the badge
        chrome.browserAction.setBadgeBackgroundColor({color: '#8086FF'});
        chrome.browserAction.setBadgeText({text:'+1'});
    }else {
        console.log('They the same')
    }
})
 
    
  


    







  



  

  