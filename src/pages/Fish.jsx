import AllRecipes from "./AllRecipes";
import { UserChoiceContext } from "../context/UserChoiceContext";
import { useContext } from "react";
import { useEffect } from "react";

export default function Fish() {
    const { setBestFor } = useContext(UserChoiceContext);
    useEffect(() => {
        setBestFor("fish");
    },[setBestFor])
    return (
        <div>
            <AllRecipes />
        </div>
    )
}