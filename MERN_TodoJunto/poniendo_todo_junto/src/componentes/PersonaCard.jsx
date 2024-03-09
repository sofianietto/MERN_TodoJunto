import { useState } from "react";


const PersonaCard = (props) => {

const {nombre, apellido, edad, hcolor}= props;

const [age, setAge] = useState(edad)

const subirAge = () => {
  setAge(age + 1);
}

  return (
    <div>
      <div className="container card mt-5">
        <div className="card-header">
          <h5>{apellido}, {nombre}</h5>
        </div>
        <div className="card-body">
          <p className="card-text">Age: {age}</p>
          <p className="card-text">Hair color: {hcolor}</p>
          <a href="#" onClick = {subirAge}  className="btn btn-primary">Birthday Button for {nombre} {apellido}</a>
        </div>
      </div>
    </div>
  )
}

export default PersonaCard