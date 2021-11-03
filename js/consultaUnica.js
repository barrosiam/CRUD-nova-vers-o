import Consulta from "./readBook.js";

window.onload = function () {
  const id = location.search.split("id=")[1];
    if(id){
        carregaConsulta(id);
    }
};

function livroEncontrado(obj) {   
    document.getElementById("myAnchor").setAttribute("infos", JSON.stringify( obj));    
}

function carregaConsulta(id) {
  let consulta = new Consulta();
  consulta.consultarLivro(livroEncontrado,id,);
}
