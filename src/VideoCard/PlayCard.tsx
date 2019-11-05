import Player from '@/Player';
import { PlayerProps } from '@/Player';
import Controls, { ControlsProps } from '@/VideoCard/Controls';
import Header from '@/VideoCard/Header';
import Title from '@/VideoCard/Title';
import { CardProps } from '@/VideoCard/types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { memo } from 'react';
// ! Избавиться от .pop т.к меняет аргумент
const PlayCard = memo<PlayCardProps>((props) => {
   return (
      <Card className={props.className} >
         <Header resource={props.resource} close={props.controlsProps.onClose} />
         <Player {...props.playerProps} />
         <CardActions>
            <Title name={props.resource.name.pop() || ''} />
            <Controls {...props.controlsProps} />
         </CardActions>
      </Card>
   );
});

export default PlayCard;

type PlayCardProps = CardProps & {
   controlsProps: ControlsProps;
   playerProps: PlayerProps
};