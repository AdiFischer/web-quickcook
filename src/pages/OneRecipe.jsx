import { useState, useEffect, useContext } from "react"
import { Spin } from "antd";
import { useParams, useNavigate } from "react-router-dom"
import '../assets/Styles.css';
import { UserChoiceContext } from '../context/UserChoiceContext';

export default function OneRecipe() {
    const { user, setUser } = useContext(UserChoiceContext)
    const { id } = useParams()
    const navigate = useNavigate()
    const [recipe, setRecipe] = useState()
    useEffect(() => {
        fetch(`${process.env.REACT_APP_ENDPOINT}/recipes/${id}`)
            .then(results => results.json())
            .then(data => setRecipe(data[0]))
            .catch(alert)
    }, [])
    function deleteRecipe(id, setRecipe) {
        // const token = await firebase.auth().currentUser.getIdToken()
        fetch(`${process.env.REACT_APP_ENDPOINT}/recipes/${id}`, {
            method: "DELETE",
            headers: {
                'Authentication': user.accessToken,
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                fetch(`${process.env.REACT_APP_ENDPOINT}/recipes`)
                    .then((response) => response.json())
                    .then((data) => {
                        setRecipe(data)
                        navigate(`/${recipe.type}`)
                    });
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <div className="recipe">
            <div>
                <button className="delete-edit-button" onClick={() => deleteRecipe(id, setRecipe)}>Delete</button>
                <button className="delete-edit-button" onClick={() => navigate(`/editrecipe/${id}`)}>Edit</button>
            </div>
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
