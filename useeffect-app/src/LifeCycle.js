import React, { useState, useEffect } from 'react'

function LifeCycle() {
    const [firstCounter, setFirstCounter] = useState(0);
    const [secondCounter, setSecondCounter] = useState(0);

    useEffect(() => {
        console.log('useEffect []')
    }, []);

    useEffect(() => {
        console.log('UseEfect no dependency');
    });

    useEffect(()=> {
        console.log(`useEffect first counter [${firstCounter}]`)
    }, [firstCounter]);

    useEffect(() => {
        console.log(`useEffect second counter [${secondCounter}]`)
    }, [secondCounter]);

    useEffect(() => {
        console.log(`useEffect [${firstCounter}, ${secondCounter}]`)
    }, [firstCounter, secondCounter])

    return (
        <div>
            <h1>Click First Counter: {firstCounter}</h1>
            <h1>Click Second Counter: {secondCounter}</h1>

            <button onClick={() => setFirstCounter(firstCounter+1)}>
                Increment First Counter
            </button>

            <button onClick={() => setSecondCounter(secondCounter+1)}>
                Increment First Counter
            </button>
        </div>
    )
}

export default LifeCycle