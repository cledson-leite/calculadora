import React from 'react'
import "./style.css";

const Display = (props) => {
    return (
        <div className = 'display'>
            {props.value}
        </div>
    )
}

export default Display