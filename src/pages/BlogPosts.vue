<template>
<Layout>
 <section class="hero is-light is-fullheight-with-navbar">
    <div class="hero-body">
    <div class="container has-text-centered">  
    <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </div>
    </div>
 </section>
  </Layout>
</template>
<page-query>
query {
  allPost {
    totalCount
    edges
    {
      node
      {
        title
        path
        description
        date (format: "D MMMM YYYY")
        id
        timeToRead       
      }
    }
  }
}
</page-query>
<script>
import PostList from "../components/PostList";
export default {
  metaInfo: {
    title: 'BlogPosts'
  },
  components:{
    PostList
  }
}
</script>