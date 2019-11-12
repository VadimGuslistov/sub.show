import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useState, memo } from 'react';

const useStyles = makeStyles(() =>
   createStyles({ formClass: { minWidth: '70px', margin: '0 5px' }, }),
);

export const locales: Locale[] = ['[EN]', '[GE]', '[RU]'];

const LocaleSwitcher = memo<Props>((props) => (
   <FormControl className={`${useStyles().formClass} ${props.className}`}>
      <Select
         onChange={(e) => { props.onChange(e.target.value as Locale); }}
         value={props.userLocale}>
         {locales.map((locale) =>
            <MenuItem key={locale} value={locale}>
               {locale.replace(/\[|\]/g, '')}
            </MenuItem>)}
      </Select>
   </FormControl >
));
export default LocaleSwitcher;

type Props = {
   userLocale: Locale;
   className?: string;
   onChange: (l: Locale) => void
}
export type Locale = '[EN]' | '[GE]' | '[RU]';