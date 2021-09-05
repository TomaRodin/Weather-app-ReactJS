import './About.css'

function About(props) {


    return (
        
        <div>
            <section>
                <img src={props.condition.icon} />
                <h1>{props.data.location.name},   {props.data.location.region}</h1>
            </section>
            <section>
                <div className="container" >
                    <h3>Temperature:</h3>
                    <section>
                        <h2>{props.data.current.temp_c}°C</h2>
                        <p>Feels like {props.data.current.feelslike_c}</p>
                    </section>

                
                </div>

                <div className="container">
                    <h3>Wind:</h3>
                    <p>{props.data.current.wind_kph} KPH</p>
                    <p>Direction: {props.data.current.wind_dir}</p>
                </div>

                <div className="container">
                    <h3>Pressure:</h3>
                    <p>{props.data.current.pressure_mb} mbar</p>

                </div>

            </section>
        </div>
    )
    
    
}

export default About;