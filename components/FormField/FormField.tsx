import React from 'react';
import { Field, Label } from './FormFieldStyle'

interface Props {
  children: JSX.Element;
  id: string;
}

const FormField = ({
  children,
  id,
 }: Props): JSX.Element => {

  return (
    <Field>
      <Label htmlFor={id}>
        {children}
      </Label>
    </Field>
  )
}

export default FormField;
