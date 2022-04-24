import React from "react";
import { useNavigate } from "react-router-dom";

const Wrong =()=>{
    const navigate = useNavigate();
    const WrongRoutes =()=>{
        navigate('/WrongRoutes')
    }
    return (
        <div>
            <button onClick={WrongRoutes}> Wrong Routes</button>
        </div>
    )
}
export default Wrong;