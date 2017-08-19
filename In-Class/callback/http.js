let http= require('http');
let fs= require('fs');

const server = http.createServer(function (req, res) {
fs.readFile('textfile.txt', 'utf-8', function(err, data) {
    res.write(data);
    res.end();
  });
});

server.listen(fs.readFileSync('prop.conf.txt', 'utf-8'));

console.log('server listening on 3001');
