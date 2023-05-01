let fs = require('fs');
let http = require('http');
let server = http.createServer(function (req, res) {
  if (req.url === '/') {
    let data = fs.readFileSync('index.html', 'utf-8');
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(data);
    res.end();
  }else if(req.url === '/blog.html'){
    let data = fs.readFileSync('blog.html', 'utf-8');
    res.writeHead(200,{ 'content-type':'text/html'});
    res.write(data);
    res.end();
  }else if(req.url === '/about.html'){
    let data = fs.readFileSync('about.html', 'utf-8');
    res.write(data);
    res.end();
  }else if(req.url === '/contact.html'){
    let data = fs.readFileSync('contact.html', 'utf-8');
    res.write(data);
    res.end();
  }else if (req.url === '/style.css') {
    let css = fs.readFileSync('style.css', 'utf-8');
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(css);
    res.end();
  }else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>404 Not Found</h1>');
    res.end();
  }
});
server.listen(3000);
console.log("server running at http://localhost:3000/");
