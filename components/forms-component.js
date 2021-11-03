import CreateBook from "../js/cadastrar.js";
import UpdateBook from "../js/altera.js";

const template = document.createElement('template');
template.innerHTML = `
  <style>
  @import url(../css/global.css);
  .forms-geral{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap: 1.5rem;
  }
  .forms-component{
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
  }

  .forms-component div{
    display:grid;   
    grid-template-columns: 25rem 25rem;
    row-gap: 3rem;
    column-gap: 8rem;
    margin-bottom:4rem;
  }
 
  p{
    display:flex;
    flex-direction: column;
    margin-block-start: 0em;
    margin-block-end: 0em;
    text-align:left;
  }
  label{
    font-size: 1.5rem;
    color:var(--main-text-color);
    text-transform: lowercase;
    margin-bottom: .5rem;
  }

  input{
    font-size: 1.5rem;
    color:var(--placeholder-color);
    text-transform: lowercase;
    border:none;
    border-bottom:.15rem solid var(--main-header-components);  
  }

  #btnRetorno{ 
    background-color: var(--main-button-color);    
  }

  forms-component[name="2"] btnEncaminha{ 
    background-color: var(--main-button-color);    
  }

  .seta-esquerda{
    display: block;
    margin: auto;
    width: 1rem;
    height: 1rem;
    border-top: 2px solid #fff;
    border-left: 2px solid #fff;
  }
  .seta-esquerda{
   transform: rotate(-45deg);
  }
  
  .seta-esquerda::after{
    content: "";
    display: block;
    width: 2px;
    height: 45px;
    background-color: #fff;
    transform: rotate(-45deg) translate(15px, 4px);
    left: 0;
    top: 0;
  }

  #component-nota{
    display:none;
    background: var(--footer-color) ;
    filter: opacity(51%);
    width:80%;
    align-content: center;
    height: 4rem;
    border-color: 1rem var(--main-button-color);
    border-radius:.5rem;
  }

  #nota{
    text-align:center;
    color: var(--placeholder-color)
  }

  @media screen and (max-width:760px){
    .forms-component div{
      display:flex;   
      flex-direction:column;
      margin-bottom:4rem;
    }
  }
  </style>
  
 <div class="forms-geral">
  <h1></h1>
  <div id="component-nota">
  <p id="nota">foooi</p>
  </div>
    <form class="forms-component">
    <div class="container-forms">
      <p>
        <label for="titulo">Título</label>
        <input type="text" id="titulo" name="titulo"  placeholder="Ex: Quem é Você Alasca?" required="required">
      </p>
      <p>
        <label for="anoLancamento">Ano de Lançamento</label>
        <input type="number" id="anoLancamento" name="anoLancamento" placeholder="Ex: 2010" required="required">
      </p> 
      <p>
        <label for="autor">Autor</label>
        <input type="text" id="autor" name="autor" placeholder="Ex: John Green" required="required">
      </p>
      <p>
        <label for="genero">Gênero</label>
        <input type="text" id="genero" name="genero" placeholder="Ex: Suspense" required="required">
      </p>
      <p>
        <label for="editora">Editora</label>
        <input type="text" id="editora" name="editora" placeholder="Ex: Editora Record" required="required"> 
      </p>
      <p>
        <label for="edicao">Edição</label>
        <input type="number" id="edicao" name="edicao" placeholder="Ex: 10" required="required">             
      </p>
      </div>
      <div class="btn_container">
          <button id="btnRetorno" class="botao" onclick="if(history.length > 1) { history.back(); return false; }"> <span  class="seta-esquerda"></span></button>   
          <input id="btnEncaminha" class="botao" type="submit"></input>           
      </div>        
  </form>       
  </div>
`;


class FormsComponent extends HTMLElement {

  static get observedAttributes() {
    return ['infos'];
  }

  constructor() {
    super();    

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));  
    this.shadowRoot.querySelector('h1').innerText = this.getAttribute('text');
    this.shadowRoot.getElementById('btnEncaminha').value = this.getAttribute('type');
    this.shadowRoot.getElementById('nota').innerText = this.getAttribute('nota');
    }

    populaCampos(_populaCampos){
      let lbTitulo = this.shadowRoot.getElementById('titulo')
      let lbAno = this.shadowRoot.getElementById('anoLancamento')
      let lbAutor = this.shadowRoot.getElementById('autor')
      let lbGenero = this.shadowRoot.getElementById('genero')
      let lbEditora = this.shadowRoot.getElementById('editora')
      let lbEdicao = this.shadowRoot.getElementById('edicao')

      lbTitulo = _populaCampos.titulo;
      lbAno.value = _populaCampos.anoLancamento;
      lbAutor = _populaCampos.autor;
      lbGenero = _populaCampos.genero;
      lbEditora = _populaCampos.editora;
      lbEdicao = _populaCampos.edicao;
    }

    encaminhaPath(){ 
      let flag = this.shadowRoot.getElementById('btnEncaminha').name = this.getAttribute('name');
  
      let lbTitulo = this.shadowRoot.getElementById('titulo').value
      let lbAno = this.shadowRoot.getElementById('anoLancamento').value
      let lbAutor = this.shadowRoot.getElementById('autor').value
      let lbGenero = this.shadowRoot.getElementById('genero').value
      let lbEditora = this.shadowRoot.getElementById('editora').value
      let lbEdicao = this.shadowRoot.getElementById('edicao').value   
      
      const object = this.getObject(lbTitulo,lbAno,lbAutor,lbGenero,lbEditora,lbEdicao)
      switch(flag){
        case "1": 
        let envio = new CreateBook();
        envio.cadastraLivro(lbTitulo,lbAno,lbAutor,lbGenero,lbEditora,lbEdicao);
        this.shadowRoot.getElementById('component-nota').style.display = "block"
        break;
        case "2":
        let encaminha = new UpdateBook
        encaminha.atualizaLivro(object);
          break;
      }   
  } 

  getObject(lbTitulo,lbAno,lbAutor,lbGenero,lbEditora,lbEdicao){  
    let objeto = JSON.stringify({
        "titulo": lbTitulo,
        "anoLancamento": lbAno,
        "autor": lbAutor,
        "genero": lbGenero,
        "editora":  lbEditora,
        "edicao": lbEdicao
    })
    return objeto;
          
}

  connectedCallback() {     
    this.shadowRoot.querySelector('.forms-component').addEventListener('submit', (e) =>  {e.preventDefault(),this.encaminhaPath()});
  }

  attributeChangedCallback( newValue) {    
    
    if(newValue){
      const dadosForm = JSON.parse(newValue)
      this.shadowRoot.getElementById('titulo').value = dadosForm.titulo;
      this.shadowRoot.getElementById('anoLancamento').value = dadosForm.anoLancamento; 
      this.shadowRoot.getElementById('autor').value = dadosForm.autor;
      this.shadowRoot.getElementById('genero').value = dadosForm.genero;
      this.shadowRoot.getElementById('editora').value = dadosForm.editora;
      this.shadowRoot.getElementById('edicao').value   = dadosForm.edicao;
    }
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('.forms-component').removeEventListener();
  }
  };
  


window.customElements.define('forms-component', FormsComponent);