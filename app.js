var textInput = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#btn-translate");
var output = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"

function getTranslationURL(text){
    return serverURL+"?text="+text
}
function errorMsg(){
    alert("Looks like we have reached hourly limit for translation request, please try after an hour.")
}
function clickHandle(){
    var inputText = textInput.value
    fetch(getTranslationURL(inputText))
    .then(Response=>Response.json())
    .then(json=>output.innerText=json.contents.translated)
    .catch(errorMsg)
}
btnTranslate.addEventListener("click", clickHandle)