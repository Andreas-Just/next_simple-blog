import React from 'react';
import { useSelector } from 'react-redux';
import { getPostsSortByDate } from '../../store';
import { ThemeProvider } from '../../assets/themed-components';
import { myTheme } from '../../assets/theme';
import { H2 } from '../../pages';
import Layout from '../../components/Layout';
import PostList from '../../components/PostList/PostList';

const WithStaticProps = (): JSX.Element => {
  const posts = useSelector(getPostsSortByDate);

  return (
    <Layout title="Posts List">
      <ThemeProvider theme={myTheme}>
        <H2>Posts Page</H2>
        <PostList posts={posts} />
      </ThemeProvider>
    </Layout>
  );
};

export default WithStaticProps;
