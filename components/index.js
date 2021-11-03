class Button extends HTMLElement{
    //todas as propriedades e atributos de um html, vai criar novas propriedades para ele
    constructor(){
        super()
        //faz a herança da classe
        this.shadow = this.attachShadow({mode: 'open'})
        //cria uma var e anexa o shadow dom, espelhando todas as propriedade de um html
      
    }
    connectedCallback(){
        const template =`
        <style>
        @import url(css/global.css);
            :host {
            }
            .orange-button{
                background-color: var(--main-button-color);
                
            }
        </style>
      
        <button class="botao orange-button">
        <slot> </slot>
        </button> 
        `

        this.shadow.innerHTML = template;
    }
}


customElements.define('custom-button', Button)
