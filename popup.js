function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'franceData.json', true); 
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
            console.log('it work')
          }
    };
    xobj.send(null);  
 }

 function useJSON() { 
    var json;
    console.log('yeeyee')
    loadJSON("franceData.json", function(response) {
        json = JSON.parse(response);
        console.log('yayeet')
        // Call another function with json that is now filled with data
        triggered(json);
    });
}

function triggered(json) {
    console.log('yeet')
    let dayId = 1; //this will change depending on the day
    let foreignWord = json[dayId].frenchWord;
    let englishWord = json[dayId].englishWord;
    let foreignSentence = json[dayId].frenchSentence;
    let englishSentence = json[dayId].englishSentence;

    document.getElementById('foreign-word').innerHTML = foreignWord;
    document.getElementById('english-word').innerHTML = englishWord;
    document.getElementById('foreign-sentence-change').innerHTML = foreignSentence;
    document.getElementById('english-sentence-change').innerHTML = englishSentence;
}

useJSON()