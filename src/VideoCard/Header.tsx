import { fromHash, search } from '@/Search';
import { Resource } from '@/Resources';
import Typography from '@material-ui/core/Typography';
import { memo } from 'react';

const Header = memo<HeaderProps>((props) => {
   const { flag, locale, name } = props.resource;
   const onClick = (q: string) => { props.close && props.close(); search(q); }
   return (<>
      <Typography onClick={() => { onClick(locale); }}
         style={{ cursor: 'pointer' }}
         component="span">
         <img src={flag} />
      </Typography>
      {
         name.map((c) =>
            <Typography style={{ cursor: 'pointer' }}
               onClick={() => { onClick(c); }}
               component="span"
               key={c} >
               {`${fromHash(c)} / `}
            </Typography>)
      }
   </>)
});

export default Header;

type HeaderProps = {
   close?: () => void;
   resource: Resource;
};