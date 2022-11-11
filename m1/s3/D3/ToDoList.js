// Aggiungo al bottone un EventListener che scatenera la funzione al 'click'

document.querySelector('#aggiungi')
.addEventListener('click',function() {

    let task = document.querySelector('#input'); // raccolgo il testo inserito nell'input

    let div = document.createElement('div'); // creo un contenitore
    div.classList.add('puntolista'); // al quale assegno una classe
    document.querySelector('#lista').append(div); // inserisco il div creato nel contenitore della lista

    let p = document.createElement('p'); //creo un paragrafo
    div.append(p) // inserisco p nel div creato
    p.textContent = task.value; // nel quale inserisco il testo ottenuto dall'input

    //funzione che segna la task al click
    p.addEventListener('click', function() {
        p.style.textDecoration = "line-through"
    })

    let button = document.createElement('button'); // creo un finto bottone
    button.classList.add('fakebutton'); // assegno una classe
    div.append(button); //lo inserisco all'interno di div
    button.textContent = 'X'; // Testo inserito nel button

    //funzione che permette di 'eliminare' la task nascondendola all' utente
    button.addEventListener('click', function() {
        div.style.display = "none"
    })

    task.value = ''; // svuota il campo input
})

