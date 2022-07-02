const { rejects } = require('assert');
const fs=require('fs');
const { resolve } = require('path');


const readFile=(filePath)=>{

    return new Promise((resolve,reject)=>{

        fs.readFile(filePath,(err,data)=>{
            if(err){
                console.log(err);
                reject(err);
            }
            // '{"id":"2","name":"banana"}'
            const products=JSON.parse(data);
            // {id:2,name:"banana"}
            resolve(products);
          
         });
    
    });

};


const writeFile=(filePath,data)=>{
    return new Promise((resolve,reject)=>{
         // {id:2,name:"banana"}
        const content =JSON.stringify(data);
         // '{"id":"2","name":"banana"}'

        fs.writeFile(filePath,content,(err)=>{
            if(err){
                reject(err);
            }
            resolve();
        })
    })
}

module.exports={
readFile,
writeFile,
};