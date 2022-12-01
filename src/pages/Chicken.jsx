import AllRecipes from "./AllRecipes";
import { UserChoiceContext } from "../context/UserChoiceContext";
import { useContext } from "react";
import { useEffect } from "react";

export default function Chicken() {
    const { setBestFor } = useContext(UserChoiceContext);
    useEffect(() => {
        setBestFor("chicken");
    },[setBestFor])
    return(
        <div>
            <AllRecipes />
        </div>
    )
}