import { kartyaOsszeallit, megjelenites } from "./fuggvenyek.js";

export function kartyaRendezNev(lista){
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

export function kartyaRendezArNov(lista){
    const arSzerintiELEM = $("#rendez");
    arSzerintiELEM.on("change", function(){
        if(arSzerintiELEM.val() === "arn"){
            rendezesArN(lista);
            console.log(lista)
            megjelenites(kartyaOsszeallit(lista));
        }
    });
   
}

function rendezesArN(lista){
    lista.sort(function(a,b){
        return a.ar - b.ar;
    });
    return lista;
}

export function kartyaRendezArCsok(lista){
    const arSzerintiELEM = $("#rendez");
    arSzerintiELEM.on("change", function(){
        if(arSzerintiELEM.val() === "arcs"){
            rendezesArCs(lista);
            console.log(lista)
            megjelenites(kartyaOsszeallit(lista));
        }
    });
   
}

function rendezesArCs(lista){
    lista.sort(function(a,b){
        return b.ar - a.ar;
    });
    return lista;
}

export function kartyaRendezKategoria(lista){
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

export function szuresKategoriaSzerint(lista, szurtSzoveg){
    const SZURTLISTA = lista.filter(function(elem){
        return elem.kategoria.includes(szurtSzoveg);
    });
    return SZURTLISTA;
}