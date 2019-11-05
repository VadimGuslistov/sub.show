import Header from '@/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Head from 'next/head';
import React from 'react';
// import { NoSsr } from '@material-ui/core';
import Content from '@/Content';
import resources, { Resource } from '@/Resources';
import { useState } from 'react'
import { Locale } from '@/Locale';

const theme = createMuiTheme({
   palette: {
      primary: { main: '#202020' },
      type: 'dark'
   },
});

export default () => {
   const [filtered, setFiltered] = useState<Resource[]>(resources);
   const [userLocale, setUserLocale] = useState<Locale>('RU');
   const onSearch = (query: string) => {
      setFiltered((query) ? filter(resources, query) : resources);
   };
   return (<>
      <Head>
         <title>Suby</title>
      </Head>
      <ThemeProvider theme={theme}>
         <CssBaseline />
         {/* <NoSsr> */}
         <Header onSearch={onSearch} onLocaleChange={setUserLocale} />
         <Content resources={filtered} userLocale={userLocale} />
         {/* </NoSsr> */}
      </ThemeProvider>
   </>);
};

function filter(resources: Resource[], query: string) {
   const q = query.toLowerCase();
   return resources.filter((s) => s.path.toLowerCase().includes(q));
}