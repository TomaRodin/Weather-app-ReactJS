import ApiRequest from './ApiRequest'
import { useRef, useState } from 'react'
import './Weather.css'
 
function Weather() {
    const [inf,setinf] = useState(<h2>Welcome, Please enter your city name.</h2>)
    const inputHandler = useRef()

    function Reset() {
            setinf(<h2>Welcome, Please enter your city name.</h2>)
        
        
    }

    function buttonHandler() {
        setinf(<ApiRequest city={inputHandler.current.value} ></ApiRequest>)
    } 
    return (
        <div className="main">
            <div className="header">
                <input onChange={Reset} ref={inputHandler} />
                <button onClick={buttonHandler}>Search</button>
            </div>
            <hr/>
            <div>{inf}</div>
        </div>

    )
}

export default Weather;