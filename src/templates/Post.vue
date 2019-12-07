<template>
  <Layout>
     <section class="hero is-light is-fullheight-with-navbar">
       <br>
     <div class="hero-head has-text-centered">
        <h1 class="title">{{$page.post.title}} </h1>
        <p class="subtitle is-size-7"> {{ $page.post.date}} | {{$page.post.timeToRead}} min read</p>
     </div>
     <div class="hero-body">
     <div class="container">
        <div class="content has-text-left">
        
           <p class="is-size-6" v-html="$page.post.content"/>
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

</style>