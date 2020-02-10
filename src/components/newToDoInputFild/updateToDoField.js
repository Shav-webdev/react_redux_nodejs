import React, {useState} from 'react';
import {TextField} from "@material-ui/core";

export default function UpdateToDoField(props) {
    const [helpText, setHelpText] = useState("");

    const onInputHandleChange = (e) => {
        if (e.target.value.trim().length) {
            setHelpText("");
        } else {
            setHelpText("This field is required.")
        }
        props.onEditToDoFieldHandleChange(e.target.value);
    };

    return (
        <TextField onChange={onInputHandleChange}
                   value={props.newToDoValue}
                   placeholder="New to do here"
                   helperText={helpText}
                   inputProps={{'aria-label': 'description'}}/>
    );
}
