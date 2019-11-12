import { fromHash } from '@/Search';
import Typography from '@material-ui/core/Typography';
import { memo } from 'react';

const Title = memo<TitleProps>((props) => (<>
   <Typography
      onClick={props.onLocaleClick}
      style={{ cursor: 'pointer'}}
      component="span">
      <img src={props.flag} style={{ cursor: 'pointer', width:32, height:32 }} />
   </Typography>
   <Typography
      onClick={props.onTitleClick}
      style={{ cursor: 'pointer', verticalAlign: 'text-bottom' }}
      variant="overline">
      {fromHash(props.title)}
   </Typography>
</>)
);

export default Title;

type TitleProps = {
   title: string;
   onTitleClick: () => void;
   flag: string;
   onLocaleClick: () => void;
};