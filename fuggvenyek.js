export function kartyaOsszeallit(lista){
    let txt = "";
    txt += `<div class="row m-3">`;
    lista.forEach((element, i) => {
        txt += `<div class="card" style="width:400px">`;
        txt += `<div><img class="card-img" src="${element.kep}" alt="Card image" style="width:50%"></div>`;
        txt += `<div class="card-body">`;
        txt += `<h4 class="card-title">${element.nev}</h4>`;
        txt += `<p class="card-text">${element.ar}Ft</p>`;
        txt += `<p class="card-text">Kategória: ${element.kategoria}</p>`;
        txt += `<button type="button" class="btn btn-default">Kosárba</button>`;
        txt += `</div>`;
        txt += `</div>`;
    });
    txt += `</div>`;
    return txt;
}

export function megjelenites(txt){
    const kartyaELEM = $("#kartya");
    kartyaELEM.html(txt);
}