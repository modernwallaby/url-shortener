import React, { FC, useState, ChangeEvent, SyntheticEvent } from 'react';
import Input from './Input';
import Button from './Button';

interface UrlFormProps {
  onSubmit(url: string): void;
}

const UrlForm: FC<UrlFormProps> = ({ onSubmit }) => {
  const [url, setUrl] = useState<string>('');
  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <form>
      <Input type="text" name="url" value={url} onChange={(e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)} />
      <Button onClick={submit}>Shorten!</Button>
    </form>
  );
};

export default UrlForm;
