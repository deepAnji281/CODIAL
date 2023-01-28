const user=require('../modals/user');

module.exports. profile=function(req,res){
    return res.render('user_profile',{
        title:"user-profile"
    })
}
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:"codial/signUp"
    })
}
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:"codial/signIn"
    })
}
// get the sign up data
module.exports.create=function(req,res)
{
    if(req.body.password!=req.body.confirm_password){return res.redirect('back')};
    
    user.findOne({email:req.body.email},function(err,user){
        if(err){console.log('err in siginig up',err);return;}
        if(!user){
            user.create(req.body,function(err,user){
                if(err){
                console.log('error while in siginig up',err);
                return;
                }
                return res.redirect('/signIn');
            })}
            else{
                return res.redirect('back')
            }
    })

}

module.exports.session=function(req,res)
{
  return res.redirect('/');
}

