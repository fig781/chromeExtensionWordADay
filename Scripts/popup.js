
import frenchDataBase from './Data/frenchData.js';
import spanishDataBase from './Data/spanishDataBase.js';
import germanDataBase from './Data/germanDataBase.js';
import russianDataBase from './Data/russianDataBase.js';

// runs when the popup is opened to make sure the date is up to date. if it is not up to date, 
// then it updates the stored day of month;
window.onload = chrome.storage.sync.get(['storedDayOfMonth'], function(result) {
    let storedDayOfMonth = result.storedDayOfMonth;
    console.log('initial stored day of month ' + storedDayOfMonth)

    let day = new Date()
    let actualDayOfMonth = day.getDate()
    console.log('actual day of month '+ actualDayOfMonth)

    if(storedDayOfMonth !== actualDayOfMonth){
        console.log('Not the same')

        chrome.storage.sync.set({'storedDayOfMonth': actualDayOfMonth}, function() {
            console.log('stored day of month is set to ' + actualDayOfMonth);  
        });
        
    }else {
        console.log('The days are the same')
    }
})

//dynamicaly updates the popup with the new word of the day
window.onload = chrome.storage.sync.get(['language'], function(languageResult) {
    chrome.storage.sync.get(['storedDayOfMonth'], function(storedDayOfMonthResult) {
        let storedDayOfMonth = storedDayOfMonthResult.storedDayOfMonth;
        console.log('storedDayOfMonth: '+ storedDayOfMonth)

        let languageChoice = languageResult.language
        let dataBase;
        console.log('Language selected: ' + languageChoice)

        if (languageChoice === "French"){
            dataBase = frenchDataBase   
            document.getElementById('language').innerHTML = "French"         
        } else if(languageChoice === "Spanish"){
            dataBase = spanishDataBase   
            document.getElementById('language').innerHTML = "Spanish"          
        } else if(languageChoice === "German"){
            dataBase = germanDataBase 
            document.getElementById('language').innerHTML = "German" 
        } else if(languageChoice === "Russian"){
            dataBase = russianDataBase  
            document.getElementById('language').innerHTML = "Russian"  
        }
        else{console.log('how did this happen')}

        for(let i = 0; i < 31; i++){
            if(dataBase[i].id == storedDayOfMonth){

                let foreignWord = dataBase[i].foreignWord;
                let englishWord = dataBase[i].englishWord;
                let foreignSentence = dataBase[i].foreignSentence;
                let englishSentence = dataBase[i].englishSentence;

                document.getElementById('foreign-word').innerHTML = foreignWord;
                document.getElementById('english-word').innerHTML = englishWord;
                document.getElementById('foreign-sentence-change').innerHTML = foreignSentence;
                document.getElementById('english-sentence-change').innerHTML = englishSentence;
                break;
            }   
        }    
    })    
    
    //gets rid of the badge
    chrome.browserAction.setBadgeText({text:''});
});

//options button 
window.onload = function(){
    document.querySelector('#options').addEventListener("click", function() {   
        chrome.runtime.openOptionsPage();     
    });
}    


