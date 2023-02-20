import { IApiStudentProfile } from '@student/containers/Profile/models';
import { IProfileFormValues } from '@student/components/pages/Profile/models';

export const convertApiProfileValuesToComponentValues = (
  item: IApiStudentProfile,
): IProfileFormValues => ({
  photo: item.photo,
  firstName: item.firstName,
  lastName: item.lastName,
  email: item.email,
  phone: item.phone,
  birthDate: item.birthDate,
  gender: item.gender,
});
