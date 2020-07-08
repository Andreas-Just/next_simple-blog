import styled, { withProps } from '../../assets/style/themed-components';

export const Field = withProps<{}, HTMLHeadElement>(styled.div)`
  display: flex;
  margin-bottom: 1rem;
`;

export const Label = withProps<{}, HTMLHeadElement>(styled.label)`
  width: 100%;
`;
