import Header from '@/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Head from 'next/head';
import React, { useEffect } from 'react';
// import { NoSsr } from '@material-ui/core';
import Content from '@/Content';
import resources, { Resource } from '@/Resources';
import { useState } from 'react'
import { Locale } from '@/Locale';

const theme = createMuiTheme({
   palette: {
      primary: { main: '#202020', light:'#fff' },
      type: 'dark'
   },
});

export default () => {
   const [filtered, setFiltered] = useState<Resource[]>(resources);
   const [userLocale, setUserLocale] = useState<Locale>('[RU]');
   useEffect(() => {
      window['dataLayer'] = window['dataLayer'] || [];
      window['dataLayer'].push(['js', new Date()], ['config', 'UA-151959929-1']);
   }, []);
   const onSearch = (query: string) => {
      setFiltered((query) ? filter(resources, query) : resources);
   };
   return (<>
      <Head>
         <title>Sub.Show</title>
         <link rel="icon" href={Resource.root + "/icon/favicon.ico"} type="image/x-icon" />
         <link rel="shortcut icon" href={Resource.root + "/icon/favicon.ico"} type="image/x-icon" />
         <script async src="https://www.googletagmanager.com/gtag/js?id=UA-151959929-1"></script>
      </Head>
      <ThemeProvider theme={theme}>
         <CssBaseline />
         {/* <NoSsr> */}
         <Header onSearch={onSearch} userLocale={userLocale} onLocaleChange={setUserLocale} />
         <Content resources={filtered} userLocale={userLocale} />
         {/* </NoSsr> */}
      </ThemeProvider>
   </>);
};

function filter(resources: Resource[], query: string) {
   const q = query.toLowerCase().split('_');
   return resources.filter((s) => q.every((w) => s.video.toLowerCase().includes(w)));
}