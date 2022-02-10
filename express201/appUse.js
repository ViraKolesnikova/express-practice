const express = require('express');
const app = express();

function validateUser(req, res, next){
res.locals.validated = true;
console.log('Validated run');
next();
}

// this will run on all paths, all methods
app.use(validateUser);
//  this will run on /admin, all methods
app.use('/admin', validateUser)
// this will run on / path, only on get method
app.get('/', validateUser)

app.get('/', (req, res, next)=>{
  res.send('<h1>Main home page</h1>')
})

app.get('/admin', (req, res, next)=>{
  res.send('<h1>Admin page</h1>')
})

app.listen(3000)