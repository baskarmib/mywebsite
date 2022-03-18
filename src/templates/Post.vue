<template>
  <Layout>
     <section class="hero is-light is-fullheight-with-navbar">
       <br>
     <div class="hero-head has-text-centered">
        <h1 class="title">{{$page.post.title}} </h1>
        <div class="subtitle is-size-7"> {{ $page.post.date}} | {{$page.post.timeToRead}} min read</div>
     </div>
     <div class="hero-body">
     <div class="container">
        <div class="content has-text-left is-size-6" v-html="$page.post.content">
        </div>
     </div>
    </div>  
  </section>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>

<style>
img[alt="Bandwidth"]
{
  width:1000px !important;
  height:300px !important; 
}
img[alt="Promotion"]
{
  width:1000px !important;
  height:300px !important;    
}
img[alt="LongRoadAhead"]
{
  width:800px !important;
  height:400px !important;    
}
img[alt="Foundation"]
{
  width:800px !important;
  height:400px !important;    
}
img[alt="SelectTemplate"]
{
  width:800px !important;
  height:400px !important;    
}

img[alt="CreateSolution"]
{
  width:800px !important;
  height:400px !important;    
}

img[alt="Breakpoint"]
{
  width:800px !important;
  height:400px !important;    
}

img[alt="OutputWindow"]
{
  width:800px !important;
  height:400px !important;    
}

img[alt="Add Value To Others"]
{
  width:50% !important;
  height:50% !important;    
}

img{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
<script>
  export default {
    mounted() {
      let twitterScript = document.createElement('script')
      twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      document.head.appendChild(twitterScript)
    }    
  }
</script>