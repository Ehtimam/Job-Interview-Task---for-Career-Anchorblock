import React from 'react';

function Button({children, className, color}){
    return(
        <button className={className} style={{ backgroundColor: color }}>
            {children}
        </button>
    );
}

export default Button;