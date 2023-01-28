const express=require('express');
const port =8000;
const app=express();
const cookiesParser=require('cookie-parser');
const expressLayouts=require('express-ejs-layouts');
const session=require('express-session');
const passport=require('passport');
const localPassport=require('./cofig/passport-local-stratgey');
app.use(expressLayouts);

app.use(express.static('./assets'));
app.use(express.urlencoded());
app.use(cookiesParser());
app.set('layout extractStyles',true);
app.set('layout extractScripts',true)

app.set('view engine','ejs');
app.set('views','./view')
app.use(session({
    name:'codial',
    secret:'somethingblah',
    saveUninitialized:false,
    resave:false,
    cookie:{
      maxAge:(1000*60*100)
    }
}))
app.use(passport.initialize());
app.use(passport.session())
app.use('/',require('./routes/index'));
app.use('/',require('./routes/user'));
const db=require('./cofig/mongoose');

app.listen(port,(err)=>{
    if(err)
    {
        console.log(`error getting runing in the server: ${err}`);
        return;
    }
    console.log(`server runing on the port :${port}`);
})