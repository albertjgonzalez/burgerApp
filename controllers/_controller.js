const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

router.get('/',(req,res) =>{
    burger.all((data) =>{
        res.render('index',
        {burgers: data}
        )
})
})

router.post('/addBurger',(req,res) =>{
    
    burger.add(req.body.burger_name,(data) =>{
        console.log(data)
    })
    res.end()
})

router.delete('/deleteBurger',(req,res) =>{
    var id = req.body.burger_id
    console.log(id)
    burger.delete(id, (data) =>{
        console.log(data)
    })
    res.end()
})
module.exports = router;