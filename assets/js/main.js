/* 
RIFLESSIONI DA FARE:
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
divido i due numeri e il resto deve essere 0 con modulo

Come creare nuovi elementi html e appenderli al container?

proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/

//stampa in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++){

    //Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz" al posto del numero
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('FizzBuzz');

     //Per i multipli di 5 stampi "Buzz" al posto del numero
   } else if (i % 5 == 0){
       console.log('Buzz');

    //Per i multipli di 3 stampi “Fizz” al posto del numero
   } else if (i % 3 == 0) {
        console.log('Fizz');

   } else{
       //stampa il valore di "i"
       console.log(i);
   }
};










//Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.


//Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.