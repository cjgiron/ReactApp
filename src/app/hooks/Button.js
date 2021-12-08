import React from "react";

function Button({ children, handleClick}) { // destructured props
    console.log('Rendering button - ' + children);

    return(
        <button onClick={handleClick}>{children}
        </button>
    )
}

export default React.memo(Button); 