import VideoCard from '@/VideoCard';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { memo } from 'react';
import { Locale } from '@/Locale';
import { Resource } from '@/Resources';

const useStyles = makeStyles(() =>
   createStyles({
      root: {
         display: 'flex',
         alignItems: 'flex-start',
         justifyContent:'space-evenly',
         flexDirection: 'row',
         flexWrap: 'wrap',
      },
   })
);

export default memo<Props>((props) => {
   const { root } = useStyles();
   return (
      <div className={root}> {
         props.resources.map((r) => <VideoCard resource={r} key={r.video} userLocale={props.userLocale} />)
      } </div>
   );
});

type Props = {
   userLocale: Locale;
   resources: Resource[]
}