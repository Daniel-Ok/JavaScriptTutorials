const addMovieModal = document.getElementById('add-modal');
//const addMovieModal = document.querySelector('#add-modal');

const startAddMovieBtn = document.querySelector('header button');

const toggleMovieModal = () =>{ //function(){}
    addMovieModal.classList.toggle('visible');
};

startAddMovieBtn.addEventListener('click', toggleMovieModal);