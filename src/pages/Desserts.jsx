
import { useState, useEffect } from "react"

export default function Desserts() {
    const [desserts, setDesserts] = useState([])
    useEffect(() => {
    fetch (`${process.env.REACT_APP_ENDPOINT}/recipes/type/desserts`) 
    .then(results => results.json())
    .then(data => setDesserts(data))
    .catch(alert)
}, [setDesserts])
console.log(desserts)
    
        return (
            
            <h1>Desserts</h1>
            
            )
        }