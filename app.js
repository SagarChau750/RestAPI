const express = require('express');
const Product = require('./model/product')
const app = express();
const PORT = process.env.PORT || 5000;
const products_route = require("./routes/products");
const Connect = require('./db/Connect');
const removeDuplicates = require('./controllers/removeDup');
const cors = require('cors');

app.use(express.json());
app.use(cors());



app.get('/', (req, res)=>{
    res.send("hi i am live")
})

app.use('/api/product', products_route);
//removeDuplicates();

const start = async ()=>{
    try{
        await Connect();
        app.listen(PORT , ()=>{
            console.log(`${PORT} Yes I am connected`);
        })
    }catch(err){
        console.log(err);
    }
}

start();