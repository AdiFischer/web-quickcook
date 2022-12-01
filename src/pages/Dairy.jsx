import AllRecipes from "./AllRecipes";
import { UserChoiceContext } from "../context/UserChoiceContext";
import { useContext } from "react";
import { useEffect } from "react";

export default function Dairy() {
    const { setBestFor } = useContext(UserChoiceContext);
    useEffect(() => {
        setBestFor("dairy");
    },[setBestFor])
    return (
        <div>
            <AllRecipes />
        </div>
    )
}