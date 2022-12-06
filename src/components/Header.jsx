import { Link, useNavigate } from "react-router-dom"
import { Button } from "antd"
import { UserChoiceContext } from '../context/UserChoiceContext';
import { useContext } from "react";

// import Login from './Login'
// import Signup from './Signup';
// import { UserChoiceContext, UserChoiceContextProvider } from '../context/UserChoiceContext';

export default function Header() {
    const { user, setUser } = useContext(UserChoiceContext)
    const navigate = useNavigate()
    function SignOut(){
        setUser()
        navigate('/home')

    }
    return (
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
            {user ?
                <Button type="link" htmlType="button" onClick={SignOut}>
                Sign-Out 📧
            </Button>
            :
                <Link to={'/sign-in'} >
                    <Button type="link" htmlType="button">
                        Sign-in 📧
                    </Button>
                </Link>
            }
        </div>
    )
}