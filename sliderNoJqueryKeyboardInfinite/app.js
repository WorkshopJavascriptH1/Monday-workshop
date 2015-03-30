/**
 * Change les slides
 * @param bool direction
 *
 */
function moveSlides(direction) {
    // Si direction == 0 alors on va en arriere
    // Sinon on va en arriere
    var slide = (direction === 0) ? currentSlide - 1 : currentSlide + 1;

    // Si la prochaine slide n'existe pas
    slide = outOfRange(slide);  

    elements[currentSlide].style.display = "none";
    elements[slide].style.display = "block";
    currentSlide = slide;
}


/**
 * Methode executee lors du clique sur les touches du clavier
 *
 */
function keyCallback(e) {
    switch (e.keyCode) {
        case 37:
            moveSlides(0);
            break;
        case 39:
            moveSlides(1);
            break;
    }
}


/**
 * Methode pour verifie que la slide existe
 * @param int slide
 * @return bool
 *
 */
function outOfRange(slide) {
   if (slide < 0){
        return elements.length-1;
   } else if (slide >= elements.length){
        return 0;
   }

   return slide;
}


/** INIT **/
var elements = document.querySelectorAll('.slide');
var next = document.querySelector('#next');
var previous = document.querySelector('#previous');
var currentSlide = 0;

elements[currentSlide].style.display = "block";

/** LISTENER **/
next.addEventListener('click', function () {
    moveSlides(1);
});

previous.addEventListener('click', function () {
    moveSlides(0);
});

document.addEventListener('keyup', keyCallback);
