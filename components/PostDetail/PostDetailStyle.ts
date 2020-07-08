import styled, { withProps } from '../../assets/style/themed-components';
import { H4, P } from '../PostItem';

export const Article = withProps<{}, HTMLHeadElement>(styled.article)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.5em;
  max-width: 750px;
  width: 100%;
`;

export const TextPost = withProps<{}, HTMLHeadElement>(styled(P))`
  margin: 0.5rem 0;
`;

export const HR = withProps<{}, HTMLHeadElement>(styled.hr)`
  width: 100%;
`;

export const HeadingComments = withProps<{}, HTMLHeadElement>(styled(H4))`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const TextComment = withProps<{}, HTMLHeadElement>(styled(P))`
  font-size: 0.9rem;
`;

