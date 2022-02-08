const router=require('express').Router();
const admin = require("../config");
const database = admin.database();
const gamesRef = database.ref('/Games');
const check=require('../Checker');
router.get('/',(req,res)=>{
    res.render("index");
});
router.post('/AddUser',async (req,res)=>{
    const key=gamesRef.push().key;
    const user_id = req.body.players;
    console.log(req.body);
    gamesRef.child(`${key}/${user_id[0].pid}`).set({
        name:user_id[0].first_name,
        sym:user_id[0].symbol
        
    });
    gamesRef.child(`${key}/${user_id[1].pid}`).set({
        first_name:user_id[1].first_name,
        
        sym:user_id[1].symbol
        
    });
    gamesRef.child(`${key}/state`).set(req.body.state);
    
    gamesRef.child(key).on('child_added',snapshot=>{
        console.log(snapshot.val());
    });
    res.status(200).send({Success:true,ref:key});
});
router.put('/Update/:key',async(req,res)=>{
    
    const key=req.params.key;
    var sym=req.body.sym;
    console.log(req.body.id);
    database.ref(`/Games/${key}`).child(`state/${req.body.id}`).set(sym);
    gamesRef.child(key).once('value',snapshot=>{
        var data=snapshot.val();
        data['sym']=sym;
        console.log(data);
        var k=check.Status(data.state,req);
        var s=k.status;
        if(k.status=="won"){
            s+=" "+k.player;
        }
    gamesRef.child(key).child("Status").set(s);
    res.send(k);
        
        
       
     });
    //res.send("ok")
    
    
});
module.exports=router;