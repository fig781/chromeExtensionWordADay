

//need to make background skript work on new window open and tab open, and after an hour of being on chrome

//needs to choose the language preference 
 
    chrome.storage.sync.get(['storedDayOfMonth'], function(result) {
        let storedDayOfMonth = result.storedDayOfMonth;
        console.log('Initial stored day of month ' + storedDayOfMonth)
    
        let day = new Date()
        let actualDayOfMonth = day.getDate()
        console.log('Actual day of month '+ actualDayOfMonth)
        console.log(day)
        
        if(storedDayOfMonth !== actualDayOfMonth){
            console.log('Not the same')
            chrome.storage.sync.get(['dayId'], function(result) {
    
                let dayIncrease = result.dayId + 1
    
                chrome.storage.sync.set({'storedDayOfMonth': actualDayOfMonth, 'dayId': dayIncrease}, function() {
                    console.log('stored day of month is set to ' + actualDayOfMonth);
                    console.log('day id now set to '+ dayIncrease);
                });
            })
    
        }else {
            console.log('They the same')
        }
    })
 
    
  

//the alarm function that happens every hour
chrome.alarms.create({delayInMinutes: 0.1, periodInMinutes: 60})

chrome.alarms.onAlarm.addListener(function(){
    chrome.storage.sync.get(['storedDayOfMonth'], function(result) {
        let storedDayOfMonth = result.storedDayOfMonth;
        console.log('Initial stored day of month ' + storedDayOfMonth)
    
        let day = new Date()
        
        let actualDayOfMonth = day.getDate()
        console.log('Actual day of month '+ actualDayOfMonth)
        console.log(day);
        
        if(storedDayOfMonth !== actualDayOfMonth){
            console.log('Not the same')
            chrome.storage.sync.get(['dayId'], function(result) {
    
                let dayIncrease = result.dayId + 1
    
                chrome.storage.sync.set({'storedDayOfMonth': actualDayOfMonth, 'dayId': dayIncrease}, function() {
                    console.log('stored day of month is set to ' + actualDayOfMonth);
                    console.log('day id now set to '+ dayIncrease);
                });
            })
    
        }else {
            console.log('They the same')
        }
    })
})

    







  



  

  