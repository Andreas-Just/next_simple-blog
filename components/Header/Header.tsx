import React from 'react';
import { ThemeProvider } from '../../assets/themed-components';
import { myTheme } from '../../assets/theme';
import { Container, Title, SubTitle} from './HeaderStyle'
import Nav from '../Nav';

const Header = (): JSX.Element => {
  return (
    <ThemeProvider theme={myTheme}>
      <Container>
        <Title>Simple Blog</Title>
        <SubTitle>Most meaningless posts</SubTitle>
        <Nav />
      </Container>
    </ThemeProvider>
  )
}

export default Header;
