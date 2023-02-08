import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { PageTitle, Label, PhotoUploader, Input } from 'src/components';
import { defaultValues } from './config';

import styles from './Profile.module.scss';

const Profile = () => {
  const formMethods = useForm({
    defaultValues
  });

  const { handleSubmit } = formMethods;

  const onSubmit = (data) => {
    console.log(data);
  };

  const onChangePhoto = (file: File) => {
    setValue('photo', file);
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
              <Input name="birthDate"/>
            </Label>
            <Label text="GENDER" indent={5}>
              <Input name="gender" />
            </Label>
          </div>
          <input type="submit" />
        </form>
      </FormProvider>
    </div>
  );
};

export default Profile;
