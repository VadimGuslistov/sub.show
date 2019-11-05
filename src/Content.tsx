import VideoCard from '@/VideoCard';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { memo } from 'react';
import { Locale } from '@/Locale';
import { Resource } from '@/Resources';

const useStyles = makeStyles(() =>
   createStyles({
      root: {
         display: 'flex',
         // justifyContent:'space-evenly',
         paddingBottom: '58px',
         flexDirection: 'row',
         flexWrap: 'wrap',
      },
      cardClass: { margin: '20px' }
   }),
);

export default memo<Props>((props) => {
   const { root, cardClass } = useStyles();
   return (
      <div className={root}> {
         props.resources.map((r) => <VideoCard className={cardClass} resource={r} key={r.video} userLocale={props.userLocale} />)
      } </div>
   );
});

type Props = {
   userLocale: Locale;
   resources: Resource[]
}