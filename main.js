'use strict';

const fs = require('fs');
const encodeUrl = require('encodeurl')
const Terser = require("terser");
const stripIndent = require('strip-indent');

function main() {
    const code = fs.readFileSync("copy-zendesk-link-markdown.js", {encoding: "utf-8"});
    const out = "javascript(function(){" + encodeUrl(Terser.minify(code).code) + "})();"
    const md = `
        # Copy Zendesk link bookmarklet

        Drag this link to your bookmark bar to save the bookmarklet:

        [Copy ZD link](${out})

        See [github.com/lowply/copy-zendesk-link-bookmarklet](https://github.com/lowply/copy-zendesk-link-bookmarklet) for more information.
    `

    fs.writeFileSync("index.md", stripIndent(md), "utf8");
    fs.writeFileSync("copy-zendesk-link-markdown.bookmarklet", out , "utf8");
}

main()
