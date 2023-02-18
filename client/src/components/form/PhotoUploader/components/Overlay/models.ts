import { IButtonProps } from 'student/components/Button/models';

export enum OverlayTheme {
  Default = 'default',
  Error = 'error',
}

export interface IOverlayProps {
  theme: OverlayTheme;
  text: string;
  className?: string;
  button?: IButtonProps;
}
