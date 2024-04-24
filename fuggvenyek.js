export function kartyaOsszeallit(lista){
    let txt = "";
    txt += "<section>";
    for (let i = 0; i < lista.length; i++) {
        txt += `<img src="${lista[i].kep}">`;
        txt += `<>`
    }
}