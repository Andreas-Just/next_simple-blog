import styled, { withProps } from '../../assets/style/themed-components';

export const Main = withProps<{}, HTMLHeadElement>(styled.main)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  padding: 1rem;
  height: auto;
  max-width: 1980px;
`;
