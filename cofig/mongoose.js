const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost//codial_db');

const db=mongoose.connection;

db.on('error',console.error.bind('this is an error connecting to db'));

db.once('open',()=>{
    console.log("succesfully connected to db")
})
