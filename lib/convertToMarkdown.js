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

const templet = (name, file) =>
`---
title: ${name}
---
${file}`;

files.forEach(filename => {
  let file = fs.readFileSync(path.join(__dirname, '../qlear-issues.wiki/', filename), 'utf8').replace(/https:\/\/github.com\/rdd-giga\/qlear-issues\/wiki\//g, '/');
  const name = filename.replace(/\[\w+\]\-/g, '');
  fs.writeFileSync(path.join(resultPath, name), templet(name.slice(0, -3), file));
});