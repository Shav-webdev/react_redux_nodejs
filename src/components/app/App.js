import React from 'react';
import './App.css';
import Routes from "../../routes/routes";
import {connect} from "react-redux";

function App() {
    return (
        <>
            <Routes/>
        </>
    );
}

export default connect()(App);
