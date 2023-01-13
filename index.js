const express=require('express');
const port =8000;
const app=express();

app.use('/',require('./routes/index'));
app.use('/',require('./routes/user'));
app.set('view engine','ejs');
app.set('views','./view')

app.listen(port,(err)=>{
    if(err)
    {
        console.log(`error getting runing in the server: ${err}`);
        return;
    }
    console.log(`server runing on the port :${port}`);
})