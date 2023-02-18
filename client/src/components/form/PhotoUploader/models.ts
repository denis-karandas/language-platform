export enum ErrorType {
  InvalidType = 'file-invalid-type',
  TooLarge = 'file-too-large',
  TooManyFiles = 'too-many-files',
}

export interface IPhotoUploaderProps {
  name: string;
  photoUrl?: string | null;
  alt?: string;
}

export type IPhotoUploaderError =
  | {
      type: ErrorType;
      message: string;
    }
  | {
      type: 'unknown';
      message: string;
    };
