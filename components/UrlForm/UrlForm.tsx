import React, { FC, useState, ChangeEvent, SyntheticEvent } from 'react';
import Input from './Input';
import Button from './Button';

const urlRegex = /https?:\/\/.+\..+/;

interface UrlFormProps {
  onSubmit(url: string): void;
}

const UrlForm: FC<UrlFormProps> = ({ onSubmit }) => {
  const [url, setUrl] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (url.match(urlRegex)) {
      setError(false);
      onSubmit(url);
    } else {
      setError(true);
    }
  };

  return (
    <form>
      <Input type="text" name="url" value={url} onChange={(e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)} />
      {error &&
        <p>Invalid URL</p>
      }
      <Button onClick={submit}>Shorten!</Button>
    </form>
  );
};

export default UrlForm;
