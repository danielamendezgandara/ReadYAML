const yaml = require('js-yaml');
const fs   = require('fs');

// Get document, or throw exception on error
try {
  const doc = yaml.load(fs.readFileSync('calculateModels.yml', 'utf8'));
  //const doc = fs.readFileSync('file.txt','utf8');
  console.log(doc);
} catch (e) {
  console.log(e);
}