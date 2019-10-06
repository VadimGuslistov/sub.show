import Player from '@/Player';
import { PlayerProps } from '@/Player/types';
import Controls, { ControlsProps } from '@/VideoCard/Controls';
import Title from '@/VideoCard/Title';
import { CardProps } from '@/VideoCard/types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { memo } from 'react';

const PlayCard = memo<PlayCardProps>((props) => (
   <Card className={props.className} >
      <Player {...props.playerProps} />
      <CardActions >
         <Title title={props.title} close={props.controlsProps.onClose} />
         <Controls {...props.controlsProps} />
      </CardActions>
   </Card>
));

export default PlayCard;

type PlayCardProps = CardProps & {
   controlsProps: ControlsProps;
   playerProps: PlayerProps
};