const yaml = require('js-yaml');
const fs   = require('fs');
const YAML = require('yaml');

// Get document, or throw exception on error
try {
  const doc = yaml.load(fs.readFileSync('calculateModels.yml', 'utf8'));
  //const doc = fs.readFileSync('file.txt','utf8');
  console.log(doc);
} catch (e) {
  console.log(e);
}

var stream = fs.createWriteStream("nuevo2.yml");
stream.once('open', function(fd) {
  stream.write("Primera línea\n");
  stream.write("Segunda línea\n");
  stream.end();
});



const jsonObject = {
    version: "1.0.0",
    dependencies: {
        yaml: "^1.10.0"
    },
    package: {
        exclude: [ ".idea/**", ".gitignore" ]
    }
}

const doc = new YAML.Document();
doc.contents = jsonObject;

console.log(doc.toString());

const stre = fs.createWriteStream("nuevo3.yml");
stre.once('open', function(fd) {
    stre.write(doc.toString());
  });