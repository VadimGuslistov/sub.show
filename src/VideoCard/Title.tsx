import { fromHash, search } from '@/Search';
import Typography from '@material-ui/core/Typography';
import { memo } from 'react';

const Title = memo<TitleProps>((props) => {
   const cats = props.title.split('/');
   const name = cats.pop() || '';
   return (<>
      {
         cats.map((c) =>
            <Typography style={{ cursor: 'pointer' }}
               key={c}
               onClick={() => {
                  props.close && props.close();
                  search(c)
               }}>
               {fromHash(c)} /
            </Typography>)
      }
      <Typography style={{ cursor: 'pointer' }}
         onClick={() => { props.play && props.play(); }}>
         {fromHash(name)}
      </Typography>
   </>)
});

export default Title;

type TitleProps = {
   close?: () => void;
   play?: () => void;
   title: string;
};