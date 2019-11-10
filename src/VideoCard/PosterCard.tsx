import { CardProps } from '@/VideoCard/types';
import Title from '@/VideoCard/Title';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { memo } from 'react';
import Tags from '@/VideoCard/Tags';

const PosterCard = memo<PosterCardProps>((props) => (
   <Card className={props.className} raised>
      <Title
         title={props.resource.title}
         onTitleClick={props.onPlay}
         flag={props.resource.flag}
         onLocaleClick={() => { props.onTagClick(props.resource.locale); }}
      />
      <img src={props.resource.poster} onClick={props.onPlay} style={{ cursor: 'pointer', width: '100%' }} />
      <CardActions>
         <Tags
            tags={props.resource.tags.slice(0, props.resource.tags.length - 1)}
            onTagClick={props.onTagClick}
         />
      </CardActions>
   </Card>
));

export default PosterCard;

export type PosterCardProps = CardProps & {
   onPlay: () => void;
};