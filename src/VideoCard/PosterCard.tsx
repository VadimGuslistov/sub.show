import { CardProps } from '@/VideoCard/types';
import Title from '@/VideoCard/Title';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { memo } from 'react';
import Header from '@/VideoCard/Header';

const PosterCard = memo<PosterCardProps>((props) => (
   <Card className={props.className} raised>
      <Header resource={props.resource} />
      <img src={props.resource.poster} onClick={props.onPlay} style={{ cursor: 'pointer' }} />
      <CardActions>
         <Title name={props.resource.name.pop() || ''} play={props.onPlay} />
      </CardActions>
   </Card>
));

export default PosterCard;

export type PosterCardProps = CardProps & {
   onPlay: () => void;
};