import styled, { withProps } from '../../assets/style/themed-components';

export const Container = withProps<{}, HTMLHeadElement>(styled.footer)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 5rem;
  padding: 0 2rem;
  background-color: ${props => props.theme.colors.bgDark};
  color: ${props => props.theme.colors.bgLight};
`;

export const H2 = withProps<{}, HTMLHeadElement>(styled.h2)`
  font-size: 1rem;
  font-weight: 300;
`;
