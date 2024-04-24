# Webáruház

## Specifikáció
1. A publikus felületen div-ekben jelenítsük meg az adatokat. Az előzetes minta alapján! 
2. Figyelj a reszponzitvitásra!
3. Az oldalon legyen szűrési lehetőség is!
4. Az oldalon legyen rendezési lehetőség is!
5. Kosár funkció:  A publikus felületen a terméket helyezheted a kosárba. 
6. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!
7. ++ Lehet, hogy szükséged lesz a localStorage használatára. 
8. ++ Ilyenkor készíthetsz a kosárba tett termékekről egy PDF dokumentumot is.  :D
9. ++ Minden termékhez (divhez) tartozik egy gomb, amivel meg tudjuk nézni azt az egyetlen terméket.
10. A kiemelt termék mellett megjelenik egy bal és egy jobb léptető gomb, amivel léptetni tudjuk a terméket.

## Alkalmazott függvények

**kartyaOsszeallit(lista) -> txt**
Összeállítja a kártyához kellő adatokat.

**megjelenites(txt)**
Megjeleníti a kártyát.

**kartyaRendez(lista) -> rendezLista**
Rendezi kártyákat név szerint.

**szures(lista, szurtSzoveg) -> szurtLista**
Szűri a kártyákat a beírt karakter(ek) szerint és keresni fog a név és kategória mezőkben.

**kosarGomb(termekIndex) -> lista**
Kosár listába teszi a terméket a Kosárba gomb megnyomásával.

**kosarOsszeallit(lista) -> txt**
Összeállítja a kosár elemeit egy táblázatban.

**kosarMegjelenit(txt)**
Megjeleníti a kosárba az elemeket.

**termekTorles(lista, termekIndex) -> lista**
Törli a terméket a kosár listából a kuka ikonra rányomva.

**rendelésLeadas()**
Rendelést adja le.
