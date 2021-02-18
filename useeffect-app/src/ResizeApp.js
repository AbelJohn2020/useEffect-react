import React, { useState, useEffect } from 'react'

const ResizeApp = () => {
    const [windowWith, setWindowWith] = useState(window.innerWidth);

    const isMobile = windowWith < 768

    useEffect( () => {
        const handleResize = () => setWindowWith(window.innerWidth);
        window.addEventListener('resize', handleResize);
        
        // send in any of your effects a function, and this will allows us to handle what's known as "clean up"
        return () =>{
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <div>
            <h1>{windowWith}</h1>
            { isMobile && <h1>Show only mobile device</h1>}
        </div>
    )
}

export default ResizeApp
