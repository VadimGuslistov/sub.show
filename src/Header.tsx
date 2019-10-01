import About from '@/About';
import Search from '@/Search';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Locale from '@/Locale';
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

export default memo((props: Props) => {
  const { dividerClass, localeClass, barClass } = useStyles();
  return (
    <AppBar className={barClass}>
      <About />
      <Divider className={dividerClass} orientation='vertical' />
      <Search onSearch={props.onSearch} />
      <Divider className={dividerClass} orientation='vertical' />
      <Locale className={localeClass} onChange={props.onLocaleChange} />
    </AppBar>
  );
})

type Props = {
  onSearch: (v) => void;
  onLocaleChange: (l) => void;
}