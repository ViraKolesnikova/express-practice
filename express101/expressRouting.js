const express =require('express');
const app = express();

// App methods:
// app.all();
// app.get();
// app.post();
// app.put();
// app.delete();

app.get('/', (req, res)=>{
  res.send('<h1>Welcome to the GET home page</h1>')
});
app.post('/', (req, res)=>{
  res.send('<h1>Welcome to the POST home page</h1>')
});
app.put('/', (req, res)=>{

});
app.delete('/', (req, res)=>{

});


app.listen(3000);
console.log('listening on port 3000');