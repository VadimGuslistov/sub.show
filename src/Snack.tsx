import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import React, { memo } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
   root: {
      color: theme.palette.primary.light,
      backgroundColor: theme.palette.primary.main
   }
}));
const Snack = memo<React.PropsWithChildren<SnackProps>>((props) => (
   <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={6000}
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

export type SnackProps = {
   isOpen: boolean;
   onClose: () => void;
};