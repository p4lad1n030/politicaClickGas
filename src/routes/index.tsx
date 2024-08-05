import {  Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import MyDream from "../pages/myDream";


export default function MainRoutes() {
    return (
        
        <Routes>
            <Route  path="/politicaClickGas/" element={<Home />} />
            <Route  path="/politicaClickGas/mydream" element={<MyDream />} />
        </Routes>
        
    )
}