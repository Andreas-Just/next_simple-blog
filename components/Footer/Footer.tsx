import React from 'react';
import { ThemeProvider } from '../../assets/style/themed-components';
import { myTheme } from '../../assets/style/theme';
import { Container, H2 } from './FooterStyle'


const Footer = (): JSX.Element => {
  return (
    <ThemeProvider theme={myTheme}>
      <Container>
        <H2>©Andreas Just 2020</H2>
      </Container>
    </ThemeProvider>
  );
};

export default Footer;
