let profile=function(req,res){
    return res.render('user_profile',{
        title:"user-profile"
    })
}
module.exports=profile;