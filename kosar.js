const kosarLISTA = [];

export function kosarGomb(termekIndex){
    const kosarELEM = $("#kosar");
    kosarELEM.on("click", function(event){
        termekIndex = event.target.id;
        const LISTA = kosarLISTA.append(termekIndex);
        //
    });
}