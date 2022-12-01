import AllRecipes from "./AllRecipes";
import { UserChoiceContext } from "../context/UserChoiceContext";
import { useContext } from "react";
import { useEffect } from "react";

export default function Desserts() {
    const { setBestFor } = useContext(UserChoiceContext);
    useEffect(() => {
        setBestFor("desserts");
    },[setBestFor])
    return (
        <div>
            <AllRecipes />
        </div>
    )
}