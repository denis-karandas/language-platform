import React from 'react';
import { Routes, Route } from 'react-router-dom';

const StudentPage = React.lazy(() => import('./modules/student'));

const App = () => {
  return (
    <div className="app">
      <React.Suspense>
        <Routes>
          <Route path="/">
            <Route path="student/*" element={<StudentPage />} />
          </Route>
        </Routes>
      </React.Suspense>
    </div>
  );
};

export default App;
