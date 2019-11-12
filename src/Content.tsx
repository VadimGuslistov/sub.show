import VideoCard from '@/VideoCard';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { memo, useState } from 'react';
import { Locale } from '@/Locale';
import { Resource, VideoPath } from '@/Resources';
import { search } from '@/Search';

const useStyles = makeStyles(() =>
   createStyles({
      root: {
         display: 'flex',
         alignItems: 'flex-start',
         flexDirection: 'row',
         flexWrap: 'wrap',
         paddingBottom: '55px'
      },
   })
);


export default memo<Props>((props) => {
   const rootRef = React.createRef<HTMLDivElement>();
   const scrollTop = () => {
      if (typeof window === 'undefined') { return; }
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };
   const [playingVideo, play] = useState<VideoPath>();
   const onPlay = (video: VideoPath) => {
      play(video);
      scrollTop();
   }
   const onClose = () => {
      search(''); // search to display other videos
      play('');
   };
   const onTagClick = (tag: string) => {
      search(tag);
      play('');
   };

   return (<div className={useStyles().root} ref={rootRef}>
      {
         props.resources.map((r) =>
            <VideoCard
               onPlay={() => { onPlay(r.video); }}
               isPlaying={playingVideo === r.video}
               userLocale={props.userLocale}
               onTagClick={onTagClick}
               onClose={onClose}
               key={r.video}
               resource={r}
            />)
      }
   </div>);
});

type Props = {
   userLocale: Locale;
   resources: Resource[]
}