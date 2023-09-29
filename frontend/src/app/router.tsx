import React, {Suspense} from "react";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import Stock from "./modules/stock/stock";
import Home from "./modules/home/home";
import About from "./modules/about/about";

export function Router() {
    return (
        <Suspense fallback={<div className="container">Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/stock" element={<Stock/>}/>
            </Routes>
        </Suspense>
    )
}
