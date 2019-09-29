import Player from '@/Player';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import ShareIcon from '@material-ui/icons/Share';
import { memo, useState } from 'react';
import Divider from '@material-ui/core/Divider';

import Locale from '@/Locale';

const useStyles = makeStyles(() =>
   createStyles({
      cardClass: { maxWidth: '95%', background: '#202020' },
      playCardClass: { width: '350px' },
      controlsClass: { marginLeft: 'auto', display: 'flex', alignItems: 'center' },
      dividerClass: { height: 28, margin: 4 },
   })
);

const Controls = memo((props: ControlsProps) => (
   <div className={props.className}>
      <Locale onChange={props.onLocaleChange} />
      <Divider className={props.dividerClass} orientation='vertical' />
      <IconButton onClick={props.onShare}> <ShareIcon /> </IconButton>
      <Divider className={props.dividerClass} orientation='vertical' />
      <IconButton onClick={props.onClose}> <CloseIcon /> </IconButton>
   </div>
));

const PlayCard = memo((props: PlayCardProps) => (
   <Card className={props.className} >
      <Player root={props.root} />
      <CardActions >
         <Typography variant='h6' component='h6'> {props.title} </Typography>
         <Controls {...props.controlsProps} />
      </CardActions>
   </Card>
));

const PosterCard = memo((props: PosterCardProps) => (
   <Card className={props.className} >
      <img src={`${props.root}/poster.png`} onClick={props.onPosterClick} style={{ cursor: 'pointer' }} />
      <CardActions>
         <Typography variant='h6' component='h6'> {props.title} </Typography>
      </CardActions>
   </Card>
));

export default memo<{ name: string; }>((props) => {
   const { cardClass, playCardClass, controlsClass, dividerClass } = useStyles();
   const root = `/static/${props.name}`;
   const title = props.name.replace(/_/g, ' ').replace(/\//g, ' / ');
   const [isPlaying, setPlayer] = useState(false);
   const play = () => { setPlayer(true); };
   const close = () => { setPlayer(false); };
   const onLocaleChange = (locale) => { };
   const controlsProps: ControlsProps = {
      className: controlsClass,
      dividerClass,
      onClose: close,
      onLocaleChange
   };
   if (isPlaying) {
      return <PlayCard
         title={title}
         className={cardClass}
         root={root}
         controlsProps={controlsProps} />
   }
   return <PosterCard
      title={title}
      className={`${playCardClass} ${cardClass}`}
      root={root}
      onPosterClick={play} />
});

type ControlsProps = {
   className?: string;
   dividerClass?: string;
   onClose?: () => void;
   onShare?: () => void;
   onLocaleChange: (locale) => void;
}

type CardProps = { title: string; className: string; root: string; }
type PlayCardProps = CardProps & { controlsProps: ControlsProps; }
type PosterCardProps = CardProps & { onPosterClick: () => void };
