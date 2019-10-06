import Header from '@/Header';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Head from 'next/head';
import React from 'react';
import Content from '@/Content';
import resources from '@/staticResources';
import { useState } from 'react'
import { Locale } from '@/Locale';

const theme = createMuiTheme({
	palette: {
		primary: { main: '#202020' },
		type: 'dark'
	},
});

export default () => {
	const [videos, setVideos] = useState<string[]>(resources);
	const [locale, setLocale] = useState<Locale>('RU');
	const onSearch = (query) => {
		setVideos((query) ? resources.filter((name) => name.includes(query)) : resources);
	}
	return (<>
		<Head>
			<title>Suby</title>
		</Head>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container>
				<Header onSearch={onSearch} onLocaleChange={setLocale} />
				<Content videos={videos} locale={locale} />
			</Container>
		</ThemeProvider>
	</>);
};