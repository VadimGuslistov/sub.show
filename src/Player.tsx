import { Locale } from '@/Locale';
import { makeStyles } from '@material-ui/core/styles';
import React, { memo, useState } from 'react';

const useStyles = makeStyles({
  videoClass: { width: '100%', background: 'transparent' },
});

const Track = memo<TrackProps>((props) => {
  if (!props.visible) { return null; }
  return (<track src={`${props.root}/${props.locale}.vtt`}
    srcLang={props.locale}
    label={props.locale}
    kind="subtitles" />)
});

export default memo<PlayerProps>((props) => {
  const { videoClass } = useStyles();
  const videoRef = React.createRef<HTMLVideoElement>();
  const videoLocale = (/\[(.*)\]/.exec(props.root) || [null]).pop() as Locale;
  if (!videoLocale) { throw new Error(`Video locale is not defined! ${props.root}`); }

  const [isPrimSubVisible, visiblePrimSub] = useState<boolean>(false);
  const [isSecSubVisible, visibleSecSub] = useState<boolean>(false);
  const [timestamp, setTimestamp] = useState<number>(0);

  function onSeeked(): void {
    if (!videoRef.current || timestamp <= videoRef.current.currentTime) {
      return;
    }
    if (isPrimSubVisible && (props.locale !== videoLocale)) {
      visibleSecSub(true);
      return;
    }
    visiblePrimSub(true);
  }

  function onTimeUpdate() {
    if (!videoRef.current || timestamp > videoRef.current.currentTime) {
      return;
    }
    setTimestamp(videoRef.current.currentTime);
    visiblePrimSub(false);
    visibleSecSub(false);
  }

  return (
    <video
      preload="auto"
      ref={videoRef}
      controls={true}
      autoPlay={true}
      onSeeked={onSeeked}
      className={videoClass}
      onTimeUpdate={onTimeUpdate} >

      <source src={`${props.root}/video.mp4`} type="video/mp4" />

      <Track visible={isPrimSubVisible} root={props.root} locale={videoLocale} />
      <Track visible={isSecSubVisible} root={props.root} locale={props.locale} />}

      Sorry, your browser doesn't support embedded videos.
  </video >
  );
});

export type PlayerProps = { root: string; locale: Locale };
type TrackProps = PlayerProps & { visible: boolean };