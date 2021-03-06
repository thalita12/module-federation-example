import React from 'react'

const MFE_Header = React.lazy(
    () => import('navbar/Header')
);

function App() {
    const children = <></>

  return (
    <div className="App">
      <h2>Container</h2>

        <React.Suspense fallback='Loading Header'>
            <MFE_Header />
        </React.Suspense>

        <div>{ children }</div>
    </div>
  );
}

export default App;
