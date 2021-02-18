import React, { useState } from 'react';
// import ResizeApp from './ResizeApp';
// import FetchCard from './FetchCard';
import LifeCycle from './LifeCycle';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div >
      <button onClick = {() => setShow(!show)}>
        Show/Hidde
      </button>
      {show && <LifeCycle />}
      {/* <FetchCard /> */}
      {/* { show && <ResizeApp />} */}
    </div>
  );
}

export default App;
