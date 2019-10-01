import Videocard from '@/VideoCard';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { memo } from 'react';
import {Locale} from '@/Locale';
const useStyles = makeStyles(() =>
   createStyles({
      root: {
         padding: '58px',
         flexDirection: 'row',
         flexWrap: 'wrap',
      }
   }),
);
export default memo((props: Props) => {
   const classes = useStyles();
   return (
      <div className={classes.root}>
         {props.videos.map((name) => <Videocard name={name} key={name} locale={props.locale} />)}
      </div>
   );
});
type Props = { 
   locale: Locale;
   videos: string[] 
}