function mapper(arr , fn){
    /** */
    let result=[];
    for(let i=0;i<arr.length;i++){
        let res=fn(arr[i],i);
        result.push(res);

    }
    return result;
}
let arr=[1,2,3,4,5];
mapper(arr,function cuber(v,i))