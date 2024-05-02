for(let u=0;u<10;u++){
    console.log(u);
}
// break we come out to nearest loop
for(let i=0;i<5;i++){
    let str=" ";
    for(let i=0;i<10;i++){
        if(i===3){
            continue;
        }
        console.log(i);
    }
}
// break;
 let val =10;
 switch(val){
    case 10:
        console.log("yes");
        break;
        default:
            console.log("no");
            break;
 }
