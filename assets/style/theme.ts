export interface ITheme {
  boxShadow: string
  border: string

  colors: {
    bgDark: string
    bgLight: string
  }
}

export const myTheme = {
  boxShadow: '0 3px 13px rgba(23,32,49,.26)',
  border: '1px solid rgba(0,0,0,.4)',

  colors: {
    bgDark: 'rgba(0,0,0,.87);',
    bgLight: '#f5f5f5',
  }
};
