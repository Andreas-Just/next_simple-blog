import styled, { withProps } from '../../assets/style/themed-components';

export const Textarea = withProps<{}, HTMLHeadElement>(styled.textarea)`
  height: 10rem;
  width: 100%;
  padding: 0.8rem 1rem;
  font: inherit;
  border: none;
  background-color: ${props => props.theme.colors.bgLight};
  box-shadow: ${props => props.theme.boxShadow};
  resize: none;
  
  &:focus {
    outline: ${props => props.theme.border};
    outline-offset: 1px;
  }
`;
