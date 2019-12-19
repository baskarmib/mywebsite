// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'baskarmib world',  
  templates:{
      Post : '/content/posts/:year/:month/:title',
      
  },
  plugins: [{
    use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post'       
      },         
  }],
  transformers:{
    remark: {
      autolinkClassName: "fas fa-hashtag",
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      plugins: [['gridsome-plugin-remark-shiki', { theme: 'nord', skipInline: false }]]
    }
  }
}
