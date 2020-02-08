import React from "react";
import Header from "../header";
import Footer from "../footer";
import Main from "../main";
import HeaderText from "../../components/headerText/headerText";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    }

    });

export default function DefaultLayout(props) {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Header >
                <HeaderText/>
            </Header>
            <Main>
                {props.children}
            </Main>
            <Footer>

            </Footer>
        </div>
    )
};