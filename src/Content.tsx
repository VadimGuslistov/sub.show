import VideoCard from '@/VideoCard';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { memo } from 'react';
import { Locale } from '@/Locale';

const useStyles = makeStyles(() =>
   createStyles({
      root: {
         display: 'flex',
         // justifyContent:'space-evenly',
         padding: '58px',
         flexDirection: 'row',
         flexWrap: 'wrap',
      },
      cardClass: { margin: '20px' }
   }),
);

export default memo((props: Props) => {
   const { root, cardClass } = useStyles();
   return (
      <div className={root}>
         {props.videos.map((name) => <VideoCard className={cardClass} name={name} key={name} locale={props.locale} />)}
      </div>
   );
});
type Props = {
   locale: Locale;
   videos: string[]
}