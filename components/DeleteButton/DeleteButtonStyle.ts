import styled, { withProps } from '../../assets/style/themed-components';

export const Delete = withProps<{}, HTMLHeadElement>(styled.div)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: all 400ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const TrashImg = withProps<{}, HTMLHeadElement>(styled.img)`
  width: 2rem;
`;
