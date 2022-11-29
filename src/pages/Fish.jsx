
import { useState, useEffect } from "react"

export default function Fish() {
    const [fish, setFish] = useState([])
    useEffect(() => {
    fetch (`${process.env.REACT_APP_ENDPOINT}/recipes/type/fish`) 
    .then(results => results.json())
    .then(data => setFish(data))
    .catch(alert)
}, [setFish])
console.log(fish)
    
        return (
            
            <h1>Fish</h1>
            
            )
        }