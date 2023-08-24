const downloadFileName = document.querySelector("#downloadFileName");
const downloadBtnTxt = document.querySelector("#downloadTxtOptionBtn");

downloadBtnTxt.addEventListener('click', downloadFile);

function downloadFile(){
    let downloadFileNameValue = downloadFileName.value
    let textodigitadoValue = textodigitado.value; 
    localStorage.setItem("text",textodigitadoValue);

    if(downloadFileNameValue == ''){
        downloadFileNameValue = 'NotePageArchive.txt'
    }else{
        downloadFileNameValue += '.txt'
    }
    var blob = new Blob([textodigitadoValue], {type: "text/plain;charset=utf-8"});
    saveAs(blob, downloadFileNameValue);
}
