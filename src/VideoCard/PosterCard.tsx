import { CardProps } from '@/VideoCard/types';
import Title from '@/VideoCard/Title';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { memo } from 'react';

const PosterCard = memo<PosterCardProps>((props) => (
   <Card className={props.className} raised>
      <img src={`${props.root}/poster.png`} onClick={props.onPlay} style={{ cursor: 'pointer' }} />
      <CardActions>
         <Title title={props.title} play={props.onPlay} />
      </CardActions>
   </Card>
));

export default PosterCard;

export type PosterCardProps = CardProps & {
   onPlay: () => void;
   root: string;
};