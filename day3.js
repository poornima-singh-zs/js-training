function sum(a){
    let total=a;
    return function addNext(b){
        if(!b ){
            return total;
        }
        total+=b;
        return addNext;
    }
    
}
console.log(sum(1)(2)(3)(4)());
console.log(sum(1)(2)());
console.log(sum(1)(2)(3)(4)(5)(6)());