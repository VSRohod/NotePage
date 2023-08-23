// seletores
const headerTheme = document.querySelector('header');
const textareaTheme = document.querySelector('textarea');
const changeOptionsTheme = document.querySelector('#changeOptions');
const buttonTheme = document.querySelector("#themeButton")
const allButtonTheme= document.querySelector('button');
const logoTheme= document.querySelector('#logo');

// eventos
buttonTheme.addEventListener('click', mudarTema)

//function
function mudarTema(){
    if(buttonTheme.classList.contains("buttonThemeDark")){
        buttonTheme.classList.replace("buttonThemeDark","buttonThemeLight")
        headerTheme.classList.replace("headerDark","headerLight")
        textareaTheme.classList.replace("textAreaDark","textAreaLight")
        changeOptionsTheme.classList.replace("changeOptionsDark","changeOptionsLight")
        allButtonTheme.classList.replace("buttonDark","buttonLight")
        buttonTheme.innerHTML = "<img src='img/moon-stars-fill.svg' alt=''>"
        logoTheme.innerHTML = "<img src='img/logoDark.svg' alt=''>"
    }else{
        buttonTheme.classList.replace("buttonThemeLight","buttonThemeDark")
        headerTheme.classList.replace("headerLight","headerDark")
        textareaTheme.classList.replace("textAreaLight","textAreaDark")
        changeOptionsTheme.classList.replace("changeOptionsLight","changeOptionsDark")
        allButtonTheme.classList.replace("buttonLight","buttonDark")
        buttonTheme.innerHTML = "<img src='img/cloud-sun-fill.svg' alt=''>"
        logoTheme.innerHTML = "<img src='img/logo.svg' alt=''>"
    }
}