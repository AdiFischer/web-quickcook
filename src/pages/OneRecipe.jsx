//import AddNew from "./AddNew"
import { useState, useEffect } from "react"
import { Spin } from "antd";
import { useParams } from "react-router-dom"
import '../assets/Styles.css';

export default function OneRecipe() {
    const { id } = useParams()
    const [recipe, setRecipe] = useState()
    useEffect(() => {
        fetch(`${process.env.REACT_APP_ENDPOINT}/recipes/${id}`)
            .then(results => results.json())
            .then(data => setRecipe(data[0]))
            .catch(alert)
    }, [])

    return (
        <div className="recipe">
            {recipe
                ? <>
                    <div className="imageContainer">
                        <img src={recipe.image} width={400} alt='' />
                    </div>
                    <div className="recipeContainer">
                        <h1>{recipe.name} </h1>
                        <p> Serving: {recipe.servings}</p>
                        <p>Time: {recipe.readyin}</p>
                        <h2>Ingredients</h2>
                        <p>{recipe.ingredients}</p>
                        <h2>Instructions</h2>
                        <p>{recipe.instructions}</p>
                    </div>
                </>
                :
                <Spin size="large" />
            }
        </div>
    )
}
