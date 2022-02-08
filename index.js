const express=require('express');
const webroutes=require('./Route/web');
const path=require('path');
const app=express();

app.use(express.json());
app.use(webroutes);
app.set("view engine","ejs");
const port=process.env.PORT || 8000;
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname+'public'));
console.log(__dirname);


app.listen(port,e=>console.log(`Server running on ${port}`));