import React, { FC, useState, ChangeEvent, SyntheticEvent } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const Form = styled.form`
  margin-bottom: 2rem;
`;

const ErrorMessage = styled.p`
  color: red;
`;

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
    <Form>
      <Input type="text" name="url" value={url} onChange={(e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)} />
      {error &&
        <ErrorMessage>Invalid URL</ErrorMessage>
      }
      <Button onClick={submit}>Shorten!</Button>
    </Form>
  );
};

export default UrlForm;
