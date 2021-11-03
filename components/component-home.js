
const template = document.createElement('template');
template.innerHTML = `
  <style>
.component-home{
      background:var(--main-header-components);		        
      width: 100%;
      height: 30rem; 
      display: flex;
      justify-content: center;
      align-items: center;
}

.component-home a{
    display: flex;
    width: 80vw;
    justify-content: space-around;
    align-items: center;
    text-decoration:none;
    text-transform: lowercase;    
}
    
.component-home img{
      width: 30rem;
      height: 20rem;
      mix-blend-mode: normal;
      box-shadow: -9px 16px 30px -1px rgba(0, 0, 0, 0.18);
      backdrop-filter: blur(4px);
      border-radius: 6px;
      
}
.component-home div{
    width: 25rem;
}

.component-home p{
      font-weight: 600;
      font-size: 2rem;
      line-height: 54px;
      color:var(--main-color);
      text-shadow: 0px 4px 4px rgba(146, 121, 121, 0.25);
}
@media screen and (max-width:1024px){
  .component-home a{ 
    flex-direction:column;
    margin-bottom:4rem;
  }
}
@media screen and (max-width:760px){
 
  .component-home div{
    width: 15rem;
}

  .component-home img{
    width: 100vw;
    height: 15rem
  }

  p{
    text-align:center;
  }
}

  </style>
  <div class="component-home">
  <a >
    <img/>
    <div>
      <p></p>
    </div>
    </a>
  </div>
`;

class ComponentHome extends HTMLElement {
  constructor() {
    super();    

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('p').innerText = this.getAttribute('text');
    this.shadowRoot.querySelector('img').src = this.getAttribute('image-home');
    this.shadowRoot.querySelector('a').href = this.getAttribute('path');
   
  }
}

window.customElements.define('component-home', ComponentHome);