<template>
  <Layout>
    <section class="hero is-light is-fullheight-with-navbar">
    <div class="hero-body">
    <div class="container">  
    
    <template v-for="session in talkdetails"> 
    <div class="card" :key="session">
    <div class="card-content">
    <div class="content">
      <h4 class="subtitle">{{session.title}}</h4>      
      <div class="is-small" >
       {{session.description}}
      </div>
    <template v-for="conference in session.conference">
    <span v-if="conference.url !=''" class="tag is-light is-medium" :key="conference">
    <a v-bind:href="conference.url" target="_blank" rel="noopener noreferrer">
    {{conference.name}}
    </a >   
    </span>       
    <span v-else class="tag is-light is-medium" :key="conference">
    {{conference.name}}   
    </span>
    &nbsp;
    </template>
    </div>
    </div>        
    </div> 
    <br>
    </template>
    </div>
    </div>
    </section>
  </Layout>
</template>

<script>
import talkdetails from '@/data/sessions.json'

export default {
  metaInfo: {
    title: 'Speaking'
  },
  data() {
    return {
      talkdetails
    }
}
}
</script>
