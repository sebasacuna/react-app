import React from "react";
import "./style.css";
import {Route, Switch} from "react-router";
import Home from "../../screens/customer";
import AnotherPage from "../../screens/page";

const Content: React.FC = () => {

    return (
        <>
            <div className={'content-container'}>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/page" component={AnotherPage}/>
                    <Route component={Home}/>
                </Switch>
            </div>

        </>
    )
}

export default Content;
