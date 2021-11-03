const template = document.createElement('template');
template.innerHTML = `
  <style>
  @import url(../css/global.css);
  .custom-footer{    
    background-color: var(--footer-color); 
    filter: opacity(51%);
}

p,a{         
    color: var(--placeholder-color);      
}  

@media screen and (max-width:760px){
  .custom-footer{
    flex-direction:column;
    justify-content:center;
    align-items: center;
  }
}
  </style>
  </style>
  <footer class="custom-footer container-base">            
    <p class="footer_titulo"><a href="./index.html">livreiros</a></p> 
    <p class="footer_texts">todos os direitos reservados. Copyrights 2021</p>                               
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  } 
 
}

window.customElements.define('custom-footer', Footer);