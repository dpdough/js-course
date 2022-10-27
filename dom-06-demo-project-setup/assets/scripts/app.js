const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backDrop = document.getElementById('backdrop');
const cancleAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmMyAddMovieButton = addMovieModal.querySelector('.btn--success');

const toggleBackDrop = () => {
    backDrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackDrop();
} ;

const cancleAddMovieHandler = () => {
    toggleMovieModal();
};

const addMovieHandler = () =>{

};

const backdropClickHandler = () => {
    toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backDrop.addEventListener('click', backdropClickHandler);
cancleAddMovieButton.addEventListener('click', cancleAddMovieHandler);
confirmMyAddMovieButton.addEventListener('click', addMovieHandler);