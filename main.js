import { jatekokLISTA } from "./adat.js";
import { szuresNevSzerint, szuresKategoriaSzerint, kartyaRendezArNov, kartyaRendezKategoria, kartyaRendezNev, kartyaRendezArCsok } from "./adatkezelo.js";
import { kartyaOsszeallit, megjelenites } from "./fuggvenyek.js";

init(jatekokLISTA);
rendezesekSzuresek();

export function init(lista){
    const txt = kartyaOsszeallit(lista);
    megjelenites(txt);
}

function rendezesekSzuresek(){
    kartyaRendezNev(jatekokLISTA);
    kartyaRendezArNov(jatekokLISTA);
    kartyaRendezArCsok(jatekokLISTA);
    kartyaRendezKategoria(jatekokLISTA);
    nevSzuresEsemeny();
    KategoriaSzuresEsemeny();
}

kosarGomb(jatekokLISTA);

function nevSzuresEsemeny(){
    const szuroELEM = $("#szNev");
    szuroELEM.on("keyup", function(){
        let szuroSZoveg = szuroELEM.val();
       const LISTA = szuresNevSzerint(jatekokLISTA, szuroSZoveg);
       init(LISTA);
    });
}

function KategoriaSzuresEsemeny(){
    const szuroELEM = $("#szNev");
    szuroELEM.on("keyup", function(){
        let szuroSZoveg = szuroELEM.val();
       const LISTA = szuresKategoriaSzerint(jatekokLISTA, szuroSZoveg);
       init(LISTA);
    });
}
