export function kartyaOsszeallit(lista){
    let txt = "";
    txt += `<div class="card" style="width:400px">`;
    lista.forEach((element, i) => {
        txt += `<div><img class="card-img-left" src="${element.kep}" alt="Card image"></div>`;
        txt += `<div class="card-body-right">`;
        txt += `<h4 class="card-title">${element.nev}</h4>`;
        txt += `<p class="card-text">${element.ar}Ft</p>`;
        txt += `<p class="card-text">Kategória: ${element.kategoria}</p>`;
        txt += `</div>`;
        txt += `<button type="button" class="btn btn-default">Kosárba</button>`;
    });
    txt += "</div>";
    return txt;
}

export function megjelenites(txt){
    const kartyaELEM = $("#kartya");
    kartyaELEM.html(txt);
}