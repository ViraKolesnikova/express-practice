const http=require('http');

const fs = require('fs');


const server = http.createServer((req, res)=>{
// console.log(req);
// console.log(req.url);
if(req.url === '/'){
  res.writeHead(200, {'content-type': 'text/html'});
  const homePage = fs.readFileSync('./node.html');
  res.write(homePage);
  res.end();
} else if(req.url === '/logo.png'){
  res.writeHead(200, {'content-type': 'image/png'});
  const image = fs.readFileSync('logo.png');
  res.write(image);
  res.end();
} else if(req.url === '/styles.css'){
  res.writeHead(200, {'content-type': 'text/css'});
  const css = fs.readFileSync('styles.css');
  res.write(css);
  res.end();
}else{
  res.writeHead(404, {'content-type': 'text/html'});
  res.write('<h3>Sorry, this page is not found...</h3>');
  res.end();
}
})

server.listen(3000);