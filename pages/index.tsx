import Header from '@/Header';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Head from 'next/head';
import React from 'react';
import Content from '@/Content';
import NoSsr from '@material-ui/core/NoSsr';

const theme = createMuiTheme({
	palette: {
		primary: { main: '#202020' },
		type: 'dark'
	},
});

export default () => (<>
	<Head>
		<title>Suby</title>
	</Head>
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<Container>
			<NoSsr>
				<Header />
				<Content />
			</NoSsr>
		</Container>
	</ThemeProvider>
</>);
