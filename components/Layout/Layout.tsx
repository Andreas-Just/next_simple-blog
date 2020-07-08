import Head from 'next/head';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { Main } from './LayoutStyle'

interface Props {
  title?: string;
  children: JSX.Element;
}

const Layout = ({
  children,
  title = 'Simple Blog',
}: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default Layout;
