import React, { memo, useEffect } from 'react';
import { PlayerProps } from '@/Player/types';

const Track = memo<TrackProps>((props) => {
   const ref = React.createRef<HTMLTrackElement>();

   useEffect(() => {
      if (!ref.current) { return; }
      ref.current.track.mode = (props.visible) ? 'showing' : 'hidden'
   }, [props.visible]);

   return (
      <track src={`${props.root}/${props.locale}.vtt`}
         srcLang={props.locale}
         label={props.locale}
         kind='subtitles'
         ref={ref} />
   )
});
export default Track;

type TrackProps = PlayerProps & { visible: boolean };