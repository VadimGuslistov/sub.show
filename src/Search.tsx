import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { ChangeEvent, useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         padding: '2px 4px',
         display: 'flex',
         alignItems: 'center',
         width: 400,
       },
      searchClass: {
         marginLeft: theme.spacing(1),
         flex: 1,
         maxWidth: 350
      },
   }),
);

const Search = () => {

   const { searchClass, root } = useStyles();
   const [query, setQuery] = useState('');

   useEffect(() => {
      const hash = location.hash.replace('#', '').replace('%20', ' ');
      if (query === hash) { return; }
      setQuery(hash);
   });

   const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);
      location.hash = value;
   }
   return (<>
   {/* <Paper className={root}> */}
      <InputBase
         className={searchClass}
         placeholder='Search'
         autoFocus={false}
         onChange={onSearch}
         value={query}
      />
      <IconButton aria-label='search'>
         <SearchIcon />
      </IconButton>
      {/* </Paper> */}
   </>)
}

export default Search;