import { fromHash } from '@/Search';
import Typography from '@material-ui/core/Typography';
import { memo } from 'react';

const Tags = memo<TagsProps>((props) => (<>{
   props.tags.map((tag) =>
      <Typography
         onClick={() => { props.onTagClick(tag); }}
         style={{ cursor: 'pointer', display: 'inline', color:'#ccc', fontFamily:'Lora' }}
         variant="subtitle1"
         key={tag}>
         {`${fromHash(tag)}, `}
      </Typography>)
}</>)
);
export default Tags;

type TagsProps = {
   onTagClick: (s: string) => void;
   tags: string[]
};