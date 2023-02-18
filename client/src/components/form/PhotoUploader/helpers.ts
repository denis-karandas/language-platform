import { ErrorType, IPhotoUploaderError } from './models';
import { errorMessages, defaultError } from './config';

export const getErrorByType = (type: ErrorType): IPhotoUploaderError => {
  const errorMessage = errorMessages[type];
  if (!errorMessage) {
    return defaultError;
  }

  return {
    type,
    message: errorMessages[type],
  };
};
