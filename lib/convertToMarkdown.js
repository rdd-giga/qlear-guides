const fs = require('fs');
const path = require('path');
const resultPath = path.join(__dirname, '../source/_posts/');
const traget = path.join(__dirname, '../qlear-issues.wiki/');
const exclude = ['DST-OPC-2000.md', 'Tongdy-MSD.md', 'TSI-Air-Assure.md', 'Particle-Plus.md'];

const files = fs.readdirSync(traget)
  .filter(filename =>
    ~filename.indexOf('.md')
    && !~filename.indexOf('Deprecated')
    && !~filename.indexOf('Sidebar')
    && !~exclude.indexOf(filename)
);

const sidebar = fs.readFileSync(path.join(__dirname, '../qlear-issues.wiki/', '_Sidebar.md'), 'utf8').replace(/https:\/\/github.com\/rdd-giga\/qlear-issues\/wiki\//g, '/');
const sideTitle = sidebar.match(/####(\s\w+)+/g).map( v => v.replace(/####\s/, ''));
const content = sidebar.split(/####(\s\w+)+/).filter(item => /\-\s\[/.test(item));

const templet = (name, file, categories, subTitle, sortIndex) => {
  let content = ['---', `title: '${name}'`];
  if (categories) content.push(`categories: '${categories}'`);
  if (subTitle) content.push(`subTitle: '${subTitle}'`);
  content = content.concat([`sortIndex: '${sortIndex}'`, '---', file]);
  return content.join('\n');
}


files.forEach(filename => {
  let file = fs.readFileSync(path.join(__dirname, '../qlear-issues.wiki/', filename), 'utf8').replace(/https:\/\/github.com\/rdd-giga\/qlear-issues\/wiki\//g, '/');
  const name = filename.replace(/\[\w+\]\-/g, '').replace(/-/g, ' ');
  const index = content.findIndex(v => ~v.indexOf(encodeURIComponent(filename.slice(0, -3))) || ~v.indexOf(filename.slice(0, -3)));
  let subTitle = null;
  let sortIndex = -1;
  if (~index) {
    let group = content[index].replace(/%3/g, '?').match(/(\s*-\s\[[\s\w\.\?\&\!\-]*\]\(\/[\w\-\:\?\.\&]*\))/g);
    sortIndex = group.findIndex(v => ~v.indexOf(encodeURIComponent(filename.slice(0, -3))) || ~v.indexOf(filename.slice(0, -3)));
    const length = group.find(v => ~v.indexOf(encodeURIComponent(filename.slice(0, -3))) || ~v.indexOf(filename.slice(0, -3))).match(/\s+\-/)[0].length;

    if (length === 6) {
      const index = group.findIndex(v => ~v.indexOf(encodeURIComponent(filename.slice(0, -3))) || ~v.indexOf(filename.slice(0, -3)));
      group = group.slice(0, index).reverse();
      for (var i = 0; i < group.length; i++) {
        if (group[i].match(/\s+\-/)[0].length !== 6) {
          subTitle = group[i].match(/\/[\w\-\:\?\.\&]*/)[0].slice(1).replace(/-/g, ' ');
          break;
        }
      }

    }
  }

  fs.writeFileSync(path.join(resultPath, name.replace('?', '')), templet(name.slice(0, -3), file, sideTitle[index], subTitle, sortIndex));
});

// (\s * -\s\[[\s\w] +\]\(\/Locations:-Add-to-Dashboard\))
// (\s * -\s\[[\s\w] +\]\(\/[\w:-]+\))




