import styled, { withProps } from '../../assets/style/themed-components';

export const FormPost = withProps<{}, HTMLHeadElement>(styled.form)`
  max-width: 750px;
  width: 100%;
  margin-bottom: 1rem;
`;
