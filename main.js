#!/usr/bin/env node

'use strict';

const fs = require('fs');
const Terser = require("terser");
const ejs = require('ejs');

function main() {
    const code = fs.readFileSync("src/bookmarklet.js", {encoding: "utf-8"});
    const minified = encodeURI(Terser.minify(code, {warnings: true}).code);
    ejs.renderFile("src/index.ejs", {src: minified}, function(err, out){
        if (err != null) {
            console.log(err);
            return false;
        }
        fs.writeFileSync("docs/index.md", out, "utf8");
    })
}

main()
