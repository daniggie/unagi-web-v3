function mostrarMais(){
    console.log("a")
    var pontos= document.getElementById("pontos");
    var mais=document.getElementById("hideText");
    var btnLeiaMais=document.getElementById("btnMostrarMais");

    if(pontos.style.display === "none"){
        pontos.style.display="block";
        mais.style.display="none";
        btnLeiaMais.innerHTML="Mostrar mais";
    }else{
        pontos.style.display="none";
        mais.style.display="block";
        btnLeiaMais.innerHTML="Mostrar menos";
    }
}