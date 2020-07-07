import styled, { withProps } from '../../assets/themed-components';

export const Container = withProps<{}, HTMLHeadElement>(styled.ul)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  padding: 0.5em;
  max-width: 750px;
  width: 100%;
`;

export const Item = withProps<{}, HTMLHeadElement>(styled.li)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  width: 100%;
  height: 10rem;
  background-color: ${props => props.theme.colors.bgLight};
  box-shadow: ${props => props.theme.boxShadow};
  overflow: hidden;
`;
