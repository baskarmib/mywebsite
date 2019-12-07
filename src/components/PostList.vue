<template>
<div>
  <div class="card">
    <div class="card-content">
    <div class="content">
      <div class="columns">
      <div class="column is-three-fifths"><h4 class="subtitle">{{post.title}}</h4> </div>
      <div class="column"> <p class="is-small">{{post.date}} </p> </div>
  
       </div>
      <div class="columns">
      <div class="column is-three-fifths"><p class="is-small" >
       {{post.description}}
      </p></div>
      <div class="column"> <span class="tag is-light is-medium " >
    <b>{{post.timeToRead}} min read</b> &nbsp;
    <g-link :to="post.path" class="read">Read More <span class="visuallyhidden">about {{post.title}}</span></g-link>
    </span>   </div>
  
       </div>
    </div>
    </div>        
    </div>    
    <br>
    </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style>
.read {
  padding: 7px;
  color: #333;
  text-decoration: none;
  border: 2px dashed #fecd43;
}
.visuallyhidden {
  position: absolute !important;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
}
.visuallyhidden:focus {
  display: inline-block;
  padding: 15px 23px 14px;
  width: auto;
  height: auto;
  clip: auto;
  color: #000000;
  background-color: #ffffff;
  clip-path: unset;
}
</style>