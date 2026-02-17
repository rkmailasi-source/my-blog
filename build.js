const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'content', 'posts');
const outputFile = path.join(__dirname, 'content', 'posts.json');

if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
  fs.writeFileSync(outputFile, '[]');
  process.exit(0);
}

const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
fs.writeFileSync(outputFile, JSON.stringify(files, null, 2));
console.log('Built posts.json with', files.length, 'post(s)');
