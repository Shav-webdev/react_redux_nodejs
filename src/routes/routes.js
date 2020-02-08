import React from "react";
import AppRoute from "./approute";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import defaultLayout from "../hoc/layout/defaultLayout";
import PageNotFound from "../components/404/pageNotFound";
import HomePage from "../containers/homepage";
import notFoundLayout from "../hoc/layout/notFoundLayout";


export default function Routes() {
    return (
        <>
            <Router>
                <Switch>
                    <AppRoute exact path="/" layout={defaultLayout} component={HomePage}/>
                    <AppRoute exact path="*" layout={notFoundLayout} component={PageNotFound}/>
                </Switch>
            </Router>
        </>


    )
}
