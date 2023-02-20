import React from 'react';
import cn from 'classnames';
import { useDropzone, FileRejection } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';
import { Button } from 'components';
import { Overlay } from './components';
import { IPhotoUploaderProps, IPhotoUploaderError } from './models';
import { mimeTypes, maxSize } from './config';
import { getErrorByType } from './helpers';

import styles from './PhotoUploader.module.scss';

const PhotoUploader = ({
  name,
  photoUrl: defaultPhotoUrl = null,
  alt = 'Photo',
}: IPhotoUploaderProps) => {
  const [photoUrl, setPhotoUrl] = React.useState<string | null>(
    defaultPhotoUrl,
  );
  const [error, setError] = React.useState<IPhotoUploaderError | null>(null);

  const { setValue } = useFormContext();

  const isPhoto = Boolean(photoUrl);
  const isError = Boolean(error);

  const onDrop = React.useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (acceptedFiles?.length) {
        const file = acceptedFiles[0];
        const objectURL = URL.createObjectURL(file);

        setPhotoUrl(objectURL);
        setValue(name, file);
      } else if (fileRejections?.length) {
        const rejection = fileRejections[0];
        const error = rejection.errors[0];

        const errorObject = getErrorByType(error.code);

        setError(errorObject);
      }
    },
    [name, setValue, setError],
  );

  const onTryAgain = () => {
    setError(null);
  };

  const onRemove = () => {
    setPhotoUrl(null);
    setValue(name, null);
  };

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    accept: {
      'image/*': mimeTypes,
    },
    maxSize,
    multiple: false,
    noKeyboard: true,
    noClick: true,
    onDrop,
  });

  const isDragActiveOverlay = !isPhoto && isDragActive;
  const isBlurOnInitialContainer = isDragActiveOverlay || isError;

  const renderInitialContainer = () => (
    <div
      className={cn(styles.initialContainer, {
        [styles.blur]: isBlurOnInitialContainer,
      })}
    >
      <div className={styles.imageFrame}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 26.6667V3.33333C30 1.5 28.5 0 26.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V26.6667C0 28.5 1.5 30 3.33333 30H26.6667C28.5 30 30 28.5 30 26.6667ZM9.16667 17.5L13.3333 22.5167L19.1667 15L26.6667 25H3.33333L9.16667 17.5Z"
            fill="#379CF9"
          />
        </svg>
      </div>
      <div className={styles.infoWrapper}>
        <p className={styles.label}>Upload a profile picture</p>
        <p className={styles.maxSize}>Max size 2MB</p>
      </div>
      <Button text="Browse" styles={{ marginLeft: 'auto' }} onClick={open} />
    </div>
  );

  const renderIsDragActiveOverlay = () => (
    <Overlay text="Drop photo here to upload" />
  );

  const renderErrorOverlay = () => (
    <Overlay
      theme="error"
      text={error.message}
      button={{
        text: 'Try again',
        styles: {
          backgroundColor: 'transparent',
          color: '#FFFFFF',
          '&:hover': {
            border: '1px solid #FFFFFF',
            backgroundColor: '#FFFFFF',
            color: '#111111',
          },
        },
        onClick: onTryAgain,
      }}
    />
  );

  const renderDropzoneContainer = () => (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {renderInitialContainer()}
      {isDragActiveOverlay && renderIsDragActiveOverlay()}
    </div>
  );

  const renderPhotoContainer = () => (
    <div className={styles.photoContainer}>
      <img src={photoUrl || ''} alt={alt} className={styles.photo} />
      <div className={styles.buttons}>
        <Button text="Remove" onClick={onRemove} />
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      {isPhoto ? renderPhotoContainer() : renderDropzoneContainer()}
      {isError && renderErrorOverlay()}
    </div>
  );
};

export default PhotoUploader;
