const imgURL = "https://image.tmdb.org/t/p/w500/";


function UpComingMovies() {
	fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=9a6434ee9cfe93901b99601cc5900981`)
	.then(res =>  { 
		if(!res.ok) {
			throw Error("Error");
		}
		return res.json()
	})
	.then(data => {
		console.log(data);
		//because we wanna map over movie in fetch
		const html = data.results.map(movie =>  {
			 return `
                    <div class="slider-box">
                      <div class= "img-box">
                        <img src= "${imgURL + movie.poster_path}" class="model">
                      </div>
                      <span class="details">
                        <p> ${movie.title} </p>
			            <p> ${movie.release_date} </p>
			            <p> ${movie.vote_average} </p>
                      </span>
			         </div>
                  </div>`;
		}).join('')
		;
		console.log(html);
		document
		.querySelector("#upComingMovies").insertAdjacentHTML("afterbegin",html);
	})
	.catch(err => {
		console.log(err);
	})
}
UpComingMovies() ;

function PopularMovies() {
	fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9a6434ee9cfe93901b99601cc5900981`)
	.then(res =>  { 
		if(!res.ok) {
			throw Error("Error");
		}
		return res.json()
	})
	.then(data => {
		console.log(data);
		//because we wanna map over movie in fetch
		const html = data.results.map(movie =>  {
			 return `
                    <div class="slider-box">
                      <div class= "img-box">
                        <img src= "${imgURL + movie.poster_path}" class="model">
                      </div>
                      <span class="details">
                        <p> ${movie.title} </p>
			            <p> ${movie.release_date} </p>
			            <p> ${movie.vote_average} </p>
                      </span>
			         </div>
                  </div>`;
		}).join('')
		;
		console.log(html);
		document
		.querySelector("#popularMovies").insertAdjacentHTML("afterbegin",html);
	})
	.catch(err => {
		console.log(err);
	})
}
PopularMovies() ;

function TopRatedMovies() {
	fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=9a6434ee9cfe93901b99601cc5900981`)
	.then(res =>  { 
		if(!res.ok) {
			throw Error("Error");
		}
		return res.json()
	})
	.then(data => {
		console.log(data);
		//because we wanna map over movie in fetch
		const html = data.results.map(movie =>  {
			return `
                    <div class="slider-box">
                      <div class= "img-box">
                        <img src= "${imgURL + movie.poster_path}" class="model">
                      </div>
                      <span class="details">
                        <p> ${movie.title} </p>
			            <p> ${movie.release_date} </p>
			            <p> ${movie.vote_average} </p>
                      </span>
			         </div>
                  </div>`;
		}).join('')
		;
		console.log(html);
		document
		.querySelector("#topRatedMovies").insertAdjacentHTML("afterbegin",html);
	})
	.catch(err => {
		console.log(err);
	})
}
TopRatedMovies() ;

	const buttonElement = document.querySelector("#search");
    const inputElement = document.querySelector("#inputValue");

buttonElement.onclick = function(event) {
  event.preventDefault();
  const value = inputElement.value;
  console.log("Value:",value);
  searchMovie(value);
  }
function searchMovie(value) {
	var url = `https://api.themoviedb.org/3/search/movie?api_key=9a6434ee9cfe93901b99601cc5900981&query=` + value;
	const imgURL = "https://image.tmdb.org/t/p/w500";
	fetch(url)
	.then(res =>  { 
		if(!res.ok) {
			throw Error("Error");
		}
		return res.json()
	})
	.then(data => {
		console.log(data);
		//because we wanna map over movie in fetch

		const html = data.results.map(movie =>  {
			    if(movie.poster_path  !=  null) {
			    	return `
                    <div class="slider-box">
                      <div class= "img-box">
                        <img src= "${imgURL + movie.poster_path}" >
                      </div>
                      <span class="details">
                        <p> ${movie.title} </p>
			            <p> ${movie.release_date} </p>
			            <p> ${movie.vote_average} </p>
                      </span>
			         </div>
                  </div>`;
			    }
			
		}).join('')
		;
		console.log(html);
		document.querySelector("#movies-searchable").insertAdjacentHTML("afterbegin",html);
	})
	.catch(err => {
		console.log(err);
	})

}


buttonElement.onclick = function(event) {
  event.preventDefault();
  const value = inputElement.value;
  console.log("Value:",value);
  searchMovie(value);
  }
function searchMovie(value) {
	var url = `https://api.themoviedb.org/3/search/movie?api_key=9a6434ee9cfe93901b99601cc5900981&query=` + value;
	const imgURL = "https://image.tmdb.org/t/p/w500";
	fetch(url)
	.then(res =>  { 
		if(!res.ok) {
			throw Error("Error");
		}
		return res.json()
	})
	.then(data => {
		console.log(data);
		//because we wanna map over movie in fetch

		const html = data.results.map(movie =>  {
			    if(movie.poster_path  !=  null) {
			    	return `
                    <div class="slider-box">
                      <div class= "img-box">
                        <img src= "${imgURL + movie.poster_path}" >
                      </div>
                      <span class="details">
                        <p> ${movie.title} </p>
			                  <p> ${movie.release_date} </p>
			                  <p> ${movie.vote_average} </p>
                      </span>
			         </div>
                  </div>`;
			    }
			
		}).join('')
		;
		console.log(html);
		document.querySelector("#movies-searchable").insertAdjacentHTML("afterbegin",html);
	})
	.catch(err => {
		console.log(err);
	})

}

