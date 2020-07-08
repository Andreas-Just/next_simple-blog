import React from 'react';
import FormField from '../FormField';
import { Input } from './FormInputStyle';

interface Props {
  type: InputType;
  name: string;
  id: string;
  placeholder?: string;
  value: string | number;
  onChange: (value: string) => void;
}

const FormInput = ({
  type = 'text',
  name,
  id,
  placeholder,
  value,
  onChange,
 }: Props): JSX.Element => {

  return (
    <FormField id={id}>
      <Input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e: { target: { value: string; } }) => onChange(e.target.value)}
      />
    </FormField>
  )
}

export default FormInput;
