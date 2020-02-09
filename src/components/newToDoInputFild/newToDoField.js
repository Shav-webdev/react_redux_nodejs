import React from 'react';
import Input from '@material-ui/core/Input';

export default function NewToDoField(props) {
    const onInputHandleChange = (e) => {
        props.onNewToDoFieldHandleChange(e.target.value)
    }
    return (
        <Input onChange={onInputHandleChange}
            value={props.newToDoValue}
            style={{marginRight: "1rem"}}
            placeholder="Add new to do"
            inputProps={{'aria-label': 'description'}}/>
    );
}
