const fs = require('fs');
const path = require('path');
const resultPath = path.join(__dirname, '../source/_posts/');
const traget = path.join(__dirname, '../qlear-issues.wiki/');

const files = fs.readdirSync(traget)
                .filter(filename =>
                  ~filename.indexOf('.md')
                  && !~filename.indexOf('Deprecated')
                  && !~filename.indexOf('Sidebar')
              );

const sidebar = fs.readFileSync(path.join(__dirname, '../qlear-issues.wiki/', '_Sidebar.md'), 'utf8').replace(/https:\/\/github.com\/rdd-giga\/qlear-issues\/wiki\//g, '/');
const sideTitle = sidebar.match(/####(\s\w+)+/g).map( v => v.replace(/####\s/, ''));
const content = sidebar.split(/####(\s\w+)+/).filter(item => /\-\s\[/.test(item));


const templet = (name, file, categories) => categories ?
`---
title: ${name}
categories: ${categories}
---
${file}` :
`---
title: ${name}
---
${file}`;

files.forEach(filename => {
  let file = fs.readFileSync(path.join(__dirname, '../qlear-issues.wiki/', filename), 'utf8').replace(/https:\/\/github.com\/rdd-giga\/qlear-issues\/wiki\//g, '/');
  const name = filename.replace(/\[\w+\]\-/g, '');
  const index = content.findIndex(v => ~v.indexOf(encodeURIComponent(name.slice(0, -3))) || ~v.indexOf(name.slice(0, -3)));
  
  fs.writeFileSync(path.join(resultPath, name), templet(name.slice(0, -3), file, sideTitle[index]));
});