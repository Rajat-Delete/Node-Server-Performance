const express =  require('express');

const app = express();
// const os  = require('os');
// const cluster = require('cluster');


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
    delay(2000);
    response.send(`Beep Beep Beep!! ${process.pid}`);

})

//So Suppose if we are running /timer in one chrome console and immediately we ran same in another as well
//So the second tab will take make more as before that event loop was blocked 
//this is how delay can occur in event loops


//so we will make two worker threads out of our main node process
console.log('Running our Node Server!!')


/*
Commenting since now there is no need to clustering manually, we can do it by pm2
*/
// if(cluster.isMaster){
//     console.log('Master Process Started');

//     const NUM_WORKERS = os.cpus().length;
//     console.log('number of worker threads created are',NUM_WORKERS);
//     for(let i = 0;i<NUM_WORKERS;i++){
//         cluster.fork();
//     }
// }else{
//     console.log('Worker Process Started');
    app.listen(3001);
//}


 