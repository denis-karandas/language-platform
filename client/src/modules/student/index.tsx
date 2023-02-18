import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/common';
import { Layout } from './components/layouts';
import { Profile, Lessons } from './containers';

const Student = () => {
  return (
    <div className="student">
      <Header />
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="words" element={<div>Words</div>} />
          <Route path="progress" element={<div>Progress</div>} />
          <Route path="payment" element={<div>Payment</div>} />
          <Route path="settings" element={<div>Settings</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default Student;
