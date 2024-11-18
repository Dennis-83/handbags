import React from "react";

function Button(props) {
    // console.log(props);
    return (
        <button
            disabled={props.disabled}
            onClick={() => {
                console.log(`${props.label}`);
            }}
        >{props.label}
        </button>
    )
}

export default Button;