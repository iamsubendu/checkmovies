const buttonElement = document.querySelector("#search");
const inputElement = document.querySelector("#inputValue");
const moviesSearchable = document.querySelector("#movies-searchable");
const moviesContainer = document.querySelector("#movies-container");
const apiKey = "9a6434ee9cfe93901b99601cc5900981";
const url = "https://api.themoviedb.org/3/search/movie/?api_key=9a6434ee9cfe93901b99601cc5900981";
const imgURL = "https://image.tmdb.org/t/p/w500/";


buttonElement.onclick = function(event) {
  event.preventDefault();
  const value = inputElement.value;
  console.log("Value:",value);
  searchMovie(value);
  }

  function createMovieContainer(movies, title = '') {
    const movieElement = document.createElement("div")
    movieElement.setAttribute("class","movie") ;

     const movieTemplate = `
                            <div class="box">
                              <h2>${title}</h2>
                              <section class="slide-img"> 
                                ${movieSection(movies)}
                              </section> 
                              <div class="content content-display">
                                <p id="content-close">x</p>
                              </div> 
                            </div>`;
                               
                             
     movieElement.innerHTML = movieTemplate;
     console.log(movieElement);
     return movieElement;
   }


   function movieSection(movies) {
     return movies.map((movie) => {
       if(movie.poster_path  !=  null) {
           return `<img
            src=${imgURL+ movie.poster_path}  
            data-movie-id=${movie.id}
            />`;
       }
      
      });
   }
  
   function renderSearchMovies(data) {
      console.log("Data:",data);
      moviesSearchable.innerHTML = ''; 
      const movies = data.results;
      const movieBlock = createMovieContainer(movies);
      moviesSearchable.appendChild(movieBlock);
   }

   document.onclick = function(event) {
      const target = event.target;

      if(target.tagName.toLowerCase() === "img") {
      console.log("Event:",event);
      const movieId = target.dataset.movieId;
      const section = event.target.parentElement;
      const content = section.nextElementSibling;
      content.classList.add("content-display");

      const path = `/movie/${movieId}/videos`;
      const url = generateUrl(path);
      //fetch videos
      fetch(url)
          .then((res) => res.json())    
          .then((data) => createVideoTemplate(data, content))
          .catch((err) => {
            console.log(err);
          })
        if(target.id === "content-close") {
          const content = target.parentElement;
          content.classList.remove("content-display"); }
     }
    }

   function generateUrl(path) {
     const url = `https://api.themoviedb.org/3${path}?api_key=9a6434ee9cfe93901b99601cc5900981`;
     return url;
   }

   function createIframe(video) {
     const iframe = document.createElement("iframe");
     iframe.src= `https://www.youtube.com/embed/${video.key}`;
     iframe.width = 360;
     iframe.height = 315;
     iframe.allowFullscreen = true;

     return iframe;
   }

   function createVideoTemplate(data, content) {
            //over-writing content when clicked to another video
            content.innerHTML = '<p id="content-close"></p>';
            const videos= data.results;
            const length = videos.length > 4 ? 4 : videos.length;
            const iframeContainer = document.createElement("div")

            for(let i=0;i<data.results.length;i++) {
               const video = videos[i];
               const iframe = createIframe(video);
               iframeContainer.appendChild(iframe);
               content.appendChild(iframeContainer);
            }
   }

   function requestMovies(url , onComplete, onError) {
     fetch(url)
       .then((res) => res.json())
       .then(onComplete)
       .catch(onError);
   } 
    
   function searchMovie(value) {
      const path = "/search/movie";
      const url = generateUrl(path) + "&query=" + value;
     requestMovies(url, renderSearchMovies, handleError);
   }
   function handleError(error) {
     console.log("Error:", error);
   }



   //for rest body


   getUpcomingMovies();
   function getUpcomingMovies() {
     const path = "/movie/upcoming";
     const url = generateUrl(path);
     const render = renderMovies.bind({ title: "Upcoming Movies"});
     requestMovies(url, render, handleError);
   }
   topRatedMovies();
    function topRatedMovies() {
    const path = "/movie/top_rated";
    const url = generateUrl(path);
    const render = renderMovies.bind({ title: "Top Rated Movies"});
    requestMovies(url, render, handleError);
   }
   getPopularMovies();
    function getPopularMovies() {
     const path = "/movie/popular";
     const url = generateUrl(path);
     const render = renderMovies.bind({ title: "Popular Movies"});
     requestMovies(url, render, handleError);
   }

  function renderMovies(data) {
      console.log("Data:",data); 
      const movies = data.results;
      const movieBlock = createMovieContainer(movies, this.title);
      moviesContainer.appendChild(movieBlock);
   }
