import React from "react";
import {ApiProvider} from "@aw/api";
import {Router} from "./router";
import {environment} from "../environments/environment";
import NavBar from "./components/nav-bar/nav-bar";
import {BrowserRouter} from "react-router-dom";

export function App() {
    return (
        <div>
            <ApiProvider apiUrl={environment.apiUrl}>
                <BrowserRouter>
                    <NavBar></NavBar>
                    <Router/>
                </BrowserRouter>
            </ApiProvider>
        </div>
    );
}

export default App;
