function spl(arr, index){
return arr.splice(0,index)
}
// console.log(spl([1,2,3,4,5],3));

function slic(arr, index){
return arr.slice(0,index)
}
// console.log(slic([1,2,3,4,5], 3));


function fil(arr, index){
return arr.filter(n => n > index)
}
console.log(fil([1,2,3,4,5], 2))

function rem(arr,index){
 arr.length = index;
 return arr
}
console.log(rem([1,2,3,4,5],2))

function arr(array, index){
    while(array.length){
        array.pop();
        if(array.length = index){
            break;
        }
    }
    return array
}
console.log(arr([1,2,3,4,5],3))

