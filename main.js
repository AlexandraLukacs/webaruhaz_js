import { jatekokLISTA } from "./adat.js";
import { szuresNevSzerint, szuresKategoriaSzerint, kartyaRendezArNov, kartyaRendezKategoria, kartyaRendezNev, kartyaRendezArCsok } from "./adatkezelo.js";
import { kartyaOsszeallit, megjelenites } from "./fuggvenyek.js";
import { kosarGomb, kosarTartalomOsszeallit } from "./kosar.js";
import { kosarLISTA } from "./kosarlista.js";

init(jatekokLISTA);
rendezesekSzuresek();
kosarGomb();

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
    //KategoriaSzuresEsemeny();
}

function nevSzuresEsemeny(){
    const szuroELEM = $("#szNev");
    szuroELEM.on("keyup", function(){
        let szuroSzoveg = szuroELEM.val();
       const LISTA = szuresNevSzerint(jatekokLISTA, szuroSzoveg);
       init(LISTA);
    });
}

function KategoriaSzuresEsemeny(){
    const szuroELEM = $("#szNev");
    szuroELEM.on("keyup", function(){
        let szuroSzoveg = szuroELEM.val();
       const LISTA = szuresKategoriaSzerint(jatekokLISTA, szuroSzoveg);
       init(LISTA);
    });
}
