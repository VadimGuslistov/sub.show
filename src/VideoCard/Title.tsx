import { fromHash } from '@/Search';
import Typography from '@material-ui/core/Typography';
import { memo } from 'react';

const Title = memo<TitleProps>((props) => {
   return (
      <Typography
         onClick={() => { props.play && props.play(); }}
         style={{ cursor: 'pointer' }}>
         {fromHash(props.name)}
      </Typography>)
});

export default Title;

type TitleProps = {
   play?: () => void;
   name: string;
};