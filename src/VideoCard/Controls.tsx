import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ShareIcon from '@material-ui/icons/Share';
import { memo } from 'react';

const Controls = memo<ControlsProps>((props) => (
   <div className={props.className}>
      <Divider className={props.dividerClass} orientation='vertical' />
      <IconButton onClick={props.onShare}> <ShareIcon /> </IconButton>
      <Divider className={props.dividerClass} orientation='vertical' />
      <IconButton onClick={props.onClose}> <CloseIcon /> </IconButton>
   </div>
));

export default Controls;

export type ControlsProps = {
   className?: string;
   dividerClass?: string;
   onClose?: () => void;
   onShare?: () => void;
}