const path = require('path');

const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, 'views'))

function validateUser(req, res, next){
  res.locals.validated=true;
  next();
}

app.use(validateUser);

app.get('/', (req, res, next)=>{
  res.render('index', {
    msg: "Success!",
    msg2: "Hi, Node.js",
    html: `<p><img src="${path.join(__dirname, "EQgJ4p77Aeo.jpg")}"/></p>`
  })
})

app.listen(3000);