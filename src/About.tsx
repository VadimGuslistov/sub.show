import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import { memo, useState } from 'react';


const AboutInfo = (<>
   <DialogTitle > About </DialogTitle>
   <DialogContent>
      <DialogContentText>
         On this site you can watch videos (movie clips) and improve your foreign language skills.
       </DialogContentText>
      <DialogContentText>
         Just set up your native language and find a video in your target language
         (the video's primary language is indicated in brackets []).
      </DialogContentText>
   </DialogContent>
</>);

const HowInfo = (<>
   <DialogTitle> How does it work? </DialogTitle>
   <DialogContent>
      <DialogContentText>
         When you didn't understand something while watching,
         just go back and subtitles in the primary language will appear.
      </DialogContentText>
      <DialogContentText>
         If you still have no idea, go back again and you will see subtitles in your native language.
      </DialogContentText>
   </DialogContent>
</>);

export default memo((props: { className: string }) => {
   const [isOpened, open] = useState(false);
   const closeDialog = () => { open(false) };
   const openDialog = () => { open(true) };
   return (
      <div className={props.className}>
         <IconButton onClick={openDialog} edge='end'>
            <InfoOutlined />
         </IconButton>
         <Dialog open={isOpened} >
            {AboutInfo}
            {HowInfo}
            <DialogActions>
               <Button onClick={closeDialog}> OK </Button>
            </DialogActions>
         </Dialog>
      </div>);
});
