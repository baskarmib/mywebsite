<template>
  <Layout>
    <section class="hero is-light is-fullheight-with-navbar">
    <div class="hero-body">
    <div class="container has-text-centered">
    <h1 class="title">Contact Me</h1>
    <p>
    I am available for consulting engagements, speaking and workshop assignments.
    Reach out to me through LinkedIn or Twitter.
    </p>
    <p>
    Also available on below social media channels.
    </p>
    <br>
    <div class="columns">
  <div class="column">  
  <a class="button is-medium is-twitter" href="https://twitter.com/baskarmib" target="_blank" rel="noopener noreferrer">
    <span class="icon">
     <font-awesome :icon="['fab', 'twitter']"/>
    </span>
    <span>Twitter</span>
  </a>
 
  </div>
  <div class="column">
   
  <a class="button is-medium is-github" href="https://github.com/baskarmib" target="_blank" rel="noopener noreferrer">
    <span class="icon">
     <font-awesome :icon="['fab', 'github']"/>
    </span>
    <span>GitHub</span>
  </a>
      
  </div>
  <div class="column">
  <a class="button is-medium is-linkedin" href="https://linkedin.com/in/baskarrao-dandlamudi" target="_blank" rel="noopener noreferrer">
    <span class="icon">
     <font-awesome :icon="['fab', 'linkedin-in']"/>
    </span>
    <span>LinkedIn</span>
  </a>
      
  
  </div>
  <div class="column"> 
    
   <a class="button is-medium is-twitch" href="https://www.twitch.tv/baskarmib" target="_blank" rel="noopener noreferrer">
    <span class="icon">
     <font-awesome :icon="['fab', 'twitch']"/>
    </span>
    <span>Twitch</span>
  </a>
      
  </div>
  <div class="column"> 
    
   <a class="button is-medium is-meetup" href="https://calendly.com/baskarmib/30min?month=2022-03" target="_blank" rel="noopener noreferrer">
    <span class="icon">
     <font-awesome :icon="['fab', 'meetup']"/>
    </span>
    <span>Mentoring</span>
  </a>
      
  </div>

</div>
 <br>
  <div class="has-text-centered">
      Interested in sponsoring JavaScript and Friends Conference {{ new Date().getFullYear() }}, you can find the details <a href="https://www.javascriptandfriends.com/callforsponsors/" target="_blank" rel="noopener noreferrer">here</a>.
      </div>  
      <br>
    <div class="has-text-centered">
        If you are interested in reading my previous blogs you can find them <a href="https://baskarrao.wordpress.com" target="blank" rel="noopener noreferrer">here</a>.
    </div> 
    </div>
    </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact'
  }
}
</script>
<style>

</style>
