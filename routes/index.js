const express=require('express');
const router=express.Router();

console.log('router loded');
const homeController=require('../controller/home_controller');
router.get('/',homeController.home);


module.exports=router;