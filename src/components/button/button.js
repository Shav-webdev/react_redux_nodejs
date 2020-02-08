import React from "react";
import Button from '@material-ui/core/Button';

export default function AddButton(props) {
    return (
        <Button variant="contained"
                color="primary"
        >
            {props.children}
        </Button>
    )
}