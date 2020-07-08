import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../helpers/api';
import { wrapper } from '../store';
import { setPosts } from '../store/posts';
import { GlobalStyle } from '../assets/style/globalStyle';

const WrappedApp = ({ Component, pageProps }: AppProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPosts()
      .then((posts: Post[]) => dispatch(setPosts(posts)));
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(WrappedApp);
