import React from 'react';
import Layout from '../../components/Layout';
import PostDetail from '../../components/PostDetail';
import { fetchPostWithComments } from '../../helpers/api';
import { NextPageContext } from 'next';
import { ThemeProvider } from '../../assets/style/themed-components';
import { myTheme } from '../../assets/style/theme';

interface Props {
  post: Post;
}

const StaticPropsDetail = ({ post }: Props): JSX.Element => {
  const { title } = post;

  return (
    <Layout title={title}>
      <ThemeProvider theme={myTheme}>
        <PostDetail post={post} />
      </ThemeProvider>
    </Layout>
  );
};

interface Context extends NextPageContext {
  id: number;
}

StaticPropsDetail.getInitialProps = async (context: Context) => {
  const post = await fetchPostWithComments(Number(context.query.id));

  return { post: post };
};

export default StaticPropsDetail;
