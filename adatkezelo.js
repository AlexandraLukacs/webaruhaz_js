export function tablazatRendezNev(lista){
    const nevSzerintELEM = $("#nevSzerinti").eq(0);
    nevSzerintELEM.on("click", function(){
        rendezesNev(lista);
    });
}

function rendezesNev(lista){
    lista.sort(function(a,b){
        return a.nev.toUpperCase() > b.nev.toUpperCase();
    });
    return lista;
}

export function tablazatRendezAr(lista){
    const arSzerintiELEM = $("#arSzerinti").eq(3);
    arSzerintiELEM.on("click", function(){
        rendezesAr(lista);
    });
   
}

function rendezesAr(lista){
    lista.sort(function(a,b){
        return a.ar - b.ar;
    });
    return lista;
}

export function tablazatRendezKategoria(lista){
    const kategSzerintELEM = $("#kategoriaSzerinti").eq(4);
    kategSzerintELEM.on("click", function(){
        rendezesKategoria(lista);
    });
}

function rendezesKategoria(lista){
    lista.sort(function(a,b){
        return a.kategoria.toUpperCase() > b.kategoria.toUpperCase();
    });
    return lista;
}

export function szuresNevSzerint(lista, szurtSzoveg){
    const SZURTLISTA = lista.filter(function(elem){
        return elem.nev.includes(szurtSzoveg);
    });
    return SZURTLISTA;
}
