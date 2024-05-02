function test(){
    for(var i=0;i<3;i++)// scope of vAR IS GLOBAL THAT WHY VALUE REMAINS SAME
    {
       setTimeout(function ecec(){
        console.log('i :', i);
       },i*1000);
    }
}
test();