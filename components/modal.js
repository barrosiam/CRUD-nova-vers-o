 


const template = document.createElement('template');
template.innerHTML = `
  <style>
  
.modal {
    display: none; 
    position: fixed; 
    z-index: 1; 
    padding-top: 100px; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
  }
  

  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
   
  .fechaModal {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .fechaModal:hover,
  .fechaModal:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  </style>
  <div class="modal">      
    <div class="modal-content">
        <span class="fechaModal">&times;</span>
        <p class="textoModal">Seu cadastro não foi realizado, tente novamente.</p>
    </div>    
  </div>  
`;

class modal extends HTMLElement {
  constructor() {
    super();    

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));;
   
  }

    abreModal(erro) {
    if(!erro){
        msgModal.innerText='Seu cadastro foi realizado!'
    }else{
        msgModal.innerText='Seu cadastro não foi realizado, pois houve um erro'
    }   
    modal.style.display = "block";
    limpaPesquisa();
    }

    fechaModal(){   
        modal.style.display = "none";
         
    }
    
   


}

window.customElements.define('costum-modal', modal);