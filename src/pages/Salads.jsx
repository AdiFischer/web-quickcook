
import { useState, useEffect } from "react"

export default function Salads() {
    const [salads, setSalads] = useState([])
    useEffect(() => {
    fetch (`${process.env.REACT_APP_ENDPOINT}/recipes/type/salads`) 
    .then(results => results.json())
    .then(data => setSalads(data))
    .catch(alert)
}, [setSalads])
console.log(salads)
    
        return (
            
            <h1>Salads</h1>
            
            )
        }