import { Link } from "react-router-dom"
import { Button } from "antd"
export default function Header() {
    return(
        <div className="header-container">
            <Link to={'/home'}>
            <Button type="link" htmlType="button">
                Home 🏠
            </Button>
            </Link>
            <Link to={'/add-new'}>
            <Button type="link" htmlType="button">
                Add Recipe 📝
            </Button>
            </Link>
            <Link to={'/sign-in'}>
            <Button type="link" htmlType="button">
                Sign-in 📧
            </Button>
            </Link>
            {/* <a href="/add recipe">Add Recipe</a> */}
        </div>
    )
}