function ranger(tab){
    let indexTemp = 0;
    for (let i = 1; i < tab.length; i++) {
        let valTemp = 0;
        if(tab[i] <= tab[indexTemp]){ 
            valTemp = tab[indexTemp];
            tab[indexTemp] = tab[i];
            tab[i] = valTemp;
            indexTemp++;
        }
    }
    return tab;
}
console.log(ranger([3, -1, 0, 4, -2, 5, -3]  ));

