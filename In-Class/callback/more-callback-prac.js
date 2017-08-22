//callback hell example below

let http= require("http");
let fs= require('fs');

const server= http.createServer((req, res) => {
    fs.writeFile("filename.txt", "", (err) => {
      if (err) {
        console.log(err);
      }
        fs.appendFile("filename.txt", "Hello World", (err) => {
          if(err) {
            console.log(err);
          }
            fs.appendFile("filename.txt", "\nGoodbye World", (err) => {
              if(err) {
                console.log(err);
              }
                fs.readFile("filename.txt", "utf-8", (err, data) => {
                  if (err) {
                    console.log(err);
                  }
                    res.write(data);
                    res.end();
                });
            });
        });
    });
});

server.listen(fs.readFileSync('text.txt', 'utf-8'));
