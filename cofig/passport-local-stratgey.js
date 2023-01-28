const passport=require('passport');
const localStrategry=require('passport-local').Strategy;
const user=require('../modals/user');
passport.use(new localStrategry({
    usernameField:'email'
},
function(email,password,done)
{
   user.findOne({email:email},function(err,user){
    if(err)
    {
        console.log('error in findig user passport');
        return done(err);
    }
    if(!user||user.password!=password){
        console.log('invalid username/password')
        return done(null,false);
    
    }
    return done(null,user);
   })
}
))


// serilize the authentication

passport.serializeUser(function(user,done){
    done(null,user.id);
})


// desrelize the aunthetication the part
passport.deserializeUser(function(id,done){
    user.findById(id,function(err,user){
        if(err)
        {
            console.log("finding the error in passport ");
            return done(err);
        }
        return done(null,user)
    })
})
module.exports=passport;
