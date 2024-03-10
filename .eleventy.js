const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = eleventyConfig => {
    return {
        dir: {
            input: 'src',
            output: '_site'
        }
    }
};