
import { useState, useEffect } from "react"

export default function Meat() {
    const [meat, setMeat] = useState([])
    useEffect(() => {
    fetch (`${process.env.REACT_APP_ENDPOINT}/recipes/type/meat`) 
    .then(results => results.json())
    .then(data => setMeat(data))
    .catch(alert)
}, [setMeat])
console.log(meat)
    
        return (
            
            <h1>Meat</h1>
            
            )
        }