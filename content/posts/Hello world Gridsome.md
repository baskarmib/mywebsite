---
title: "Hello world - Gridsome"
description: "Experiences from developing blog using Gridsome"
date: 2019-12-06
---

Welcome to my new blog. I will be writing my technical experiences, challenges faced and other adventures and tips in this blog. I have been developing this website for quite some time now and I decided to use Gridsome to develop my new blog. 

>Yes you guessed it right being a VueJs Enthusiast, I wanted to explore Gridsome and learn the concepts behind Gridsome and utilize the power of GraphQL provided in built with Gridsome.

So here comes the tools which I have used to develop this website.

- Development - VueJs and Gridsome
- Styling - Bulma
- Hosting - Netlify
- MarkDown Editor - Notion.so
- Font Awesome
- Development IDE - Visual Studio Code


Below is the Gridsome configuration which I have used for developing this website.

```js
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
          }
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
```

## Challenge- 1

While developing the blog using Gridsome, I initially had the content folder within the src folder. It is required to have the content folder outside of src folder while using the below path.

```js
    'content/posts/**/*.md'. 
```

<div class="notification is-info">
  <i class="fas fa-lightbulb"></i> <strong>Tip:</strong> I did not use the <a href="https://gridsome.org/starters/minimal-starter/" target="_blank" rel="noopener noreferrer"> minimal-starter </a> template. You can use the template directly to avoid the issue which I have faced.
</div>




## Challenge- 2

Latest version of Gridsome would provide a deprecation warning to use templates for collections. 

This can be resolved by using templates in **gridsome.config.js**

```js
    templates:{
          Post : '/content/posts/:year/:month/:title',      
      }
```

It is not required to mention route as part of @gridsome/source-filesystem plugin. 

Once these are taken care, we are up and running. 


Credit goes to below authors as I have referred all the solutions, for developing the blog and website.

<div class="notification is-info">
<p>
Caleb Anthony - <a href="https://gridsome.org/starters/bulma-starter/" target="_blank" rel="noopener noreferrer">[https://gridsome.org/starters/bulma-starter/]</a>
</p>
<p>
Dan Vega - <a href="https://www.danvega.dev/blog/2019/01/31/hello-gridsome/" target="_blank" rel="noopener noreferrer">[https://www.danvega.dev/blog/2019/01/31/hello-gridsome/]</a>
<p>
<p>
Gift Egwuenu - <a href="https://gridsome.org/starters/minimal-starter/" target="_blank" rel="noopener noreferrer">[https://gridsome.org/starters/minimal-starter/]</a>
</p>
</div>

Thank you all for your contributions, which helped in developing this website and blog. I strongly recommend referring the above links to get an initial understanding.

Thank you for reading!!