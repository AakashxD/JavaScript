function test(){
    for(let i=0;i<3;i++)// scope block 
    {
       setTimeout(function ecec(){
        console.log('i :', i);
       },i*1000);
    }
}
test();