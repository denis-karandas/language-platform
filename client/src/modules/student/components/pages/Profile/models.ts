export type IProfileProps = {
  defaultValues: IProfileFormValues;
};

export interface IProfileFormValues {
  photo: string | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  gender: string;
  about: string;
}
