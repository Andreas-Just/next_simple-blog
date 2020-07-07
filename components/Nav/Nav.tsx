import Link from 'next/link';
import React from 'react';
import { Navigation, List, Item, A } from './NavStyle'

const Nav = (): JSX.Element => (
  <Navigation>
    <List>
      <Item>
        <Link href="/">
          <A>
            Home
          </A>
        </Link>
      </Item>
      <Item>
        <Link href="/posts">
          <A>
            Posts
          </A>
        </Link>
      </Item>
      <Item>
        <Link href="/add-post">
          <A>
            Add Posts
          </A>
        </Link>
      </Item>
    </List>
  </Navigation>
);

export default Nav;
