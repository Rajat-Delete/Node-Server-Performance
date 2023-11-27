const express =  require('express');

const app = express();


//function which is responsible for causing the delay 
function delay(duration){
    const startTime = Date.now();
    while(Date.now() - startTime < duration){
        //event loop is blocked here till the duration
    }
}

app.get('/',(request,response)=>{
    response.json({
        Message : 'Performance Example!!'
    })
})

app.get('/timer',(request,response)=>{
    delay(9000);
    response.json({
        Message : 'Ding Ding Ding!!'
    })

})

//So Suppose if we are running /timer in one chrome console and immediately we ran same in another as well
//So the second tab will take make more as before that event loop was blocked 
//this is how delay can occur in event loops


app.listen(3001);