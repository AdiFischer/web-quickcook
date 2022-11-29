
import { useState, useEffect } from "react"

export default function Chicken() {
    const [chicken, setChicken] = useState([])
    useEffect(() => {
    fetch (`${process.env.REACT_APP_ENDPOINT}/recipes/type/chicken`) 
    .then(results => results.json())
    .then(data => setChicken(data))
    .catch(alert)
}, [setChicken])
console.log(chicken)
    
        return (
            
            <h1>Chicken</h1>
            
            )
        }