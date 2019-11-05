import { Locale } from '@/Locale';
import React, { memo, useEffect } from 'react';

const Track = memo<TrackProps>((props) => {
   const ref = React.createRef<HTMLTrackElement>();
   const { locale, track } = props;

   useEffect(() => {
      if (!ref.current) { return; }
      ref.current.track.mode = (props.visible) ? 'showing' : 'hidden'
   }, [props.visible]);
   return (<track srcLang={locale} kind='subtitles' label={locale} src={track} ref={ref} />);
});
export default Track;

type TrackProps = {
   locale: Locale;
   visible: boolean;
   track: string;
};