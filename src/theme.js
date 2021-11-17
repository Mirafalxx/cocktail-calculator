import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        variant: 'outlined',
      },
    },
  },
});

export default theme;
