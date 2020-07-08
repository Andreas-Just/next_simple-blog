import styled, { withProps } from '../../assets/style/themed-components';

export const Navigation = withProps<{}, HTMLHeadElement>(styled.nav)`
  padding: 1rem;
`;


export const List = withProps<{}, HTMLHeadElement>(styled.ul)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Item = withProps<{}, HTMLHeadElement>(styled.li)`
  cursor: pointer;
`;

export const A = withProps<{}, HTMLHeadElement>(styled.a.attrs(() => ({ tabIndex: 0 })))`
  display: block;
  padding: 0 2rem;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
  font-size: 1.2rem;
  font-weight: 200;
  outline: none;

  &:hover {
    color: orangered;
  }
`;
