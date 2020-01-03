//Runs each time you press save

function saveOptions(){
    let radios = document.getElementsByName('language');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            chrome.storage.sync.set({language: radios[i].value}, function() {
                console.log('language preference set to '+ radios[i].value)
            });
            break;
        }
    }
    
    window.close()
    
}

//Runs each time you refresh the options page
function restoreOptions() {
    
    chrome.storage.sync.get(['language'], function(value) {
      
        let radios = document.getElementsByName('language');
        
        for (var i = 0, length = radios.length; i < length; i++) {
            if (value.language === radios[i].value) {
                document.getElementById(value.language).checked = true;
                document.getElementById('setTo').innerHTML = value.language;
                break;
            }
        }   
        
    });
  }

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);



// if save options  was just clicked then say saved as an alert for a few seconds


