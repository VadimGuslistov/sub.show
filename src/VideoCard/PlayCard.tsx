import Player, { PlayerProps } from '@/Player';
import { CardProps } from '@/VideoCard/Card';
import Controls, { ControlsProps } from '@/VideoCard/Controls';
import Name from '@/VideoCard/Name';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { memo } from 'react';

const PlayCard = memo<PlayCardProps>((props) => (
   <Card className={props.className} >
      <Player {...props.playerProps} />
      <CardActions >
         <Name name={props.title} />
         <Controls {...props.controlsProps} />
      </CardActions>
   </Card>
));

export default PlayCard;

type PlayCardProps = CardProps & {
   controlsProps: ControlsProps;
   playerProps: PlayerProps
};