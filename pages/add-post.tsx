import React from 'react';
import { myTheme } from '../assets/style/theme';
import { ThemeProvider } from '../assets/style/themed-components';
import Layout from '../components/Layout';
import FormAddPost from '../components/FormAddPost';
import { H2 } from './index';

const AddPost = (): JSX.Element => (
  <Layout title="Add New Post">
    <ThemeProvider theme={myTheme}>
      <H2>Add Post</H2>
      <FormAddPost />
    </ThemeProvider>
  </Layout>
);

export default AddPost;
