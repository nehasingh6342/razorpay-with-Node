
// Inside app.js 
const express = require('express');
const cors = require("cors") 
const app = express();
const Port = 5000
const Razorpay = require('razorpay'); 

app.use(express.json());
app.use(cors());


app.get('/', (req,res)=>{
    res.send("Hello World")
})

app.post("/payment",async(req,res)=>{
    let {amount}  = req.body;
    var instance = new Razorpay({ key_id: 'rzp_test_6P3NILm41w3GDb', key_secret: 'VB2p3Ah0dhlNlJP5OMeokFTr' })  
    let order = instance.orders.create({
                amount: amount * 100,
                currency: "INR",
                receipt: "receipt#1",
                })
                res.status(201).json({
                    success : true,
                    order,
                    amount,
                })
})

app.listen(Port, ()=>{
    console.log(`Server is Listening on Port ${Port}`);
});

