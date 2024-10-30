// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let directors =  movies.map( movie => movie.director)
  console.log("EXERCICE 1 ->", directors)
  return directors
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  const moviesOfDirector = movies.filter( movie => movie.director === director)
  return moviesOfDirector
 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const moviesOfDirector = movies.filter( movie => movie.director === director)
  const totalScore = moviesOfDirector.reduce ( (acc, curr) => (acc + curr.score), 0)
  const average = (totalScore / moviesOfDirector.length).toFixed(2)
  return parseFloat(average)

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const moviestitle= movies.map( movie => movie.title)
  const sortmoviestitles = [...moviestitle].sort (( a, b) => a.localeCompare(b))
  if (sortmoviestitles.length < 20) {
    return sortmoviestitles
  } else {
  sortmovies20 = sortmoviestitles.slice(0, 20)
  return sortmovies20
}
}


//Exercice 5
function orderByYear(movies) {
  return [...movies].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title)
    }
    return a.year - b.year
  })
}
// function orderByYear(movies) {
// const  sortmoviesyear = movies.sort ( (a, b) =>{
//   if (a.year === b.year) {
//     return a.title.localeCompare(b.title)
//   } 
//     return a.year - b.year  
// })
// return sortmoviesyear
// }


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
   moviesOfGenre = movies.filter( movie => movie.genre.includes(genre))
   if (moviesOfGenre.length === 0) {
     return 0
   }
  const totalScoreGenre = moviesOfGenre.reduce( (acc, curr) => (acc+ curr.score), 0)
  const averageGenre = (totalScoreGenre / moviesOfGenre.length)
  return averageGenre
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
 return movies.map(movie => {
    const timeDivided = movie.duration.match(/(\d+)h\s*(\d+)?\s*min?/)
    if (!timeDivided) { return movie }
    const hours = parseInt(timeDivided[1], 10)
    const min  =  timeDivided[2] ? parseInt(timeDivided[2], 10 ) : 0
    const totalMin = (hours * 60) + min

    return {
   ...movie,
   duration: totalMin

    }
    
  })
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
const moviesXyear = movies.filter( movie => movie.year === year )
if (moviesXyear.length === 0) { return null }
const bestFilm = moviesXyear.reduce ( (best, curr) => {
  return ( curr.score > best.score) ? curr : best
})
return [bestFilm]
}





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
