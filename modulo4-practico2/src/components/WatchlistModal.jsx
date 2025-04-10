import React from 'react'

const WatchlistModal = ({ isModalOpen, setIsModalOpen, watchlist, setWatchlist }) => {

  if (!isModalOpen) return null

  const onClose = () => setIsModalOpen(false)

  const removerFromWatchlist = (id) => {
    const updatedList = watchlist.filter((movie) => movie.id !== id);
      setWatchlist(updatedList);
      localStorage.setItem("watchlistLS", JSON.stringify(updatedList));
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center <-50'>
      <div className='bg-gray-700 rounded-lg shadow-lg p-6  max-w-md relative w-auto h-auto'>

        
        <button className='hover:rotate-180 cursor-pointer'
          onClick={onClose}
        >
          ✖️
        </button>
        
        <p className='text-cyan-200 justify-center'>Lista de Películas Seleccionadas:</p>
        
        
        
        {watchlist.length === 0? (<p className='text-white'>No tienes películas seleccionadas</p>):(
            watchlist.map((movie) => (
              <div className='text-white' key={movie.id}>
                <p>{movie.name}</p>
                <img className='rounded-2xl w-10 h-10' src={`src/assets/imgMovies/${movie.img}.jpg`} />
                <button
                  className='bg-red-500 p-2 rounded-2xl hover:bg-red-800 text-white transition cursor-pointer'
                  onClick={() => removerFromWatchlist(movie.id)}
                >
                  Remover película
                </button>
            </div>
        
            ))
          )
        }
      </div>
      </div>
    
  )
}

export default WatchlistModal