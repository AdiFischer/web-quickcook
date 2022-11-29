
import { useState, useEffect } from "react"

export default function Dairy() {
    const [dairy, setDairy] = useState([])
    useEffect(() => {
    fetch (`${process.env.REACT_APP_ENDPOINT}/recipes/type/dairy`) 
    .then(results => results.json())
    .then(data => setDairy(data))
    .catch(alert)
}, [setDairy])
console.log(dairy)
    
        return (
            
            <h1>Dairy</h1>
            
            )
        }