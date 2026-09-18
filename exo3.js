import NombreUn from "./exo2.js";
function triLignes(matrice){
    let temp = 0;
    let result = [];
    for (let i = 1; i < matrice.length; i++) {
        if(NombreUn(matrice[i]) < NombreUn(matrice[temp])){
            result.push(matrice[temp]);
        }else{result.unshift(matrice[temp]);}
        temp++;
    }
    result.unshift(matrice[temp]);
    return result;
}
console.log(triLignes([ 
  [0, 0, 1, 1], 
  [0, 0, 0, 1], 
  [1, 1, 1, 1], 
  [0, 0, 0, 0] 
] ));
