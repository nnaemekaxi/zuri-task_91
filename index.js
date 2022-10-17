const http = require('http');
const path = require('path');
const fs = require('fs');
const PORT = 3000;
const hostname = 'localhost';

const server = http.createServer(serverHandler);

function serverHandler(req, res) {
    if(req.method === 'GET' && req.url === '/') {
      let filePath = path.resolve(__dirname, 'index.html')
      let fileExists = fs.existsSync(filePath);
      if (!fileExists) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`
          <html>
            <body>
              <h3>Page not found</h3>
            </body>
          </html>`)
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(filePath).pipe(res);
      }
    } if(req.method === 'GET' && req.url === '/home') {
        let filePath = path.resolve(__dirname, 'index.html')
        let fileExists = fs.existsSync(filePath);
        if (!fileExists) {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html');
          res.end(`
            <html>
              <body>
                <h3>Page not found</h3>
              </body>
            </html>`)
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          fs.createReadStream(filePath).pipe(res);
        }
      } else if(req.method === 'GET' && req.url === '/about') {
        let filePath = path.resolve(__dirname, 'about.html')
        let fileExists = fs.existsSync(filePath);
        if (!fileExists) {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html');
          res.end(`
            <html>
              <body>
                <h3>Page not found</h3>
              </body>
            </html>`)
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          fs.createReadStream(filePath).pipe(res);
        }
      } else if(req.method === 'GET' && req.url === '/contact') {
        let filePath = path.resolve(__dirname, 'contact.html')
        let fileExists = fs.existsSync(filePath);
        if (!fileExists) {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html');
          res.end(`
            <html>
              <body>
                <h3>Page not found</h3>
              </body>
            </html>`)
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          fs.createReadStream(filePath).pipe(res);
        }
      }
  }

  server.listen(PORT, hostname, () => {
    console.log(`Server running at ${hostname}:${PORT}`);   
  })

