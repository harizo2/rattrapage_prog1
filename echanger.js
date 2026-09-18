function echanger(tab, element1, element2){
    let temp = tab[element2];
    tab[element2] = tab[element1];
    tab[element1] = tab[temp];
    return tab;
}

console.log(echanger([0, 1, 0], 1,2));
