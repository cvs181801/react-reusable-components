import React from 'react'

export default function Shape(props) {
    return (
        <div>
            <div className="shape">{props.children}</div>
        </div>
    )
}
