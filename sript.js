window.addEventListener("load", init);
function init(){
    const LISTA=["könyvek", "túra", "kutya"]
    const felsorolas=document.getElementById("felsorolas")
    const maskepp = document.getElementsByClassName("maskepp")
    let htmlszoveg = listakiir(LISTA, felsorolas)
    let htmlszoveg1 = divKiir(LISTA)
    kiir(htmlszoveg, felsorolas)
    kiir(htmlszoveg1, maskepp[0])
    // hogyan tudjuk megfogni az összes buttont
    const gombELEMEK = document.querySelectorAll(".maskepp button")
   
    //rátesszük az eseménykezelőta gomb elemekre
    for (let index = 0; index < LISTA.length; index++) {
        gombELEMEK[index].addEventListener("click", divHatter)
        
    }

}
function listakiir(LISTA, felsorolas){
    let htmlszoveg = "<ul>"
    for (let index = 0; index < LISTA.length; index++) {
        htmlszoveg +=`<li> ${LISTA[index]}</li>`
    }
    htmlszoveg +="</ul>"
    console.log(htmlszoveg)
    return htmlszoveg
    //felsorolas.innerHTML+= htmlszoveg
}
function kiir(alt, hova){
    hova.innerHTML+=alt;
}
function klikk(event){
    tartalom = event.target.innerHTML;
    console.log(tartalom)
}
function divKiir(LISTA){
    let htmlszoveg = "";
    for (let index = 0; index < LISTA.length; index++) {
        htmlszoveg +=`<div> <p> ${LISTA[index]} </p> <button> ok </button> </div>`
    }
    htmlszoveg +=""
    console.log(htmlszoveg)
    return htmlszoveg
}
function divHatter(event){
    const ELEM = event.target.parentNode
    ELEM.classList.add("hatter")
console.log(event.target.parentNode)

}