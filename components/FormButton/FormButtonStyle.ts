import styled, { withProps } from '../../assets/style/themed-components';

export const Button = withProps<{}, HTMLHeadElement>(styled.button.attrs(() => ({ tabIndex: 0 })))`
  width: 100%;
  padding: 0.8rem 1rem;
  font: inherit;
  color: ${props => props.theme.colors.bgLight};
  background-color: ${props => props.theme.colors.bgDark};
  box-shadow: none;
  text-transform: capitalize;
  border: ${props => props.theme.border};
  transition: all 0.3s;
  opacity: .95;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.bgDark};
    background-color: ${props => props.theme.colors.bgLight};
    box-shadow: ${props => props.theme.boxShadow};
  }

  &[disabled] {
    opacity: .6;


    &:hover {
      color: ${props => props.theme.colors.bgDark};
      background-color: ${props => props.theme.colors.bgLight};
      box-shadow: ${props => props.theme.boxShadow};
      cursor: no-drop;
    }
  }
`;
