
import './App.css'
import PersonaCard from './componentes/PersonaCard'

function App() {
  return (
    <>
      <h1>holaa</h1>
      <PersonaCard
        nombre="Jane" 
        apellido="Doe" 
        edad={45} 
        hcolor="Black" 
      />
      <PersonaCard 
        nombre="John" 
        apellido="Smith" 
        edad={88} 
        hcolor="Brown" 
      />
    </>
  )
}

export default App
