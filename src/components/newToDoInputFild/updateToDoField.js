import React from 'react';
import Input from '@material-ui/core/Input';

export default function UpdateToDoField(props) {
    const onInputHandleChange = (e) => {
        props.onEditToDoFieldHandleChange(e.target.value)
    };

    return (
        <Input onChange={onInputHandleChange}
               value={props.newToDoValue}
               placeholder="New to do here"
               inputProps={{'aria-label': 'description'}}/>
    );
}
