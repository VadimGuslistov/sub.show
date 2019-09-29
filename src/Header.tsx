import About from '@/About';
import Search from '@/Search';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import { createStyles, makeStyles } from '@material-ui/core/styles';

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
    aboutClass: {
      // marginLeft: 'auto'
    }
  }),
);

const Header = () => {
  const { dividerClass, aboutClass, barClass } = useStyles();
  return (
    <AppBar  className={barClass}>
      <Search />
      <Divider className={dividerClass} orientation='vertical' />
      <About className={aboutClass} />
    </AppBar>
  );
}
export default Header;
