
let row = document.querySelector('.row');
//stampa in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    
    
                


    //Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz" al posto del numero
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('FizzBuzz');
        let number_5_3 = `<div class="col">
                            <div class="square bg-danger d-flex justify-content-center align-items-center">FizzBuzz</div>
                        </div>`;
        row.insertAdjacentHTML('beforeend', number_5_3);   

        //Per i multipli di 5 stampi "Buzz" al posto del numero
    } else if (i % 5 == 0) {
        console.log('Buzz');
        let number_5 = `<div class="col">
                            <div class="square bg-success d-flex justify-content-center align-items-center">Buzz</div>
                        </div>`;
        row.insertAdjacentHTML('beforeend', number_5);  
        //Per i multipli di 3 stampi “Fizz” al posto del numero
    } else if (i % 3 == 0) {
        console.log('Fizz');
        let number_3 = `<div class="col">
                            <div class="square bg-warning d-flex justify-content-center align-items-center">Fizz</div>
                        </div>`;
        row.insertAdjacentHTML('beforeend', number_3);  

    } else {
        //stampa il valore di "i"
        console.log(i);
        //Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
        let number = `<div class="col">
                      <div class="square d-flex justify-content-center align-items-center">${i}</div>
                  </div>`;
        row.insertAdjacentHTML('beforeend', number);  
        
    }
};