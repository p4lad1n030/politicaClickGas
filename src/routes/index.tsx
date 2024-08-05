import {  Route, Routes } from "react-router-dom";
import Home from "../pages/home/index";



export default function MainRoutes() {
    return (
        
        <Routes>
            <Route  path="/politicaClickGas/" element={<Home />} />
        </Routes>
        
    )
}