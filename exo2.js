function Echanger(tab, element1, element2){
    let temp = tab[element2];
    tab[element2] = tab[element1];
    tab[element1] = tab[temp];
    return tab;
}
console.log(Echanger([0, 1, 0], 1,2));

function Ranger(tab){
    let result = [];
    for (let element of tab){
        if(element == 0){ result.unshift(element);}else{result.push(element)}
    }
    return result;
}
console.log(Ranger([0, 1, 0, 0, 1, 0]));

function NombreUn(tab){
    let count = 0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] == 1) {count++;}
    }
    return count;
}

console.log(NombreUn([0, 0, 0, 0, 1, 1]));

export default NombreUn;