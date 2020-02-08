import React from "react";
import NewToDoField from "../components/newToDoInputFild/newToDoField";
import AddIcon from '@material-ui/icons/Add';
import Button from "../components/button/button";

export default function HomePage() {
    return (
        <>
            <div>
                <NewToDoField/>
                <Button>
                    Add
                    <AddIcon />
                </Button>
            </div>

        </>
    )
}