import Videocard from '@/VideoCard';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
   createStyles({
      root: {
         padding: '58px',
         flexDirection: 'row',
         flexWrap: 'wrap',
      }
   }),
);
export default () => {
   const classes = useStyles();
   return (
      <div className={classes.root}>
         <Videocard name='[EN]/Blade_Runner_(1982)' />
      </div>
   );
}