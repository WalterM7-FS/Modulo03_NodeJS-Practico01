import { useState } from "react";
import Counter from "./components/Counter";
import NavBar from "./components/NavBar";
import Fondo from "./components/fondo";
import Jugadores from "./components/Jugadores";



function App() {
  
  return (
    <> 
      <NavBar />
      <Counter />
      <Fondo />
      <Jugadores />
    </>
  )
}

export default App
