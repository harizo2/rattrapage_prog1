import NombreUn from "./exo2.js";
import { Echanger } from "./exo2.js";

function triLignes(matrice){
    let indexTemp = 0;
    for (let i = 1; i < matrice.length; i++) {
        let valueTemp = 0;
        if(NombreUn(matrice[i]) < NombreUn(matrice[indexTemp])){
            Echanger(matrice, indexTemp, i);
        }
        indexTemp++;
    }
    return matrice;
}
console.log(triLignes([ 
  [0, 0, 1, 1], 
  [0, 0, 0, 1], 
  [1, 1, 1, 1], 
  [0, 0, 0, 0] 
] ));
