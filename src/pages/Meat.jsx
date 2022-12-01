import AllRecipes from "./AllRecipes";
import { UserChoiceContext } from "../context/UserChoiceContext";
import { useContext } from "react";
import { useEffect } from "react";

export default function Meat() {
    const { setBestFor } = useContext(UserChoiceContext);
    useEffect(() => {
        setBestFor("meat");
    },[setBestFor])
    return (
        <div>
            <AllRecipes />
        </div>
    )
}