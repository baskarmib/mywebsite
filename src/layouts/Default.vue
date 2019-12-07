<template>
 <div id="app">  
    <nav class="navbar">
      <div class="container">        
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div class="navbar-end">
            <span class="navbar-item">
              <a class="button is-info is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <g-link            
              to="/"
            >
              Home
              </g-link>
              </a>
            </span>
            <span class="navbar-item">
              <a class="button is-info is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <g-link            
              to="/speaking"
            >
              Speaking
            </g-link>
              </a>
            </span>
           <span class="navbar-item">
              <a class="button is-info is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                 <g-link            
              to="/blog-posts/"
            >
              Blog
            </g-link>
              </a>
            </span>
            <span class="navbar-item">
              <a class="button is-info is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                 <g-link            
              to="/contact"
            >
              Contact
            </g-link>
              </a>
            </span>
           
          </div>
        </div>
      </div>
    </nav>
    
  
      <slot />
      <footer class="footer is-light has-text-centered">
      <span>Copyright © {{ new Date().getFullYear() }}. </span>
      <span>Powered by <a href="//gridsome.org" target="_blank" rel="noopener noreferrer"> Gridsome </a>, <a href="//bulma.io/" target="_blank" rel="noopener noreferrer">Bulma</a> and <a href="//www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a></span>
    </footer>
 </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: Roboto,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}





</style>
