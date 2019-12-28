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
  },
  {
    use: 'gridsome-plugin-rss',
    options: {
      contentTypeName: 'Post',
      feedOptions: {
        title: 'baskarmib Blog',
        feed_url: 'https://baskarmib.netlify.com/rss.xml',
        site_url: 'https://baskarmib.netlify.com'
      },
      feedItemOptions: node => ({
        title: node.title,
        description: node.description,
        url: getPostURL(node.path),
        author: node.author,
        date: node.date,
          custom_elements: [
            {
              published: node.date.toString()
            }
          ]
      }),
      output: {
        dir: './static',
        name: 'rss.xml'
      }
    }
  }
],
  transformers:{
    remark: {
      autolinkClassName: "fas fa-hashtag",
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      plugins: [['gridsome-plugin-remark-shiki', { theme: 'nord' }]]
    }
  }
}

function getPostURL(path) { 
  return `https://baskarmib.netlify.com${path}`;
}
