import React from 'react'

function Player1(props) {
    return (
        <div>
            <input onChange={(e) => props.onChange(e.target.value)} />
        </div>
    )
}

export default Player1