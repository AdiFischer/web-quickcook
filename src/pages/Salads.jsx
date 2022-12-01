import AllRecipes from "./AllRecipes";
import { UserChoiceContext } from "../context/UserChoiceContext";
import { useContext } from "react";
import { useEffect } from "react";

export default function Salads() {
    const { setBestFor } = useContext(UserChoiceContext);
    useEffect(() => {
        setBestFor("salads");
    },[setBestFor])
    return (
        <div>
            <AllRecipes />
        </div>
    )
}