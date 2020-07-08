import React from 'react';
import { Button } from './FormButtonStyle';

interface Props {
  type?: ButtonType;
  name: string;
  id: string;
  disabled?: boolean;
  onClick: (e: React.FormEvent) => void;
}

const FormButton = ({
  type = "button",
  name,
  id,
  disabled,
  onClick,
}: Props): JSX.Element => {

  return (
    <Button
      type={type}
      id={id}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </Button>
  )
}

export default FormButton;
