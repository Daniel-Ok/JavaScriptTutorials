/*-------------------------Variables ---------------*/
const addMovieModal = document.getElementById('add-modal');
//const addMovieModal = document.querySelector('#add-modal');

const startAddMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieBtn = addMovieModal.querySelector('.btn--passive');
const userInput = addMovieModal.querySelectorAll('input');
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;
const movies = [];

const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');


/*------------------ Functions --------------*/
const updateUI = () => {
    if(movies.length === 0){
        entryTextSection.style.display ='block';
    }else{
        entryTextSection.style.display = 'none';
    }
};

const deleteMovie = movieId => {
    let movieIndex = 0
    for (const movie of movies){
        if(movie.id === movieId){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex,1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
};

const closeMovieDeletionModal = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
};

const deleteMovieHandler = movieId => {
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
};

const renderNewMovieElement = (id,title, imageUrl, rating) =>{
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class = "movie-element_image">
        <img src = "${imageUrl}" alt="${title}">
        </div>
        <div class ="movie-element_info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
        </div>
    `;
    newMovieElement.addEventListener('click',deleteMovie.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);

};

const toggleBackdrop = ()=>{
    backdrop.classList.toggle('visible');
};

const closeMovieModal = ()=>{
    addMovieModal.classList.remove('visible');
}

const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackdrop();
};

const clearMovieInput = () =>{
    for (const usrInput of userInput){
        usrInput.value = '';
    }
};

const cancelAddMovie = () =>{
    closeMovieModal();
    clearMovieInput();
};

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
    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrllValue,
        rating: ratingValue

    }

    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
    renderNewMovieElement(newMovie.id,newMovie.title, newMovie.image, newMovie.rating)
    updateUI();
};


const backdropClickHandler = () =>{
    closeMovieModal();
    closeMovieDeletionModal();
}
/*------------- buttons and event listeners ------------*/
startAddMovieBtn.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieBtn.addEventListener('click',cancelAddMovie);
confirmAddMovieBtn.addEventListener('click',addMovieHandler)