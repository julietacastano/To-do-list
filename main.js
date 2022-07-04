const listaDelSuper = ['Huevos ','Manteca ','Leche'];
let contador = ' ';

for (i=0; i<3; i++){
    contador += listaDelSuper[i]
}
console.log(contador);

const item = [1, 4, 6, 3]
let cantidadDeItems = 0

for(i=0; i<4; i++){
    cantidadDeItems += item[i]
}
console.log (cantidadDeItems)
if(cantidadDeItems<=15){
    console.log('Podes ir por la caja rapida!')
}else{
    console.log('Te pasaste, caja comun')
}
