import React from 'react'
import Typewriter from 'typewriter-effect';

function TypeWriter() {
    return (
        <div style={{
            fontSize: '30px',
            marginBottom: '-19px',
            fontWeight: 300,
            zIndex: 1
        }}>
            <Typewriter
                options={{
                    strings: ['Live Safer', 'Live Easier', 'Live Confidently'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    )
}

export default TypeWriter