import React from "react";

function Button({label, disabled, onClick}) {
    // console.log(props);
    return (
        <button
            onClick={() => onClick(label)}
            disabled={disabled}
        >
            {label}
        </button>
    )
}

export default Button;