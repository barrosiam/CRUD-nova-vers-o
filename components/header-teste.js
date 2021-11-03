const template = document.createElement('template');
template.innerHTML = `
  <style>
  @import url(../css/global.css);
  header{
    background-color: var(--main-color); 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);    
    flex-direction: row-reverse;
}

.cabecalho_menu{    
    text-align: center;     
}
  
.menu{
    display: flex;
    gap: 1rem;     
}

.cabecalho_link{    
    font-size: 1.5rem;
    padding: .5rem;
    display: block;     
}  

.cabecalho_titulo a{
  font-size:  2.5rem;
}

a{      
    color: var(--main-bg-color);        
}  
#btn_mobile input{
  display:none;
}

@media screen and (max-width:1024px){
  header{
    flex-direction: row;
}
  #btn_mobile{
  display: block;
  position: relative;
 
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;
}

#btn_mobile a{
  color:var(--main-color);
  transition: color 0.3s ease;
}

#btn_mobile a:hover{
  color: var(--footer-color);
}


#btn_mobile input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  
  opacity: 0;
  z-index: 2; 
  
  -webkit-touch-callout: none;
}


#btn_mobile span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  
  background: var( --branco);
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#btn_mobile span:first-child
{
  transform-origin: 0% 0%;
}

#btn_mobile span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}


#btn_mobile input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: var(--placeholder-color);
}

#btn_mobile input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#btn_mobile input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

.menu
{
  position: absolute;
  width: 20rem;  
  height: 100vh;
  margin: -5rem 0 0 -6rem;
  padding: 5rem;
  padding-top: 6rem;
  
  flex-direction:column;
  background: var(--main-bg-color);
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

.menu li
{
  padding: 10px 0;
  
}

#btn_mobile input:checked ~ ul
{
  transform: none;
}
 
}

  </style>
  <header class="container-base">            
      
  <nav class="cabecalho_menu">      
 
  <div id="btn_mobile">
    <input type="checkbox" />   
    <span></span>
    <span></span>
    <span></span>  

    <ul class="menu">
        <li class="cabecalho_link"><a href="./cadastrar.html">Cadastrar</a></li>
        <li class="cabecalho_link"><a href="./consultar.html">Consultar</a></li>              
        <li class="cabecalho_link"><a href="./consultar.html">Atualizar</a></li>
        <li class="cabecalho_link"><a href="./consultar.html">Deletar</a></li>             
    </ul>
   </div>        
  </nav>  
  <p class="cabecalho_titulo"><a href="./index.html">livreiros</a></p>                            
</header>
`;

class Header extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  } 
 
}

window.customElements.define('custom-header', Header);