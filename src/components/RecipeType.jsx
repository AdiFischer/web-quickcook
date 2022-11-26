import { Link } from "react-router-dom"
import { Button } from "antd"

export default function RecipeType() {
    return(
        <ul className="recipeType-container">
            <Link to={'/dairy'}>
            <Button type="link" htmlType="button">
                Dairy
            </Button>
            </Link>
            <Link to={'/salads'}>
            <Button type="link" htmlType="button">
                Salads
            </Button>
            </Link>
            <Link to={'/fish'}>
            <Button type="link" htmlType="button">
            Fish
            </Button>
            </Link>
            <Link to={'/chicken'}>
            <Button type="link" htmlType="button">
            Chicken
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
       
    </ul>
    )
}