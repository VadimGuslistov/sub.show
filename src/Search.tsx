import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      searchClass: {
         marginLeft: theme.spacing(1),
         flex: 1,
         maxWidth: 300
      },
   })
);

export const fromHash = (s: string) => s.replace(/_/g, ' ');
export const toHash = (s: string) => s.replace(/ /g, '_');

export let search = (_: string) => { };

export default (props: Props) => {
   const { searchClass } = useStyles();
   const [query, setQuery] = useState('');

   useEffect(() => {
      search = (v: string) => {
         location.hash = v;
         props.onSearch(v);
         setQuery(v);
      }
      const hashQuery = location.hash.replace('#', '');
      if (query === hashQuery) { return; }
      props.onSearch(hashQuery);
      setQuery(hashQuery);
   }, []);

   return (<>
      <InputBase
         className={searchClass}
         placeholder='Search'
         autoFocus={false}
         onChange={(e) => { search(toHash(e.target.value)); }}
         value={fromHash(query)}
      />
      <IconButton aria-label='search'>
         <SearchIcon />
      </IconButton>
   </>)
}
type Props = { onSearch: (v) => void; }