const markdownIt = require("markdown-it");
const markdownItTOC = require("markdown-it-table-of-contents")

module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy('src/css')

  setupMarkdownIt(eleventyConfig)

  return {
    dir: {
      input: 'src',
      output: '_site'
    },
    passthroughFileCopy: true
  };
};

function setupMarkdownIt(config) {
  const md = new markdownIt();

  md.use(require("markdown-it-table-of-contents"), {
    containerHeaderHtml: '<h3 class="toc-container-header">Conteúdo</h3>'
  })

  config.setLibrary("md", md);
}