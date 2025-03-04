import React, { useState } from 'react'


    


      
    const Counter = () => {
      
      const [diasParaElMundial, setdiasParaElMundial] = useState(false)
      
      const mostrarDiasParaElMundial = () => {
        setdiasParaElMundial(!diasParaElMundial)
      }
        
    

    //fecha de incio del próximo mundial 08/06/2026 - tener en cuenta que enero corresponde al valor 0 (cero).
    const fechaDelMundial=  new Date(2026, 5, 8)
    
      const añoDelMundial = fechaDelMundial.getFullYear()
      console.log(añoDelMundial)
    
      const mesDelMundial = fechaDelMundial.getMonth() + 1
      console.log(mesDelMundial)

      const diaDelMundial = fechaDelMundial.getDate()
      console.log(diaDelMundial)

    const fechaActual=  new Date()
    
      const añoActual = fechaActual.getFullYear()
      console.log(añoActual)
    
      const mesActual = fechaActual.getMonth()
      console.log(mesActual)

      const diaActual = fechaActual.getDate()
      console.log(diaActual)

    const diasFaltantesParaElMundial = () => {
      const diasObtenidosDeLosDiasFaltantes = diaDelMundial>diaActual? diaDelMundial-diaActual : 30-(diaActual-diaDelMundial)
      const diasObtenidosDeLosMesesFaltantes = mesDelMundial>mesActual? 30*(mesDelMundial-mesActual-1) : 30*(12-(mesActual-mesDelMundial-1)) 
      const diasObtenidosDeLosAniosFaltantes = añoDelMundial>añoActual? 365*(añoDelMundial-añoActual) : 0
      
      return diasObtenidosDeLosDiasFaltantes + diasObtenidosDeLosMesesFaltantes + diasObtenidosDeLosAniosFaltantes
    }
    console.log(diasFaltantesParaElMundial())

    
  
  
  
    return (
    <div>
      <div className='flex flex-col items-center space-y-4 p-4 bg-gray-200 rounded-lg shadow-md w-84 mx-auto mt-10'>
          
          <h1 className='text-xl font-bold text-blue-500'>El próximo mundial inica el:</h1>
          <h1 className='text-2x1 font-bold text-blue-500'> <strong>{diaDelMundial}</strong> / <strong>{mesDelMundial}</strong> / <strong>{añoDelMundial}</strong></h1>
          
          
          <div className=' flex space-x-4'>
          <button
            onClick={mostrarDiasParaElMundial}
            className='px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-900 transition cursor-pointer'
          >
          
          <h1 className='text-2x1 font-bold '>{diasParaElMundial===true? ("Faltan " + diasFaltantesParaElMundial() + " días para el próximo mundial!!!") : "Cuánto falta para el próximo Mundial? Has click para descubrirlo" } 
          </h1>
          </button>
              
          </div>
      </div>
    </div>
    
  )

}
export default Counter

