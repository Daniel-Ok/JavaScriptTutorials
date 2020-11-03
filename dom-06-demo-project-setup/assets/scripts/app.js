/*-------------------------Variables ---------------*/
const addMovieModal = document.getElementById('add-modal');
//const addMovieModal = document.querySelector('#add-modal');

const startAddMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieBtn = addMovieModal.querySelector('.btn--passive');
const userInput = addMovieModal.querySelectorAll('input');
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;

/*------------------ Functions --------------*/
const addMovieHandler = () => {
    const titleValue = userInput[0].value;
    const imageUrllValue = userInput[1].value;
    const ratingValue = userInput[2].value;

    if (
        titleValue.trim() ===''||
        imageUrllValue.trim() ===''||
        ratingValue.trim() ===''||
        +ratingValue < 1 ||
        +ratingValue > 5 
    ) {
        alert('Please enter valid values (rating between 1 and 5).');
        return;
    }
};
const toggleMovieModal = () =>{ //function(){}
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const toggleBackdrop = ()=>{
    backdrop.classList.toggle('visible');
}
const backdropClickHandler = () =>{
    toggleMovieModal()
}
const cancelAddMovie = () =>{
    toggleMovieModal();
};

/*------------- buttons and event listeners ------------*/
startAddMovieBtn.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieBtn.addEventListener('click',cancelAddMovie);
confirmAddMovieBtn.addEventListener('click',addMovieHandler)