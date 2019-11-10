import { Locale } from '@/Locale';
import { PlayerProps } from '@/Player';
import { ControlsProps } from '@/VideoCard/Controls';
import PlayCard from '@/VideoCard/PlayCard';
import PosterCard from '@/VideoCard/PosterCard';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { memo, useState } from 'react';
import { search } from '@/Search';
import { Resource } from '@/Resources';

const useStyles = makeStyles(() =>
   createStyles({
      cardClass: {
         maxWidth:'800px',
         margin: '20px',
         background: '#202020',
      },
      playCardClass: {
         display:'flex',
         justifyContent:'center',
         order: -1,
         width: '100%',
      },
      posterCardClass: { width: '350px' },
      controlsClass: { marginLeft: 'auto', display: 'flex', alignItems: 'center' },
      dividerClass: { height: 28, margin: 4 },
   })
);

const VideoCard = memo<Props>((props) => {
   const { cardClass, playCardClass, posterCardClass, controlsClass, dividerClass } = useStyles();
   const { resource, userLocale } = props;
   const [isPlaying, setPlayer] = useState(false);
   const onPlay = () => { setPlayer(true); /* search(resource.titles.join('/')); */ }; // search video name for hiding others
   const onClose = () => { setPlayer(false); search(''); }; // search for showing others videos
   const onTagClick = (tag: string) => { search(tag); };
   const controlsProps: ControlsProps = { className: controlsClass, dividerClass, onClose };
   const playerProps: PlayerProps = { resource, userLocale };

   if (isPlaying) {
      return <div className={playCardClass}>
         <PlayCard
            className={cardClass}
            controlsProps={controlsProps}
            playerProps={playerProps}
            onTagClick={onTagClick}
            resource={resource}
            onPlay={onPlay}
         />
      </div>
   }
   return <PosterCard
      className={`${posterCardClass} ${cardClass}`}
      resource={resource}
      onTagClick={onTagClick}
      onPlay={onPlay}
   />
});

export default VideoCard;

type Props = {
   userLocale: Locale
   resource: Resource;
};
