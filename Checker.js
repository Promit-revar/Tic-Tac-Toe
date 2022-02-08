
exports.Status=(data,req) => {      
        for(var i=0;i<=6;i+=3){
            var freq=data.slice(i,i+3);
            console.log(data.slice(i,i+3));
            if(freq[0]==freq[1]&& freq[1]==freq[2] && freq[1]==req.body.sym){
                console.log({status:"won",player:req.body.pid});
                
                 return {status:"won",player:req.body.pid};
            }
        }
        for(var i=0;i<=2;i++){
            
            if(data[i]==data[i+3]&& data[i+3]==data[i+6] && data[i+6]==req.body.sym){
                console.log( {status:"won",player:req.body.pid});
               
                return {status:"won",player:req.body.pid};
            }
        }
        
        if((data[0]==data[4]&& data[4]==data[8] && data[8]==req.body.sym) || (data[2]==data[4]&& data[4]==data[6] && data[6]==req.body.sym)){
               console.log( {status:"won",player:req.body.pid});
               
                 return {status:"won",player:req.body.pid};
            }
        else if(data.indexOf('-')>-1){
            console.log( {status:"pending"});
           
                return {status:"pending"};
        }
        else{
            console.log({status:"Draw"});
           
            return {status:"Draw"};
        }
    }
    