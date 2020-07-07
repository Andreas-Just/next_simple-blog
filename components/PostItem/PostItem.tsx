import React from 'react';
import Link from 'next/link';
import { ThemeProvider } from '../../assets/themed-components';
import { myTheme } from '../../assets/theme';
import { ContainerPost, H4, P, ContainerButton, EditButton, EditImg,  } from './PostItemStyle'
import DeleteButton from '../DeleteButton/DeleteButton';

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props): JSX.Element => {
  const { id, title, body } = post;

  return (
    <ThemeProvider theme={myTheme}>
      <ContainerPost>
        <H4>{title}</H4>
        <P>{body}</P>
      </ContainerPost>
      <ContainerButton>
        <EditButton>
          <Link href="/posts/[id]" as={`/posts/${id}`}>
            <EditImg src="edit.svg" alt="edit" />
          </Link>
        </EditButton>
        <DeleteButton postId={id} path="trash.svg" />
      </ContainerButton>
    </ThemeProvider>
  )
};

export default PostItem;
