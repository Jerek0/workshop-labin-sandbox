module.exports = function(eleventyConfig) {
    eleventyConfig.setLiquidOptions({
        extname: ".html",
        root: ["views"]
    })

    eleventyConfig.addWatchTarget("./views/partials");
    eleventyConfig.addWatchTarget("./views/snippets");

    return {
      dir: {
        input: "views/templates",
        output: "www"
      }
    }
  };
