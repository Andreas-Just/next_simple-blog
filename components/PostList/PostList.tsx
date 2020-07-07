import React from 'react';
import { ThemeProvider } from '../../assets/themed-components';
import { myTheme } from '../../assets/theme';
import { Container, Item } from './PostListStyle'
import PostItem from '../PostItem/PostItem';

interface Props {
  posts: Post[];
}

const PostList = ({ posts }: Props): JSX.Element => (
  <ThemeProvider theme={myTheme}>
    <Container>
      {posts.map((post) => (
        <Item key={post.id}>
          <PostItem post={post} />
        </Item>
      ))}
    </Container>
  </ThemeProvider>
)

export default PostList;
