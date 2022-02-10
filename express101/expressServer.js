const path=require('path');

const express = require('express');
const app = express();

app.use(express.static('public'));

app.all('/', (req, res)=>{
// res.send(`<h1>This is home page</h1>`)
res.sendFile(path.join(__dirname + '/node.html'))
});
app.all('*',(req, res)=>{
  res.send('<h1>Sorry, this page is not found...</h1>')
})

app.listen(3000);
console.log('The server is listening on port 3000');