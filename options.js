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

    
}

function restoreOptions() {
    
    chrome.storage.sync.get(['language'], function(value) {
      
        let radios = document.getElementsByName('language');
        
        for (var i = 0, length = radios.length; i < length; i++) {
            if (value.language === radios[i].value) {
                document.getElementById(value.language).checked = true;

                let para = document.getElementById("saved").innerHTML = "Saved"
                document.getElementById('saved').appendChild(para)
                break;
            }
        }   
        
    });
  }

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);






