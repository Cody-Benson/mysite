class Footer extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML= `
        <div class="footer">
        <p>© Cody Benson 2024. Built and hosted by me</p>
        <div class="links">
          <a href="https://x.com/CodyOBenson">codyobenson.com</a>
          <a href="https://www.linkedin.com/in/cody-benson/">In</a>
        </div>
      </div>
        `;
    }
}

customElements.define('footer-component', Footer);