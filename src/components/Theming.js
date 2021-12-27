import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	components: {
		MuiInput: {
			styleOverrides: {
				root: {
					color: 'primary',
				},

				underline: {
					'&:before': {
						borderColor: 'grey',
					},
					'&:hover:not($disabled):not($focused):not($error)': {
						borderColor: 'accent.secondary !important',
					},
				},
			},
		},
	},
	palette: {
		type: 'dark',
		primary: {
			main: '#212f45',
			bg: '#1A1423',
		},
		secondary: {
			main: '#4D194D',
			bg: '#757F81',
		},
		accent: {
			main: '#D7263D',
			secondary: '#C9CEBD',
		},
	},
	typography: {
		allVariants: {
			color: '#F5F5F5',
		},
	},
});

export { theme, ThemeProvider };
