// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'baskarmib world',  
  templates:{
      Post : '/content/posts/:year/:month/:day/:title',
      
  },
  plugins: [
    {
      use:'@gridsome/plugin-google-analytics',
      options:
      {
        id:'UA-154891562-1'
      }
    },
    {
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
      plugins: [['gridsome-plugin-remark-shiki', { theme: 'nord' }]]
    }
  }
}
