import React from 'react';
import { useSelector } from 'react-redux';
import { getLastPosts } from '../store';
import styled, { ThemeProvider, withProps } from '../assets/style/themed-components';
import { myTheme } from '../assets/style/theme';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import { SubTitle } from '../components/Header'

export const H2 = withProps<{}, HTMLHeadElement>(styled.h2)`
  font-size: 2.2rem;
  font-weight: 500;
  color: ${props => props.theme.colors.bgDark};
`;
export const H3 = withProps<{}, HTMLHeadElement>(styled(SubTitle))`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.bgDark};
`;

const Index = (): JSX.Element => {
  const posts = useSelector(getLastPosts);

  return (
    <Layout>
      <ThemeProvider theme={myTheme}>
        <H2>Home Pages</H2>
        <H3>
          Welcome to my Simple Blog. <br/>
          Here you can view all existing posts,
          edit them and add comments to them. <br/>
          You can also create your own posts.
        </H3>
        <PostList posts={posts.slice(-1)} />
      </ThemeProvider>
    </Layout>
  )
}

export default Index;
