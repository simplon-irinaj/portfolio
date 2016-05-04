function removeDiv() {
    var arrayTuiles = document.getElementsByClassName("remove");
    for (var i = 0; i < arrayTuiles.length; i++) {
        arrayTuiles[i].style.display="none";
    }
}

function putDiv() {
    var arrayTuiles = document.getElementsByClassName("remove");
    for (var i = 0; i < arrayTuiles.length; i++) {
        arrayTuiles[i].style.display="";
    }
}

 
//  function à vérifier