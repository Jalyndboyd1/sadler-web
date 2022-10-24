import React from 'react'
import Typewriter from 'typewriter-effect';

function TypeWriter() {
    return (
        <div style={{
            fontSize: '30px',
            marginBottom: '-9px',
            fontWeight: 300
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