let slideIndexV2 = 1;
showTheQuote(slideIndexV2);

function changeQuote(it){
    showTheQuote(slideIndexV2 += it);
}

function showTheQuote(it){
    let i;
    let numOfQuotes = document.getElementsByClassName('carousel-quote');
    if (it > numOfQuotes.length) {
        slideIndexV2 = 1
    }
    if (it < 1) {
        slideIndexV2 = numOfQuotes.length
    }
    for ( i = 0; i < numOfQuotes.length; i++){
        numOfQuotes[i].style.display = "none";
    }
    numOfQuotes[slideIndexV2-1].style.display = "block";
}