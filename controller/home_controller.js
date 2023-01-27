module.exports.home=function(req,res,){
    console.log(req.Cookies);
  
    return res.render('home',{
        title:'Home'
    })
    
}