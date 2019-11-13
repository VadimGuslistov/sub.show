import { fromHash } from '@/Search';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { memo } from 'react';

const Tags = memo<TagsProps>((props) => (<>
   <Breadcrumbs separator="›" aria-label="breadcrumb" style={{ width: '100%' }}>
      {props.tags.map((tag) =>
         <Link onClick={() => { props.onTagClick(tag); }}
            style={{ cursor: 'pointer' }}
            color="inherit"
            key={tag}>
            {`${fromHash(tag)}`}
         </Link>
      )}
   </Breadcrumbs>
</>)
);
export default Tags;

type TagsProps = {
   onTagClick: (s: string) => void;
   tags: string[];
};