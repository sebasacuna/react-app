import React from "react";
import SideBar from "./layouts/sidebar";
import Content from "./layouts/content";
import {BrowserRouter as Router} from 'react-router-dom';
import "./App.css";

const App: React.FC = () => {

    return (
        <>
            <div className="App">
                <div className="container-app">
                    <Router>
                        <SideBar/>
                        <Content/>
                    </Router>
                </div>
            </div>
        </>
    )
}

export default App;


