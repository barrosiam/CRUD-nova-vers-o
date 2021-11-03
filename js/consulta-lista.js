import Consulta from "./readBook.js";
import DeleteBook from './deleta.js'

window.onload = function() {
    carregaLista()
};

function carregaLista(){
    let lista = new Consulta;
    lista.consultarLivro(livroEncontrado);
};

function livroEncontrado(lista){    
    geraLista(lista)  
}

function deletar(id){ 
    let deleta = new DeleteBook;
    deleta.deletaLivro(id);  
}

function geraLista(lista) {
    const container = document.getElementById('search-component');
    let filhos = lista  ; 

    const template = [];  

    for( var i =  0;  i <= filhos.length - 1; i++ ) {
        
        template.push(
            '<div class="row">',
                '<div class="texts-search">',
                    '<span class="obra">' + filhos[i].titulo + '</span>',
                    '<span class="autorObra">'  + filhos[i].autor +  '</span>',  
                '</div> ',    
                '<div class="botoes-search">',         
                    '<button id="aux'+filhos[i].id+'" value="'+filhos[i].id+'"  class="botao botao-search">ver</button>',
                    '<button id="action'+filhos[i].id+'"  class="botao botao-search" value="'+filhos[i].id+'">deletar</button>',    
                '</div>',     
            '</div>',
            
        ); 
    }
    var htmlString = template.join(''); 
    container.innerHTML = htmlString;    
    
    for( var i =  0;  i <= filhos.length - 1; i++ ) {
        document.querySelector('#aux'+filhos[i].id+'').addEventListener("click", function(e) {
            encaminhaConsultaUnica(e.target.value)
        })
        document.querySelector('#action'+filhos[i].id+'').addEventListener("click", function(e) {
            deletar(e.target.value)
        })  
    }
  } 

  function encaminhaConsultaUnica(id) {
    window.location.href = "../html/alterar.html?id="+id+"";     
  }
  