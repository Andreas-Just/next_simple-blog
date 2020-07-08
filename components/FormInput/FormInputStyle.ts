import styled, { withProps } from '../../assets/style/themed-components';

export const Input = withProps<{}, HTMLHeadElement>(styled.input)`
  width: 100%;
  padding: 0.8rem 1rem;
  font: inherit;
  border: none;
  background-color: ${props => props.theme.colors.bgLight};
  box-shadow: ${props => props.theme.boxShadow};
  
  &:focus {
    outline: ${props => props.theme.border};
    outline-offset: 1px;
  }
`;
