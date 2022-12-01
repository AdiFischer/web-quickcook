// //import AddNew from "./AddNew"
// import { useState, useEffect } from "react"

// export default function OneRecipe(recipeId) {
//     const [recipe, setRecipe] = useState([])
//     useEffect(() => {
//     fetch (`${process.env.REACT_APP_ENDPOINT}/recipes/${recipeId}`) 
//     .then(results => results.json())
//     .then(data => setRecipe(data))
//     .catch(alert)
// }, [setRecipe])
    
//         return (
//             <div className="recipe">
//             <img src={recipeId.image} width={300}alt='' />
//                     <h1>{recipeId.name}</h1>
//                     <p>{recipeId.servings}</p>
//                     <p>{recipeId.readyin}</p>
//                     <p>{recipeId.ingredients}</p>
//                     <p>{recipeId.instructions}</p>
//             </div> 
//             )
//         }
