
import './App.css'
import PersonaCard from './componentes/PersonaCard'

function App() {
  return (
    <>
      <div className='container mt-5'>
        <PersonaCard 
          apellido="Doe," 
          nombre="Jane"
          hair="Black"
          age={45}
        />
        <PersonaCard 
          apellido="Smith," 
          nombre="John"
          hair="Brown"
          age={88}
        />
        <PersonaCard 
          apellido="Fillmore," 
          nombre="Millard"
          hair="Brown"
          age={50}
        />
        <PersonaCard 
          apellido="Smith," 
          nombre="Maria"
          hair="Brown"
          age={62}
        />
      </div>
    </>
  )
}

export default App
