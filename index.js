const express=require('express');
const port =8000;
const app=express();
const cookiesParser=require('cookie-parser');
const expressLayouts=require('express-ejs-layouts');
app.use(expressLayouts);

app.use(express.static('./assets'));
app.use(express.urlencoded());
app.use(cookiesParser());
app.set('layout extractStyles',true);
app.set('layout extractScripts',true)
app.use('/',require('./routes/index'));
app.use('/',require('./routes/user'));
app.set('view engine','ejs');
app.set('views','./view')
const db=require('./cofig/mongoose');

app.listen(port,(err)=>{
    if(err)
    {
        console.log(`error getting runing in the server: ${err}`);
        return;
    }
    console.log(`server runing on the port :${port}`);
})