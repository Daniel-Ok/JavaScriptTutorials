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
    const newMovie = {
        title: titleValue,
        image: imageUrllValue,
        rating: ratingValue

    }

    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput();
    renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating)
    updateUI();
};

const clearMovieInput = () =>{
    for (const usrInput of userInput){
        usrInput.value = '';
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
    clearMovieInput();
};

const updateUI = () => {
    if(movies.length === 0){
        entryTextSection.style.display ='block';
    }else{
        entryTextSection.style.display = 'none';
    }
};
const renderNewMovieElement = (title, imageUrl, rating) =>{
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
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);

}

/*------------- buttons and event listeners ------------*/
startAddMovieBtn.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieBtn.addEventListener('click',cancelAddMovie);
confirmAddMovieBtn.addEventListener('click',addMovieHandler)