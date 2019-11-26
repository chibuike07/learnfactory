function add4(...a){
  let i = 0;
  let sum = 0;
  do{
    sum += a[i];
    i++;
  }while(i < a.length){
    console.log(sum)
    return sum;
  }
}
add4(1,2,3,4,5)

function add0(...a){
 let sum = a.reduce((a,b) => a + b, 0);
 console.log(sum)
}

add0(1,2,3,4,5)
function add(...arg) {
    let sum = 0;
   (arg.map(n => sum += n))
   return sum

}
console.log(add(1, 2, 3, 4, 5));
function add5(...a){
  let sum = 0;
  a.forEach(n => sum += n);
  return sum
}
console.log(add5(1,2,3,4,5))
