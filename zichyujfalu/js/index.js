let a = document.getElementById("zlogo1");
let b = document.getElementById("zlogo2");
let c = document.getElementById("bg");
let kep = document.getElementById("kepek");
let p = document.getElementById("").innerHTML;

window.onload = (event) => {
    a.classList.add("load");
    b.classList.add("load");
    c.classList.add("op");
}

lista = ["url('../IMG/2.jpg')", "url('../IMG/3.jpg')", "url('../IMG/4.jpg')", "url('../IMG/5.jpg')"];


kep.style.backgroundImage = lista[4];


let szam = 0;
function vissza() {
    if (szam == 0) {
        szam = 3
        kep.style.backgroundImage = lista[szam];
        console.log(szam)
    }
    else{
        szam--;
        kep.style.backgroundImage = lista[szam];
        console.log(szam)
    }
}

function elore() {
    if (szam == 3) {
        szam = 0
        kep.style.backgroundImage = lista[szam];
        console.log(szam)
    }
    else{
        szam++;
        kep.style.backgroundImage = lista[szam];
        console.log(szam)
    }
}


listatext = ["sdfggsrtgsetth", "erwgwegerwger3g3", "rethtewhgetrhw", "erhewghwefwge"]

let szamtext = 0;
function visszatext() {
    if (szamtext == 0) {
        szamtext = 3
        p = listatext[szamtext]
        console.log(szamtext)
    }
    else{
        szamtext--;
        p = listatext[szamtext]
        console.log(szamtext)
    }
}

function eloretext() {
    if (szamtext == 3) {
        szamtext = 0
        p = listatext[szamtext]
        console.log(szamtext)
    }
    else{
        szamtext++;
        p = listatext[szamtext]
        console.log(szamtext)
    }
}