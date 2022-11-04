//FUNZIONE PER AGGIUNGERE I NUMERI

function aggiungiCifra(bottone){

document.getElementById("numeri").value += bottone.getAttribute('data-simbolo');
}

//FUNZIONE PER IL TOTALE

function tot(){

    let numeri = document.getElementById("numeri");
    numeri.value = eval(numeri.value);
}

//FUNZIONE PER SVUOTARE IL CAMPO

function svuota(){

    document.getElementById("numeri").value = "";   
}