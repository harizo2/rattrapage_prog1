function ranger(tab){
    const result = [];
    for(let element of tab){
         if(element >= 0){ result.push(element);}else result.unshift(element); 
    }
    return result;
}
console.log(ranger([-5, -3, 2, 4, 0]  ));
