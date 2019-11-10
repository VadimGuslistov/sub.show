import Player from '@/Player';
import { PlayerProps } from '@/Player';
import Controls, { ControlsProps } from '@/VideoCard/Controls';
import Tags from '@/VideoCard/Tags';
import Title from '@/VideoCard/Title';
import { CardProps } from '@/VideoCard/types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { memo } from 'react';

const PlayCard = memo<PlayCardProps>((props) => (
   <Card className={props.className} >
      <Title
         title={props.resource.title}
         onTitleClick={() => void 0}
         flag={props.resource.flag}
         onLocaleClick={() => { props.onTagClick(props.resource.locale); }}
      />
      <Player {...props.playerProps} />
      <CardActions>
         <Tags
            tags={props.resource.tags}
            onTagClick={props.onTagClick}
         />
         <Controls {...props.controlsProps} />
      </CardActions>
   </Card>
));
export default PlayCard;

type PlayCardProps = CardProps & {
   controlsProps: ControlsProps;
   playerProps: PlayerProps
};