console.log ('JS OK')

/*Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.*/


//PRENDO GLI ELEMENTI DAL DOM
//CREO UN CICLO FOR DA 1 A 100
//VERIFICO SE IL NUMERO E' DIVISIBILE PER 3
    //VERIFICO SE IL NUMERO E' ANCHE DIVISIBILE PER 5
        //SE SI' STAMPO FizzBuzz
        //SE NO STAMPO Fizz
//VERIFICO SE IL NUMERO E' DIVISIBILE PER 5
    //SE SI' STAMPO Buzz
//SE NON SONO DIVISIBILI PER 3 E 5 STAMPO IL NUMERO

//Prendo gli elementi dal DOM
const targetElement = document.querySelector('.row');


//Faccio un ciclo for da 1 a 100
for (let i = 1; i <= 100; i++) {

   //Verifico se il numero sia divisibile per 3 

   if (i % 3 === 0){

       //Verifico se il numero sia divisibile anche per 5

    if(i % 5 === 0){
        //se è divisibile anche per 5 stampo FizzBuzz
        targetElement.innerHTML += 
        `<div class="col d-flex justify-content-center align-items-center py-3">
            <div class="cs-box fizzbuzz">
                FizzBuzz
            </div>
        </div>`
        console.log('FizzBuzz');
    }
    else{
         //se non è divisibile per 5 stampo Fizz
         targetElement.innerHTML += 
         `<div class="col d-flex justify-content-center align-items-center py-3">
             <div class="cs-box fizz">
                 Fizz
             </div>
         </div>`
         console.log('Fizz');

    }
} 


}
