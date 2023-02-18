import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './assets/styles/index.scss';

const MainPage = React.lazy(() => import('./modules/main'));
const StudentPage = React.lazy(() => import('./modules/student'));

const App = () => {
  return (
    <div className="app">
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/">
            <Route index element={<MainPage />} />
            <Route path="student/*" element={<StudentPage />} />
          </Route>
        </Routes>
      </React.Suspense>
    </div>
  );
};

export default App;