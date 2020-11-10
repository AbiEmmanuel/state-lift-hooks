import React from 'react'

function Player2(props) {
    return (
        <div>
            <input onChange={(e) => props.onChange(e.target.value)} />
        </div>
    )
}

export default Player2
