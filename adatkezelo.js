import { kartyaOsszeallit, megjelenites } from "./fuggvenyek.js";

export function tablazatRendezNev(lista){
    const nevSzerintELEM = $("#rendez");
    nevSzerintELEM.on("change", function(){
        if(nevSzerintELEM.val() === "nev"){
            rendezesNev(lista);
            console.log(lista)
            megjelenites(kartyaOsszeallit(lista));
        }
    });
}

function rendezesNev(lista){
    lista.sort(function(a,b){
        return a.nev.toUpperCase() > b.nev.toUpperCase() ? 1 : -1;
    });
    return lista;
}

export function tablazatRendezAr(lista){
    const arSzerintiELEM = $("#rendez");
    arSzerintiELEM.on("change", function(){
        if(arSzerintiELEM.val() === "ar"){
            rendezesAr(lista);
            console.log(lista)
            megjelenites(kartyaOsszeallit(lista));
        }
    });
   
}

function rendezesAr(lista){
    lista.sort(function(a,b){
        return a.ar - b.ar;
    });
    return lista;
}

export function tablazatRendezKategoria(lista){
    const kategSzerintELEM = $("#rendez");
    kategSzerintELEM.on("change", function(){
        if(kategSzerintELEM.val() === "kategoria"){
            rendezesKategoria(lista);
            console.log(lista)
            megjelenites(kartyaOsszeallit(lista));
        }
    });
}

function rendezesKategoria(lista){
    lista.sort(function(a,b){
        return a.kategoria.toUpperCase() > b.kategoria.toUpperCase() ? 1 : -1;
    });
    return lista;
}



export function szuresNevSzerint(lista, szurtSzoveg){
    const SZURTLISTA = lista.filter(function(elem){
        return elem.nev.includes(szurtSzoveg);
    });
    return SZURTLISTA;
}



const kosarLISTA = [];

export function kosarGomb(termekIndex){
    const kosarELEM = $("#kosar");
    kosarELEM.on("click", function(event){
        termekIndex = event.target.id;
        const LISTA = kosarLISTA.append(termekIndex);
        //
    });
}