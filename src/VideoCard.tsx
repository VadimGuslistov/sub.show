import { Locale } from '@/Locale';
import { PlayerProps } from '@/Player/types';
import { ControlsProps } from '@/VideoCard/Controls';
import PlayCard from '@/VideoCard/PlayCard';
import PosterCard from '@/VideoCard/PosterCard';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { memo, useState } from 'react';

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
   const root = `/static/${props.name}`;
   const title = props.name;
   const [isPlaying, setPlayer] = useState(false);
   const onPlay = () => { setPlayer(true); };
   const onClose = () => { setPlayer(false); };
   const controlsProps: ControlsProps = { className: controlsClass, dividerClass, onClose };
   const playerProps: PlayerProps = { root, locale: props.locale };

   if (isPlaying) {
      return <PlayCard
         title={title}
         onPlay={onPlay}
         className={`${props.className} ${cardClass}`}
         controlsProps={controlsProps}
         playerProps={playerProps} />
   }
   return <PosterCard
      title={title}
      className={`${props.className} ${playCardClass} ${cardClass}`}
      root={root}
      onPlay={onPlay} />
});

export default VideoCard;

type Props = { className: string; name: string; locale: Locale };