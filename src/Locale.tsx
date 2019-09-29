import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles(() =>
   createStyles({ formClass: { minWidth: '70px', margin:'0 5px'},  }),
);
export default (props = { onChange: (_) => { } }) => {
   const { formClass } = useStyles();
   const [locale, setLocale] = useState('EN');
   const onChange = (locale: Locale) => {
      setLocale(locale);
      props.onChange(locale);
   };
   return (
      <FormControl  className={formClass}>
         <Select
            value={locale}
            onChange={(e) => { onChange(e.target.value as Locale); }} >
            <MenuItem value={'EN'}>EN</MenuItem>
            <MenuItem value={'GE'}>GE</MenuItem>
            <MenuItem value={'RU'}>RU</MenuItem>
         </Select >
      </FormControl >
   );
}

type Locale = 'EN' | 'GE' | 'RU';