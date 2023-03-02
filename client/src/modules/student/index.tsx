import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { checkAuth } from 'store/actions/auth';
import { IHeaderProps } from '@student/components/common/Header/models';
import { Header } from './components/common';
import { Layout } from './components/layouts';
import { Profile, Lessons } from './containers';

const Student = () => {
  const dispatch = useAppDispatch();
  const { data: user } = useAppSelector((state) => state.auth.user);

  React.useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  // React.useEffect(() => {
  //   dispatch(
  //     login({
  //       email: 'dave.smith@mail.com',
  //       password: '12345',
  //     }),
  //   );
  // }, []);

  const headerProps: IHeaderProps = {
    user: {
      fullName: user ? user.firstName + ' ' + user.lastName : '',
      role: 'Student',
      photoUrl: '',
    },
  };

  return (
    <div className="student">
      <Header {...headerProps} />
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
