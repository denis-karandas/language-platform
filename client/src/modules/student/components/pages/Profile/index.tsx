import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { PageTitle, Label, PhotoUploader, Input, Textarea } from 'components';
import { IProfileProps } from '@student/components/pages/Profile/models';

import styles from './Profile.module.scss';

const Profile = ({ defaultValues }: IProfileProps) => {
  const formMethods = useForm({
    defaultValues,
  });

  const { handleSubmit } = formMethods;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <PageTitle title="Profile" />
      <FormProvider {...formMethods}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Label text="PHOTO" indent={5}>
            <PhotoUploader name="photo" />
          </Label>
          <div className={styles.generalInformation}>
            <Label text="FIRST NAME" indent={5}>
              <Input name="firstName" />
            </Label>
            <Label text="LAST NAME" indent={5}>
              <Input name="lastName" />
            </Label>
            <Label text="EMAIL" indent={5}>
              <Input name="email" />
            </Label>
            <Label text="PHONE" indent={5}>
              <Input name="phone" />
            </Label>
            <Label text="BIRTH DATE" indent={5}>
              <Input name="birthDate" />
            </Label>
            <Label text="GENDER" indent={5}>
              <Input name="gender" />
            </Label>
          </div>
          <Label text="ABOUT ME" indent={5}>
            <Textarea name="about" />
          </Label>
          <input type="submit" />
        </form>
      </FormProvider>
    </div>
  );
};

export default Profile;
