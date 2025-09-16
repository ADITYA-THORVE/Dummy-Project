import React, { Suspense, lazy } from 'react';

const AboutMe = lazy(() => import('./components/AboutMe/AboutMe'));
const Projects = lazy(() => import('./components/Projects/Projects'));
// Repeat for other sections

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <AboutMe />
        <Projects />
        {/* other components */}
      </Suspense>
    </div>
  );
}

export default App;
