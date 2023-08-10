const handlebars = require("handlebars");
const fs = require('fs');

module.exports = function(eleventyConfig) {
    // Register Handlebars as the template engine
    eleventyConfig.setLibrary("hbs", handlebars);

    eleventyConfig.on('eleventy.before', async ({ dir, runMode, outputMode }) => {
        for(let prefix of ['snippets','partials']) {
            const dir = __dirname + '/views/'+prefix+'/';
            const filenames = fs.readdirSync(dir);
            filenames.forEach(function (filename) {
                var matches = /^([^.]+).hbs$/.exec(filename);
                if (!matches) {
                    return;
                }
                var name = matches[1];
                var template = fs.readFileSync(dir + '/' + filename, 'utf8');
                handlebars.registerPartial(prefix+'/'+name, template);
            });
        }
    });

    eleventyConfig.addWatchTarget("./views/partials");
    eleventyConfig.addWatchTarget("./views/snippets");

    return {
      dir: {
        input: "views/templates",
        output: "www",
        data: '../../data'
      }
    }
  };
