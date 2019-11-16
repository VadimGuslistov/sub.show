import { Resource } from '@/Resources';
import Snack from '@/Snack';
import { Typography } from '@material-ui/core';
import React, { memo, useEffect } from 'react';
import Button from '@material-ui/core/Button';

const CTRL_KEY_CODE = 17;
const STORAGE_KEY = 'CtrlKey';
const STORAGE_FLAG = 'isShown';
const CtrlKey = memo<CtrlKeyProps>((props) => {
   const [isOpen, open] = React.useState(false);

   useEffect(() => {
      if ('ontouchstart' in document.documentElement) { return; } // if mobile
      document.addEventListener('keydown', (e) => {
         if (e.keyCode !== CTRL_KEY_CODE) { return; }
         props.onKeyDown();
      }, false);
      if (localStorage && localStorage.getItem(STORAGE_KEY) === STORAGE_FLAG) {
         return;
      }
      open(true);
      localStorage && localStorage.setItem(STORAGE_KEY, STORAGE_FLAG);
   }, []);

   return (
      <Snack isOpen={isOpen} onClose={() => { open(false); }}>
         <Typography>
            Press <Button variant="contained" size="small" onClick={props.onKeyDown}> Ctrl </Button> key to seek backward 4 seconds in player.
         </Typography>
      </Snack>);
});
export default CtrlKey;

type CtrlKeyProps = {
   onKeyDown: () => void;
};