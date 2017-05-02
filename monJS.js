
var operateur = prompt("Entrez votre opération: addition, soustraction, multiplication ou division");
    
function calcul(nbre1, nbre2) {
    if (operateur == '+') {
        return nbre1 + nbre2
    }
    else if (operateur == '-') {
        return nbre1 - nbre2
    }
    else if (operateur == '*') {
        return nbre1 * nbre2
    }
    else if (operateur == '/') {
        return nbre1 / nbre2
    }
    else {
        console.log("choisir une opération")
    }
    
}