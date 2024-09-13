
export const baseTheme = {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
          html: {
            scrollBehavior: 'smooth'
          },
          a: {
            textDecoration: 'none',
            color: 'inherit'
          }
      }
    }
  }
};