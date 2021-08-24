function callName(name,cb){
    console.log(cb(name));
}
callName("ari",(n)=>{return n})