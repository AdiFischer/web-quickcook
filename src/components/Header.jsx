import { Link, useNavigate } from "react-router-dom"
// import { button } from "antd"
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
                <button className="button-85" type="link" htmlType="button">
                    Home
                </button>
            </Link>
            <Link to={'/add-new'}>
                <button className="button-85" type="link" htmlType="button">
                    Add Recipe
                </button>
            </Link>
            {user ?
                <button className="button-85" type="link" htmlType="button" onClick={SignOut}>
                Sign-Out
            </button>
            :
                <Link to={'/sign-in'} >
                    <button className="button-85" type="link" htmlType="button">
                        Sign-in
                    </button>
                </Link>
            }
        </div>
    )
}