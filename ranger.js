function ranger(tab){
    const result = [];
    tab.forEach(element => {
       if(element >= 0){ result.push(element);}else result.unshift(element); 
    });
    return result;
}
console.log(ranger([-5, -3, 2, 4, 0]  ));
