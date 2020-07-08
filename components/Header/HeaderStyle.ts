import styled, { withProps } from '../../assets/style/themed-components';

export const Container = withProps<{}, HTMLHeadElement>(styled.header)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 15rem;
  word-spacing: 5px;
  background-color: ${props => props.theme.colors.bgDark};
  color: ${props => props.theme.colors.bgLight};
`;

export const Title = withProps<{}, HTMLHeadElement>(styled.h1)`
  padding: 0.5rem;
  font-size: 2.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.bgLight};
  text-align: center;
`;

export const SubTitle = withProps<{}, HTMLHeadElement>(styled.h2)`
  font-size: 1.6rem;
  font-weight: 300;
  color: ${props => props.theme.colors.bgLight};
  text-align: center;
`;
