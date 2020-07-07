import styled, { withProps } from '../../assets/themed-components';

export const Container = withProps<{}, HTMLHeadElement>(styled.header)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 18rem;
  background-color: ${props => props.theme.colors.bgDark};
  color: ${props => props.theme.colors.bgLight};
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
`;

export const SubTitle = styled.h2`
  color: #fff;
  text-align: center;
`;
