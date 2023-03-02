import { UserDto as UserModel } from 'modules/users/user.dto';

export class UserDto {
  constructor(model: UserModel) {
    this.firstName = model.firstName || null;
    this.lastName = model.lastName || null;
    this.email = model.email || null;
    this.phone = model.phone || null;
    this.birthDate = model.birthDate || null;
    this.gender = model.gender || null;
  }
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  birthDate?: Date;
  gender?: string;
}
