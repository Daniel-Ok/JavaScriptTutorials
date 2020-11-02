const addMovieModal = document.getElementById('add-modal');
//const addMovieModal = document.querySelector('#add-modal');

const startAddMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');


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

startAddMovieBtn.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);