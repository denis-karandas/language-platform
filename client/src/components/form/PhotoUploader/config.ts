import { ErrorType, IPhotoUploaderError } from './models';

export const mimeTypes: string[] = ['.png', '.jpeg', '.jpg'];
export const maxSize = 2097152;

export const errorMessages: Record<ErrorType, string> = {
  [ErrorType.InvalidType]:
    'Invalid type. File type must be .png, .jpeg or .jpg',
  [ErrorType.TooLarge]: 'File size be less equal then 2MB',
  [ErrorType.TooManyFiles]: 'Too many files. It can only be one file',
};

export const defaultError: IPhotoUploaderError = {
  type: 'unknown',
  message: 'Unknown error',
};
