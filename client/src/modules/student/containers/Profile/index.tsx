import React from 'react';
import { ProfileComponent } from '@student/components';
import { useAppSelector } from 'hooks';
import { RootState } from 'store';
import { convertApiProfileValuesToComponentValues } from '@student/containers/Profile/adapters';
import { IProfileFormValues } from '@student/components/pages/Profile/models';
import { defaultValues as componentDefaultValues } from '@student/components/pages/Profile/config';

const Profile = () => {
  const { data } = useAppSelector((state: RootState) => state.student.profile);

  const defaultValues = React.useMemo<IProfileFormValues>(() => {
    return data
      ? convertApiProfileValuesToComponentValues(data)
      : componentDefaultValues;
  }, [data]);

  return <ProfileComponent defaultValues={defaultValues} />;
};

export default Profile;
