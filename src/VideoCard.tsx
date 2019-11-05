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
      cardClass: { maxWidth: '95%', background: '#202020', img: { width: 350, height: 175 } },
      playCardClass: { width: '350px' },
      controlsClass: { marginLeft: 'auto', display: 'flex', alignItems: 'center' },
      dividerClass: { height: 28, margin: 4 },
   })
);

const VideoCard = memo<Props>((props) => {
   const { cardClass, playCardClass, controlsClass, dividerClass } = useStyles();
   const { resource, userLocale } = props;
   const [isPlaying, setPlayer] = useState(false);
   const onPlay = () => { setPlayer(true); search(resource.name.join('/')); }; // search video name for hiding others
   const onClose = () => { setPlayer(false); search(''); }; // search for showing others videos
   const controlsProps: ControlsProps = { className: controlsClass, dividerClass, onClose };
   const playerProps: PlayerProps = { resource, userLocale };

   if (isPlaying) {
      return <PlayCard
         resource={resource}
         onPlay={onPlay}
         className={`${props.className} ${cardClass}`}
         controlsProps={controlsProps}
         playerProps={playerProps} />
   }
   return <PosterCard
      resource={resource}
      className={`${props.className} ${playCardClass} ${cardClass}`}
      onPlay={onPlay} />
});

export default VideoCard;

type Props = {
   userLocale: Locale
   className: string;
   resource: Resource;
};
