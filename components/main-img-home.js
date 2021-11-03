const template = document.createElement('template');
template.innerHTML = `
  <style>
    .main-img-container{
        width:100%;
    }
    .container{
        display: inline-block;
        position: relative;
    }

    .container-img{
        margin-top:6rem;
        width:100%;
        z-index:-1;    
        box-shadow: -9px 16px 30px -1px rgba(0, 0, 0, 0.18);
        backdrop-filter: blur(4px);
    }

    .container-aux{
      width:100%;
    }

    p{       
       
        position: absolute;
        top: 12rem;
        right: 5rem;
        width: 25rem;
        text-align: right;
        font-size: 3rem;
        font-weight: 600;
        color: var(--main-bg-color);
        text-shadow: 0px 4px 4px var(--footer-text-color);
    }

    
@media screen and (max-width:760px){
 p{
  font-size: 1.5rem;
  width: 10rem;
  top:7rem;
 }
 }

  </style>
  <div class="main-img-container"> 
     <div class="container-aux">
        <img class="container-img" />   
        <div>
         <p></p>  
        </div> 
    </div> 
  </div>
`;

class MainImg extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('p').innerText = this.getAttribute('text');
    this.shadowRoot.querySelector('img').src = this.getAttribute('main-image-home');
  } 
 
}

window.customElements.define('main-img-container', MainImg);