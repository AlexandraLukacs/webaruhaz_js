import { jatekokLISTA } from "./adat.js";
import { szuresNevSzerint, tablazatRendezAr, tablazatRendezKategoria, tablazatRendezNev } from "./adatkezelo.js";
import { kartyaOsszeallit, megjelenites } from "./fuggvenyek.js";

megjelenites(kartyaOsszeallit(jatekokLISTA));
tablazatRendezNev(jatekokLISTA);
tablazatRendezAr(jatekokLISTA);
tablazatRendezKategoria(jatekokLISTA);
nevSzuresEsemeny();

function nevSzuresEsemeny(){
    const szuroELEM = $("#szNev");
    szuroELEM.on("keyup", function(){
        let szuroSZoveg = szuroELEM.val();
       szuresNevSzerint(jatekokLISTA, szuroSZoveg);
    });
}