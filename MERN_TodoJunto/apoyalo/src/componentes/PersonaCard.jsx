const PersonaCard = (props) => {

    const {nombre, apellido, age, hair} = props;

    return (
        <div className="card mt-4">
            <div classNames="card-header">
                <h5 className="card-header">
                    {apellido} {nombre}
                </h5>
            </div>
            <div className="card-body">
                <p className="card-text">Age: {age}</p>
                <p className="card-text">Hair color: {hair}</p>
            </div>
        </div>
    )
}

export default PersonaCard