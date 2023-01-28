const express=require('express');
const router=express.Router();
const passport=require('passport');
const UserControll=require('../controller/user_controller');
router.get('/user',UserControll.profile);
router.get('/signUp',UserControll.signUp);
router.get('/signIn',UserControll.signIn);
router.post('/user-create',UserControll.create);
router.post('/user/create-session',UserControll.session)



module.exports=router;