import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import React, { memo } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
   root: { backgroundColor: theme.palette.primary.light }
}));
const Snack = memo<React.PropsWithChildren<Props>>((props) => (
   <Snackbar 
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      // autoHideDuration={7000}
      onClose={props.onClose}
      open={props.isOpen}>
      <SnackbarContent
         className={useStyles().root}
         aria-describedby="client-snackbar"
         message={props.children}
         action={[
            <IconButton
               key="close"
               aria-label="close"
               color="inherit"
               onClick={props.onClose}>
               <CloseIcon />
            </IconButton>,
         ]}
      />
   </Snackbar>));
export default Snack;

type Props = {
   isOpen: boolean;
   onClose: () => void;
};