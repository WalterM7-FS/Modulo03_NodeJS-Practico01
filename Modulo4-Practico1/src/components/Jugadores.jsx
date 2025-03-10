import React from 'react'
import jugadores from '../api/jugadores.json'
import { div } from 'motion/react-client'
const Jugadores = () => {
 
 
 
    return (
    <div>
        <div>
            <h1 className='items-center justify-center text-2xl text-blue-500 p-2 m-2'>Jugadores Destacados de la Selección Argentina</h1>
        </div>
    
        <div className=' bg-blue-950 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4'  >
            
            
            {jugadores.map((jugadores) => (
                <div className='' key={jugadores.id}>
                    <a href='/' className='text-sm text-white hover:text-blue-400 transition-transform duration-300 transform hover:scale-110 inline-block'>
                        <p className='text-blue-500 text-2xl'> {jugadores.name} - ({jugadores.puesto})</p>
                        <img src={`src/assets/img_jugadores/${jugadores.img}.jpeg`} alt="Jugadores de la Selección Argentina" />
                    </a>
                </div>
            ))}
        
    </div>
   </div>

    
    
  )
}

export default Jugadores