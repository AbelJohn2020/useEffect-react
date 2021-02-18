import React, { useState, useEffect } from 'react';

console.log('Pre-render');

function LifeCycle() {
    console.log('Logic render');

    const [firstCounter, setFirstCounter] = useState(0);
    const [secondCounter, setSecondCounter] = useState(0);

    useEffect(() => {
        console.log('useEffect []');
        return () => {
            console.log('Cleanup useEffect []');
        }
    }, []);

    useEffect(() => {
        console.log('UseEfect no dependency');
        return () => {
            console.log('Cleanup useEffect no dependency');
        }
    });

    useEffect(()=> {
        console.log(`useEffect first counter [${firstCounter}]`);
        return () => {
            console.log('Cleanup useEffect first counter');
        }
    }, [firstCounter]);

    useEffect(() => {
        console.log(`useEffect second counter [${secondCounter}]`);
        return () => {
            console.log('Cleanup useEffect second counter');
        }
    }, [secondCounter]);

    useEffect(() => {
        console.log(`useEffect [${firstCounter}, ${secondCounter}]`)
        return () => {
            console.log('Cleanup useEffect both counters');
        }
    }, [firstCounter, secondCounter])

    return (
        <div>
            {console.log('Return render')}
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