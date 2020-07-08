import React from 'react';
import FormField from '../FormField';
import { Textarea } from  './FormTextareaStyle';

interface Props {
  name: string;
  id: string;
  placeholder?: string;
  value: string | number;
  onChange: (value: string) => void;
}

const FormTextarea = ({
  name,
  id,
  placeholder,
  value,
  onChange,
}: Props): JSX.Element => {
  return (
    <FormField id={id}>
      <Textarea
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e: { target: { value: string } }) => onChange(e.target.value)}
      />
    </FormField>
  )
}

export default FormTextarea;
