import { fromHash, search } from '@/Search';
import Typography from '@material-ui/core/Typography';
import { memo } from 'react';

const Name = memo<NameProps>((props) => (<>{
   props.name.split('/').map((c) =>
      <Typography style={{ cursor: 'pointer' }} variant='body1' component='p' key={c}
         onClick={() => { search(c) }}> {fromHash(c)} </Typography>)
}</>));

export default Name;

type NameProps = { name: string };