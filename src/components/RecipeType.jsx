import { Link } from "react-router-dom"
//import { Button } from "antd"

export default function RecipeType() {
    return(
        <div className="recipeType-container">
            <Link to={'/dairy'}>
            <button className="button-recipe-type" type="primary" htmlType="button">
                Dairy
            </button>
            </Link>
            <Link to={'/salads'}>
            <button className="button-recipe-type" type="link" htmlType="button">
                Salads
            </button>
            </Link>
            <Link to={'/seafood'}>
            <button className="button-recipe-type" type="link" htmlType="button">
            Seafood
            </button>
            </Link>
            <Link to={'/poultry'}>
            <button className="button-recipe-type" type="link" htmlType="button">
            Poultry
            </button>
            </Link>
            <Link to={'/meat'}>
            <button className="button-recipe-type" type="link" htmlType="button">
            Meat
            </button>
            </Link>
            <Link to={'/desserts'}>
            <button className="button-recipe-type" type="link" htmlType="button">
            Desserts
            </button>
            </Link>
       
    </div>
    )
}

