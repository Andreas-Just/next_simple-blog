import styled, { withProps } from '../../assets/style/themed-components';

export const ContainerPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  margin: 1rem 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const H4 = withProps<{}, HTMLHeadElement>(styled.h4)`
  font-size: 1.3rem;
  font-weight: 400;
  color: ${props => props.theme.colors.bgDark};
`;

export const P = withProps<{}, HTMLHeadElement>(styled.p)`
  margin-top: 10px;
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.6;
`;

export const ContainerButton = withProps<{}, HTMLHeadElement>(styled.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 60px;
  transition: transform;
`;

export const EditButton = withProps<{}, HTMLHeadElement>(styled.div)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: all 400ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const EditImg = withProps<{}, HTMLHeadElement>(styled.img)`
  width: 2rem;
`;
