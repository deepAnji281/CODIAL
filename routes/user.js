const express=require('express');
const router=express.Router();
const UserControll=require('../controller/user_controller');
router.get('/user',UserControll.profile);
router.get('/signUp',UserControll.signUp);
router.get('/signIn',UserControll.signIn);
router.post('/user-create',UserControll.create);



module.exports=router;