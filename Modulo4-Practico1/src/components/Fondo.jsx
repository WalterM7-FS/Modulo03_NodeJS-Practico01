import React from 'react'
import { motion } from "framer-motion"
import { div } from 'motion/react-client'


function Fondo() {

    
      
        
    
    
    //Dimensiones responsive para Computador: el fútbol está visible desde 1240px hasta 1390px, y el arquero hasta el valor de un móvil que posee nuevas dimensiones.
    const animateFutbol = () => {
        return {
            initial: {
                x: 35,
                y: 150,
                opacity: 1
            },
            entryAnimate: {
                x: 1000,
                y: 257,
                opacity: 1,
                
                
                    transition: {
                    duration: 0.2,
                    
                },    
            

                
            }
            
        
                
                
            
        }}
        const animateArquero = () => {
            return {
                initial: {
                    x: 950,
                    y: 360,
                    opacity: 0,
                },
                entryAnimate: {
                    x: -200,
                    y: 50,
                    opacity: 1,
                    
                    
                        transition: {
                            duration: 0.3,
                        },    
                }
                
            }}
    
//Dimensiones responsive para móvil: arquero visible hasta punto de quiebre "md"(tailwindcss), y el fútbol visible desde los 340px hasta los 400px. 

            const animateFutbol2 = () => {
                return {
                    initial: {
                        x: -50,
                        y: 55,
                        opacity: 1
                    },
                    entryAnimate: {
                        x: 250,
                        y: -58,
                        opacity: 1,
                        
                        
                            transition: {
                            duration: 0.1,
                            
                        },    
                    
        
                        
                    }

                }}






            const animateArquero2 = () => {
                return {
                    initial: {
                        x: 350,
                        y: -60,
                        opacity: 0,
                    },
                    entryAnimate: {
                        x: -50,
                        y: -150,
                        opacity: 1,
                        
                        
                            transition: {
                                duration: 0.2,
                            },    
                    }
                    
                }}
        

  return (
    
    
        <div className='flex flex-col m-1'>
            
            <motion.div 
            variants={animateFutbol()}
            initial='initial'
            animate='entryAnimate'
            className='w-full-[50%], justify-items-start'
            >
            <img src="src/assets/pelota_basica.jpg" alt="futbol" className='w-[35px] max-[1240px]:invisible min-[1390px]:invisible'/>
            </motion.div>

            <motion.div 
            variants={animateArquero()}
            initial='initial'
            animate='entryAnimate'
            className='w-full-[50%], justify-items-end max-md:invisible'
            >
            <img src="src/assets/arqueroDibu2.png" alt="Arquero-Dibu" className='item-ri'/>
            </motion.div> 
            




            <motion.div 
            variants={animateFutbol2()}
            initial='initial'
            animate='entryAnimate'
            className='w-full-[50%], justify-items-start max-[340px]:invisible min-[400px]:invisible'
            >
            <img src="src/assets/pelota_basica.jpg" alt="futbol" className='w-[17px]'/>
            </motion.div>


            <motion.div 
            variants={animateArquero2()}
            initial='initial'
            animate='entryAnimate'
            className='w-full-[50%], justify-items-end min-md:invisible'
            >
            <img src="src/assets/arqueroDibu2.png" alt="Arquero-Dibu" className='w-[110px]'/>
            </motion.div> 



        
        </div>
    )
  
}

export default Fondo