console.log("Hello, World!");let olympicsMedalTable = [
    { id: 1, country: "BRASIL", gold: 7, silver: 6, bronze: 6, continent: "AMERICA DO SUL" },
    { id: 2, country: "USA", gold: 46, silver: 37, bronze: 17, continent: "AMERICA DO NORTE" },
    { id: 3, country: "CHINA", gold: 26, silver: 18, bronze: 26, continent: "ASIA" },
    { id: 4, country: "RUSSIA", gold: 19, silver: 18, bronze: 19, continent: "EUROPA" },
    { id: 5, country: "REINO UNIDO", gold: 27, silver: 23, bronze: 17, continent: "EUROPA" },
    { id: 6, country: "ALEMANHA", gold: 17, silver: 10, bronze: 15, continent: "EUROPA" },
    { id: 7, country: "JAPÃO", gold: 12, silver: 8, bronze: 21, continent: "ASIA" },
    { id: 8, country: "ARGENTINA", gold: 3, silver: 1, bronze: 0, continent: "AMERICA DO SUL" },
    { id: 9, country: "ITALIA", gold: 8, silver: 12, bronze: 8, continent: "EUROPA" },
    { id: 10, country: "QUÊNIA", gold: 6, silver: 6, bronze: 1, continent: "AFRICA" },
];

Array.prototype.customFind = function (predicate) {
    
    // Implemente aqui seu algoritmo
    //verifica se a função possui argumentos
    if (this == null) 
      throw new TypeError('Valor indefinido');
  
    //Verifica se não é função
    if (typeof predicate !== 'function') {
      throw new TypeError('Função não encontrada');
    }
   
    //variável de objeto,tamanho,argumento,retorno,contador,array retorno
    var lista = Object(this);
    var tamanho = lista.length >>> 0;
    var argumento = arguments[1];
    var valor;
	var A;
	var cont = 0;
	A = new Array(tamanho);
	    
    //procura valor, adiciona na variável, procura país e adiciona no array, aciona contador
    for (var i = 0; i < tamanho; i++) {
        valor=lista[i];
		if(predicate.call(argumento, valor, i, lista)){
			A[cont]=valor.country;
			cont++;
		}
	}
	
	//cria array de tamanho cont, seta array B de array A, retorna o valor de B ou null
	var B = new Array(cont);
	for (var i = 0; i < cont; i++) 
      B[i]=A[i];
	
	return B;
	return null;
}

Array.prototype.customSome = function (predicate) {
    
	// Implemente aqui seu algoritmo
    //verifica se a função possui argumentos
    if (this == null) 
      throw new TypeError('Valor indefinido');
  
    //Verifica se não é função
    if (typeof predicate !== 'function') {
      throw new TypeError('Função não encontrada');
    }
   
    //variável de objeto,tamanho,argumento
    var lista = Object(this);
    var tamanho = lista.length >>> 0;
    var argumento = arguments[1];
        
    //verifica se o valor procurado está na lista, retorna true se existe, retorna false se não existe
    for (var i = 0; i < tamanho; i++) {
      if (predicate.call(argumento, lista[i], i, lista)) {
        return true;
      }
    }
	  
    return false;
}

Array.prototype.customFilter = function (predicate) {
    
    // Implemente aqui seu algoritmo
	//verifica se a função possui argumentos
    if (this == null) 
      throw new TypeError('Valor indefinido');
  
    //Verifica se não é função
    if (typeof predicate !== 'function') {
      throw new TypeError('Função não encontrada');
    }
   
    //variável de objeto,tamanho,argumento,valor
    var lista = Object(this);
	var argumento = arguments.length >= 2 ? arguments[1] : void 0;
    var tamanho = lista.length >>> 0;
    var valor = [];
	
    //verificar a lista, atribui valor ao array valor da variável val, 
    for (var i = 0; i < tamanho; i++) {
        var val = lista[i];
        if (predicate.call(argumento, val, i, lista)) {
          valor.push(val);
        }
     }

    return valor;
    return [];
}

Array.prototype.customMap = function (callback) {
    
    // Implemente aqui seu algoritmo
    //verifica se a função possui argumentos
    if (this == null) 
      throw new TypeError('Valor indefinido');
  
    //Verifica se não é função
    if (typeof callback !== 'function') {
      throw new TypeError('Função não encontrada');
    }
   
    //variável de objeto,tamanho,argumento,valor,array A
    var lista = Object(this);
    var tamanho = lista.length >>> 0;
    var argumento = arguments[1];
    var valor;
	var A;
  	A = new Array(tamanho);
  	var mapvalue;
    
    //verifica se o valor procurado está na lista,atribui valor ao array, retorna o array A ou vazio
    for (var i = 0; i < tamanho; i++) {
      valor=lista[i];
		  mapvalue=callback.call(argumento, valor, i, lista);
	    A[i]=mapvalue;
	  }
	  
	  return A;
	  return [];
}

