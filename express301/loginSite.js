const express = require('express');
const app = express();

const path = require('path');
const cookieParser=require('cookie-parser');

const helmet = require('helmet');
app.use(helmet());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res, next)=>{
res.send('Check')
})

app.get('/login', (req, res, next)=>{
res.render('login')
})

app.post('/process_login', (req,res,next)=>{
  const password = req.body.password;
  const username= req.body.username;
if(password ==='x'){
  res.cookie('username', username);
  res.redirect('/welcome');
} else{
  res.redirect('/login?msg=fail')
}

  // res.json(req.body)
})

app.get('/welcome', (req,res,next)=>{
  res.render('welcome', {
    username: req.cookies.username
  })
})

app.get('/statement', (req,res,next)=>{
res.download(path.join(__dirname, 'userStatements/BankStatement.png'))
})

app.get('/logout', (req, res, next)=>{
  res.clearCookie('username');
  res.redirect('/login')
  })

app.listen(3000)
console.log("Server started on 3000");