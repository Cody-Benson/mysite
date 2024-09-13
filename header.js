class Header extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML= `
        <div class="nav-bar">
            <a href="index.html" class="site-title"><h1>Cody Benson</h1></a>
                <div class="navigation">
                    <a href="portfolio.html" class="page-link">PORTFOLIO</a>
                    <a href="blog.html" class="page-link">BETTER WORLD TECH</a>
                    <a href="about.html" class="page-link">ABOUT</a>
                    <a href="contact.html" class="page-link">CONTACT</a>
                </div>
        </div>
        `;
    }
}

customElements.define('header-component', Header);