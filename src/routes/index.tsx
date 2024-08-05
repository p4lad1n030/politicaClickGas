import {  Route, Routes } from "react-router-dom";
import Home from "../components/ClickGas";
import MyDream from "../components/MyDream";


export default function MainRoutes() {
    return (
        
        <Routes>
            <Route  path="/politicaClickGas/" element={<Home />} />
        </Routes>
        
    )
}