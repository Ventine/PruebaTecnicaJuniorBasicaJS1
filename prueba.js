//Multiplicar dos numeros sin necesidad del signo de multiplicacion. 
const multiplay = (a,b) => {
	let resultado = 0;
	const positivo = Math.abs(b) == b;

	for(i=0; i < Math.abs(b); i++){
		resultado = positivo ? resultado + a : resultado - a;
	}
	return resultado;
}

const a = multiplay( 50,-50);
console.log(a);

//Numero mayor en un arreglo iterando una vez

const getbiggest = (arr) => arr.reduce((acc,el) => acc > el ? acc : el);

const b = getbiggest([50, -1500, 1000, 0, 1, 54]);

console.log(b);


//Elimiar undefined, null, ceros
const clean = (arr) => arr.reduce((acc, el) => {
	if(el){
		acc.push(el);
	}
	return acc;
	},[])
const c = clean([1,0,undefined,0,null,2]);
console.log(c);

//Aplanar los arreglos a un nivel

const flatten = arr => arr.reduce((acc,el) => acc.concat(el), []);
const f = flatten([[1,2],[[3,4]],[1,[]]])
console.log(f);

//Cantidad repetidas de palabras
const repeated = str => {
	const lowered = str.toLocaleLowerCase()
	const splitted = lowered.split(' ');
	const reduced = splitted.reduce((acc, el) => {
		if(acc[el]){
			acc[el]++;
		}else{
			acc[el] = 1;
		}
		return acc;
	}, {})
	return Object.entries(reduced).reduce((acc,el) => acc[1] > el[1] ? acc : el);
}
const e = repeated('This is a repeated word test this is a a');
console.log(e);

