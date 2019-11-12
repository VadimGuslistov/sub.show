import About from '@/About';
import Search from '@/Search';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import LocaleSwitcher, { Locale } from '@/Locale';
import { memo } from 'react';
const useStyles = makeStyles(() =>
  createStyles({
    barClass: {
      top: 'auto',
      bottom: 0,
      maxHeight: '55px',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dividerClass: {
      height: 28,
      margin: 4,
    },
    localeClass: {
      marginLeft: '12px'
    }
  }),
);

export default memo<Props>((props) => {
  const { dividerClass, localeClass, barClass } = useStyles();
  return (
    <AppBar className={barClass}>
      <About />
      <Divider className={dividerClass} orientation='vertical' />
      <Search onSearch={props.onSearch} />
      <Divider className={dividerClass} orientation='vertical' />
      <LocaleSwitcher className={localeClass} userLocale={props.userLocale} onChange={props.onLocaleChange} />
    </AppBar>
  );
})

type Props = {
  userLocale: Locale;
  onSearch: (q: string) => void;
  onLocaleChange: (l: Locale) => void;
}