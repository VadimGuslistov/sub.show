// import { NoSsr } from '@material-ui/core';
import Content from '@/Content';
import Header from '@/Header';
import { Locale } from '@/Locale';
import resources, { Resource } from '@/Resources';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Head from 'next/head';
import React, { useState } from 'react';

const theme = createMuiTheme({
   palette: {
      primary: { main: '#202020', light: '#fff' },
      type: 'dark'
   },
});

export default () => {
   const [filtered, setFiltered] = useState<Resource[]>(resources);
   const [userLocale, setUserLocale] = useState<Locale>('[RU]');

   function onSearch(query: string) {
      setFiltered((query) ? filter(resources, query) : resources);
   };

   return (<>
      <Head>
         <title>Sub.Show</title>
         <link rel="icon" href={Resource.root + "/icon/favicon.ico"} type="image/x-icon" />
         <link rel="shortcut icon" href={Resource.root + "/icon/favicon.ico"} type="image/x-icon" />
      </Head>
      <ThemeProvider theme={theme}>
         <CssBaseline />
         {/* <NoSsr> */}
         <Header onSearch={onSearch} userLocale={userLocale} onLocaleChange={setUserLocale} />
         <Content resources={filtered} userLocale={userLocale} />
         {/* </NoSsr> */}
      </ThemeProvider>
      {
         (process && process.env.NODE_ENV === 'production') &&
         <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-151959929-1"></script>
            <script dangerouslySetInnerHTML={setGoogleTags()} />
         </>
      }
   </>);
};

function filter(resources: Resource[], query: string) {
   const q = query.toLowerCase().split('_');
   return resources.filter((s) => q.every((w) => s.video.toLowerCase().includes(w)));
}

function setGoogleTags() {
   return {
      __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-151959929-1');
        `
   };
}