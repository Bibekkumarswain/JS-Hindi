// Immediately Invoked Function Expressions (IIFE)


/*function coffee(){
    console.log(`DB CONNECTED`);
}
coffee();*/

(function coffee(){
    console.log(`DB CONNECTED`);
})();

/*(function aurcode(){
    console.log(`SECOND DB CONNECTED`);
})();*/

(()=>{
    console.log(`SECOND DB CONNECTED`)
})();