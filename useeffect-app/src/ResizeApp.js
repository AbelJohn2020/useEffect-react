import React, { useState, useEffect } from 'react'

const ResizeApp = () => {
    const [windowWith, setWindowWith] = useState(window.innerWidth);

    const isMobile = windowWith < 768

    useEffect( () => {
        window.addEventListener('resize', () => setWindowWith(window.innerWidth));
    }, [])

    return (
        <div>
            <h1>{windowWith}</h1>
            { isMobile && <h1>Show only mobile device</h1>}
        </div>
    )
}

export default ResizeApp
