import Consulta from "../js/readBook.js";

const template = document.createElement('template');
template.innerHTML = `
  <style>
  @import url(../css/global.css);
  .search-component{
    display: flex; 
    justify-content: center;
    align-items: center;

    
  }

  .search-component-container{
    display: grid;
    grid-template-columns: 25rem 30rem;
    grid-gap: 10rem;    
    height: 6rem;
    align-items: center;
    border-bottom:.15rem solid var(--main-header-components);
  }

  .texts{
    display: flex;
    justify-content: space-around;
  }

  .buttons{
    display: flex;
    justify-content: space-around;
    font-size: 1.5rem; 
    
  }
  .b{
    width:10rem;
  }

  p{      
    color: var(--main-color);   
    font-size: 1.5rem; 
    text-align:center;
  }
  .obra{  
    color: var(--main-text-color);       
  }
  .autorObra{  
    color: var(--placeholder-color);       
  } 
  #btnAction{
    background-color: var(--delete-button-color)
  }

  #btnAux{
    background-color: var(--main-button-color)
  }
 
  </style>
  <div class="search-component">
    <div class="search-component-container">
        <div class="texts">
            <p id="obra"></p>
            <p id="autorObra"></p>
        </div>
        <div class="buttons">
             <button id="btnAux" class="b">
             <slot name="aux"> </slot>
            </button> 
            <button id="btnAction" class="b">
                <slot name="action"> </slot>
            </button> 
        </div>
    </div>
  </div>
  
`;

class SearchComponent extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    
    const _shadowRoot = this.attachShadow({mode: 'open'});
    _shadowRoot.innerText= `
    <p data-bind="title"></p>
  `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  } 

  encaminhaPath(){ 
    let a = this.shadowRoot.getElementById('btnAux');


    switch(a){
      case "1": 
     
      break;
      case "2":
        break;
      case "3":
        break;
      case "4":
        break;
    } ;  
  
};

carregaLista(){
    let lista = new Consulta;
    lista.consultarLivro(this.livroEncontrado);
};

livroEncontrado(lista){
    
    const element =  this.shadowRoot.getElementById('obra')
    element.setState = "<slot>Everything is rendered here</slot>"
    this.shadowRoot.getElementById('autorObra').innerText = lista[0].autor;
    id=lista[0].id;
}

connectedCallback() { 
  this.carregaLista();
};

disconnectedCallback() {
  this.shadowRoot.querySelector('.search-component').removeEventListener();
};
}

window.customElements.define('search-component', SearchComponent);