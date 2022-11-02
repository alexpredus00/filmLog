

const input = document.querySelector('#addMovieInput');
const form2 = document.querySelector('addMovieInfo');






const addMovieSubmit = document.querySelector('#addMovieForm');
addMovieSubmit.addEventListener('submit', (e) => {
    e.preventDefault();


    addFilm();

})



class Film {
    constructor(title, director, year, watched){
        this.title = title;
        this.director = director; 
        this.year = year; 
        this.watched = watched;
    }
}

let filmLog = [];
let newFilm;

function addFilm() {
    const addMovieName = document.querySelector('#addMovieInput');
    const addMovieDirector = document.querySelector('#addMovieDirector');
    const addMovieYear = document.querySelector('#addMovieYear');
    const addMovieWatched = document.querySelector('#addMovieWatched');
    newFilm = new Film(addMovieName.value, addMovieDirector.value, addMovieYear.value, addMovieWatched.value);
    filmLog.push(newFilm);
    console.log(filmLog);
    render(); 
}


function render() {
    const display = document.getElementById('movies');
    const movies = document.querySelectorAll('.movie');
    movies.forEach(film => display.removeChild(film));

    for(let i=0; i<filmLog.length; i++){
        console.log(filmLog[i]);
        createFilm(filmLog[i]);
    };
};


function createFilm(Film) {
    const movies = document.querySelector('#movies');
    const movieDiv = document.createElement('div');
    const movieTop = document.createElement('div');
    const content = document.createElement('div');
    const actions = document.createElement('div');
    const watchedBtn = document.createElement('Button');
    const deleteBtn = document.createElement('Button');
    const movieBottom = document.createElement('div');
    const movieDetails = document.createElement('input');


    movieDiv.classList.add('movie');
    movieDiv.setAttribute('id', filmLog.indexOf(Film));

    movieTop.classList.add('movieTop');
    movieDiv.appendChild(movieTop);


    content.innerHTML = Film.title;
    content.classList.add('content');
    movieTop.appendChild(content);

    actions.classList.add('actions');
    movieTop.appendChild(actions);

    movieBottom.classList.add('movieBottom');
    //movieBottom.textContent = "Made by " + Film.director + " in " + Film.year;
    movieDiv.appendChild(movieBottom);

    movieDetails.type = "text";
    movieDetails.classList.add('text');
    movieDetails.setAttribute('id', 'inputDirectorYear');
    movieDetails.value = "Made by " + Film.director + " in " + Film.year;
    movieDetails.setAttribute('readonly', 'readonly');
    movieBottom.appendChild(movieDetails);


    watchedBtn.classList.add('watched');
    actions.appendChild(watchedBtn);

    if(Film.watched == false) {
        console.log('watched = false !!!');
    } else {
        console.log('watched = true !!!');
    }

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.setAttribute('id', 'deleteBtn');
    actions.appendChild(deleteBtn);

    movies.appendChild(movieDiv);

    deleteBtn.addEventListener('click', () => {
        filmLog.splice(filmLog.indexOf(Film), 1);
        render();
    });

    watchedBtn.addEventListener('click', () => {
        Film.watched = !Film.watched;
        render();
    });
};



    
    


