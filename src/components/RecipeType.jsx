import { Link } from "react-router-dom"
import { Button } from "antd"

export default function RecipeType() {
    return(
        <div className="recipeType-container">
            <Link to={'/dairy'}>
            <Button type="primary" htmlType="button">
                Dairy
            </Button>
            </Link>
            <Link to={'/salads'}>
            <Button type="link" htmlType="button">
                Salads
            </Button>
            </Link>
            <Link to={'/seafood'}>
            <Button type="link" htmlType="button">
            Seafood
            </Button>
            </Link>
            <Link to={'/poultry'}>
            <Button type="link" htmlType="button">
            Poultry
            </Button>
            </Link>
            <Link to={'/meat'}>
            <Button type="link" htmlType="button">
            Meat
            </Button>
            </Link>
            <Link to={'/desserts'}>
            <Button type="link" htmlType="button">
            Desserts
            </Button>
            </Link>
       
    </div>
    )
}