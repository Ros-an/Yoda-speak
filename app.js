var userInput = document.querySelector("#user-input");

var btnTranslate = document.querySelector("#translate-btn");

var outputDiv = document.querySelector("#output");

// url for yoda speak api
var serverUrl= "https://api.funtranslations.com/translate/yoda.json";

function getTranslatedUrl(input) {
    return serverUrl +"?"+"text="+input;
}

function errorHandler() {
    alert("Something wrong with server! try later.");
}

function btnClickHandler() {
    var inputText = userInput.value;

    var finalUrl = getTranslatedUrl(inputText);
    fetch(finalUrl).then(response => response.json())
    .then(json=> {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    }).catch(errorHandler);
}

btnTranslate.addEventListener("click", btnClickHandler);
