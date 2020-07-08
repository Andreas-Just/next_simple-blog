import React from 'react';
import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

import { ITheme } from './theme'; // custom theme

type StyledFunction<T> = styledComponents.ThemedStyledFunction<any, ITheme>;

function withProps<T, U extends HTMLElement = HTMLElement>(
  styledFunction: StyledFunction<T & React.HTMLProps<U>>,
): StyledFunction<T & React.HTMLProps<U>> {
  return styledFunction;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ITheme>;

export {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withProps
};

export default styled;
