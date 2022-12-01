//import AddNew from "./AddNew"
import { useState, useEffect } from "react"
import { Spin } from "antd";
import { useParams } from "react-router-dom"

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
                    <img src={recipe.image} width={300} alt='' />
                    <h1>{recipe.name} </h1>
                    <p> Serving:{recipe.servings}</p>
                    <p>Time:{recipe.readyin}</p>
                    <h2>Ingrediens</h2>
                    <p>{recipe.ingredients}</p>
                    <h2>Instractions</h2>
                    <p>{recipe.instructions}</p>
                </>
                :
                <Spin size="large" />
            }
        </div>
    )
}
