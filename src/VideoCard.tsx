import { Locale } from '@/Locale';
import { PlayerProps } from '@/Player';
import { Resource } from '@/Resources';
import { ControlsProps } from '@/VideoCard/Controls';
import PlayCard from '@/VideoCard/PlayCard';
import PosterCard from '@/VideoCard/PosterCard';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { memo, useState } from 'react';

const useStyles = makeStyles(() =>
   createStyles({
      cardClass: {
         background: '#202020',
         maxWidth: '800px',
         margin: '20px',
      },
      playCardClass: {
         justifyContent: 'center',
         display: 'flex',
         width: '100%',
         order: -1,
      },
      posterCardClass: { width: '350px' },
      controlsClass: {
         alignItems: 'center',
         marginLeft: 'auto',
         display: 'flex',
      },
      dividerClass: { height: 28, margin: 4 },
   })
);

const VideoCard = memo<Props>((props) => {
   const { cardClass, playCardClass, posterCardClass, controlsClass, dividerClass } = useStyles();
   const { resource, userLocale } = props;
   const controlsProps: ControlsProps = { className: controlsClass, dividerClass, onClose: props.onClose };
   const playerProps: PlayerProps = { resource, userLocale };

   if (!props.isPlaying) {
      return <PosterCard
         className={`${posterCardClass} ${cardClass}`}
         onTagClick={props.onTagClick}
         resource={resource}
         onPlay={props.onPlay}
      />
   }
   return <div className={playCardClass}>
      <PlayCard
         controlsProps={controlsProps}
         playerProps={playerProps}
         onTagClick={props.onTagClick}
         className={cardClass}
         resource={resource}
         onPlay={props.onPlay}
      />
   </div>
});

export default VideoCard;

type Props = {
   onTagClick: (tag: string) => void;
   onClose: () => void;
   onPlay: () => void;
   isPlaying: boolean;
   userLocale: Locale
   resource: Resource;
};
