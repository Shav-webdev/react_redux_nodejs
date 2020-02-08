import React from "react";
import Header from "../header";
import Footer from "../footer";
import Main from "../main";
import {Link} from "react-router-dom";


export default function NotFoundLayout(props) {
    return (
        <>
            <Header>
                <h1 style={{textAlign: "center"}}>Something went wrong</h1>
            </Header>
            <Main>
                {props.children}
            </Main>
            <Footer>
                <div style={{textAlign: "center"}}>
                    <Link to="/">Go to Home</Link>
                </div>
            </Footer>
        </>
    )
};