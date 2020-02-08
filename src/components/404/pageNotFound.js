import React from "react";
import pic from "../../images/404.png"

export default function PageNotFound() {
    return (
        <div
            className="image_wrapper_404"
            style={{textAlign: "center"}}>
            <img
                src={pic}
                alt='Error-404'/>
        </div>

    )
}