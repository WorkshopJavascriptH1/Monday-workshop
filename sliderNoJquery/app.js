/**
 * Methode executee lors du clique sur NEXT
 *
 */
function nextCallback () {
    var nextSlide = currentSlide + 1;
    
    // On check les boutons
    verifyButtons(nextSlide);
    
    elements[currentSlide].style.display = "none";
    elements[nextSlide].style.display = "block";
    currentSlide = nextSlide;
    
}

/**
 * Methode executee lors du click sur PREV
 *
 */
function previousCallback() {
    var prevSlide = currentSlide - 1;
    
    // On check les boutons
    verifyButtons(prevSlide);
    
    elements[currentSlide].style.display = "none";
    elements[prevSlide].style.display = "block";
    currentSlide = prevSlide;
}

/**
 * Methode pour verifier si les boutons
 * doivent etre caches ou affiches
 * @param int slide Prochain slide affiche
 *
 */
function verifyButtons(slide) {
    if (slide >= (elements.length - 1)) {
        next.style.display = "none";
    } else {
        next.style.display = "inline";
    }
    
    if (slide <= 0) {
        previous.style.display = "none";
    } else {
        previous.style.display = "inline";
    }
}


/** INIT **/
var elements = document.querySelectorAll('.slide');
var next = document.querySelector('#next');
var previous = document.querySelector('#previous');
var currentSlide = 0;

elements[currentSlide].style.display = "block";
verifyButtons(currentSlide);

/** LISTENER **/
next.addEventListener('click', nextCallback);
previous.addEventListener('click', previousCallback);
