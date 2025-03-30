import React from 'react'
import movies from '../api/movies.json'

const MoviesList = ({ watchlist, setWatchlist }) => {

  const addToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]);
    localStorage.setItem("watchlist", JSON.stringify([...watchlist, movie]));
  }

  return (
    <div className='p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {movies.map((movie) => (
        <div
          key={movie.id}
          className='bg-gray-600 p-4 rounded-4xl shadow-md text-center'
        >
          <img className='rounded-2xl' src={`src/assets/imgMovies/${movie.img}.jpg`} />
          <h3 className='p-2 text-3xl text-amber-100 font-semibold'>{movie.name}</h3>
          <button
            className='bg-blue-900 text-cyan-200 p-2 rounded-2xl hover:bg-blue-600 transition cursor-pointer'
            onClick={() => addToWatchlist(movie) }
          >
            Agregar a la lista
          </button>
        </div>
      ))}


    </div>
  )
}

export default MoviesList 