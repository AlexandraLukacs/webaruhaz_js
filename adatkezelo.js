export function tablazatRendezNev(lista, irany){
    lista.sort(function(a,b){
        return a.nev.toUpperCase()>b.nev.toUpperCase() ? 1*irany: -1*irany;
    });

    return lista;
}

export function tablazatRendezAr(lista, irany){
    lista.sort(function(a,b){
        return a.ar - b.ar;
    });

    return lista;
}