Array.prototype.customReduce = function (callback, initialValue) {
    
	// Implemente aqui seu algoritmo
    //verifica se a função possui argumentos
    if (this == null) 
      throw new TypeError('Valor indefinido');
  
    //Verifica se não é função
    if (typeof callback !== 'function') {
      throw new TypeError('Função não encontrada');
    }
   
    //variável de objeto,tamanho,valor,k
    var lista = Object(this);
    var tamanho = lista.length >>> 0;
    var valor;
  	var k=0;
  	
  	//verifica se possui argumentos, recebe o valor da lista
  	if (arguments.length == 2) {
      valor = arguments[1];
    } else {
      while (k < tamanho && !(k in lista)) {
        k++;
      }
      if (k >= tamanho) {
        throw new TypeError('Array sem valor inicial');
      }
      valor = lista[k++];
    }
    
    //seta o valor de retorno com os índices da lista
    for (; k < tamanho; k++) {
        valor = callback(valor, lista[k], k, lista);
    }
    return valor;
    return null;
}

// Código modelo utilizando filter, map e reduce

const resultFilterMapReduce = olympicsMedalTable.filter(i => i.continent === "ASIA") // JAPÃO e CHINA 
    .map(i => i.gold) // 26 e 12
    .reduce((total, quantity) => total + quantity); // 38

console.log(`Medalhas de Ouro no continente Asiático: ${resultFilterMapReduce}`);


// Implemente as funções customizadas - customFilter, customMap e customReduce e verique se o retorno é igual ao do código modelo
const resultByCustomFilterMapReduce = olympicsMedalTable.customFilter(i => i.continent === "ASIA")
    .customMap(i => i.gold)
    .customReduce((total, quantity) => total + quantity);

console.log(`Resultado custom - Medalhas de Ouro no continente Asiático: ${resultByCustomFilterMapReduce}`);

/* DESAFIOS - CONCLUA AS FUNÇÕES customSome, customFind E UTILIZANDO TODAS AS FUNÇÕES 'CUSTOM' CONCLUA OS DESAFIOS ABAIXO: */

// 1 - Crie um algoritmo que encontre o único pais do continente Africano
//const paisAfricano =  olympicsMedalTable.customFind(i => i.continent === "AFRICA");
//console.log(paisAfricano);
const paisAfricano = olympicsMedalTable.customFind(i => i.continent === "AFRICA");
 console.log(`1 - ÚNICO DA AFRICA: ${paisAfricano}`);

// 2 - Crie um algoritmo que retorne o total de medalhas por país
//const medalhasPorPais =  olympicsMedalTable.customFilter(i => i.country !== "ASIA")    .customMap(i => i.gold+i.silver+i.bronze);
//console.log(medalhasPorPais);
const medalhasPorPais =  olympicsMedalTable.customFilter(i => i.country !== "ASIA")
 .customMap(i => i.gold+i.silver+i.bronze);
 console.log(`2 - TOT MEDALHA /PAIS: ${medalhasPorPais}`);

// 3 - Crie um algoritmo para encontrar os países que conquistaram mais que 10 medalhas de ouro
//const paisesCom10MedalhasOuroNoMinimo =  olympicsMedalTable.customFind(i => i.gold > 10);
//console.log(paisesCom10MedalhasOuroNoMinimo);
const paisesCom10MedalhasOuroNoMinimo = olympicsMedalTable.customFind(i => i.gold > 10)
 console.log(`3 - PAIS > 10 OURO: ${paisesCom10MedalhasOuroNoMinimo}`);

// 4 - Crie um algoritmo para encontrar os países que conquistaram no minímo 30 medalhas (Ouro, Prata e Bronze)
//const paisesCom30MedalhasNoMinimo =  olympicsMedalTable.customFind(i =>( i.gold+i.silver+i.bronze )> 30);
//console.log(paisesCom30MedalhasNoMinimo);
const paisesCom30MedalhasNoMinimo =  olympicsMedalTable.customFind(i =>( i.gold+i.silver+i.bronze )> 30);
 console.log(`4 - PAÍS MÍNIMO 30 MEDALHAS: ${paisesCom30MedalhasNoMinimo}`);

// 5 - Crie um algoritmo para verificar se o continente América do Sul conquistou pelo menos 20 medalhas de ouro
//const paisesComPeloMenos20MedalhasDeOUro =  olympicsMedalTable.customFilter(i => i.continent ==="AMERICA DO SUL" ).customSome(i => i.gold > 20);
//console.log(paisesComPeloMenos20MedalhasDeOUro);
const paisesComPeloMenos20MedalhasDeOUro = olympicsMedalTable.customFilter(i => i.continent ==="AMERICA DO SUL" )
 .customSome(i => i.gold > 20);
 console.log(`5 - MÍNIMO 20 OURO NA AMÉRICA DO SUL: ${paisesComPeloMenos20MedalhasDeOUro}`);
