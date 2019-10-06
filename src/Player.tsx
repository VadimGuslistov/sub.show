import { Locale } from '@/Locale';
import { makeStyles } from '@material-ui/core/styles';
import React, { memo, useState } from 'react';
import Track from '@/Player/Track';
import { PlayerProps } from '@/Player/types';

/** seek back in 5 sec by LeftArrow key pressing  */
const STEP = 5;
const LEFT_ARROW_KEYCODE = 37;
const useStyles = makeStyles({
  videoClass: { width: '100%', background: 'transparent' },
});

let timestamp: number = 0;

export default memo<PlayerProps>((props) => {
  const { videoClass } = useStyles();
  const videoRef = React.createRef<HTMLVideoElement>();
  const videoLocale = (/\[(.*)\]/.exec(props.root) || [null]).pop() as Locale;
  if (!videoLocale) { throw new Error(`Video locale is not defined! ${props.root}`); }

  const [isPrimSubVisible, visiblePrimSub] = useState<boolean>(false);
  const [isSecSubVisible, visibleSecSub] = useState<boolean>(false);

  function onSeeked(): void {
    if (!videoRef.current || timestamp < videoRef.current.currentTime) {
      return;
    }
    if (isPrimSubVisible && !isSecSubVisible && (props.locale !== videoLocale)) {
      visibleSecSub(true);
      return;
    }
    !isPrimSubVisible && visiblePrimSub(true);
  }

  function onTimeUpdate() {
    if (!videoRef.current || timestamp > videoRef.current.currentTime) {
      return;
    }
    timestamp = videoRef.current.currentTime;
    isPrimSubVisible && visiblePrimSub(false);
    isSecSubVisible && visibleSecSub(false);
  }

  const onError = () => { videoRef.current && console.error(videoRef.current.error); }
  const stepBack = (e: React.KeyboardEvent<HTMLVideoElement>) => {
    if (!videoRef.current || e.keyCode !== LEFT_ARROW_KEYCODE) { return; }
    // timestamp = videoRef.current.currentTime;
    videoRef.current.currentTime = timestamp - STEP;
  }
  return (
    <video
      onKeyDown={stepBack}
      preload="auto"
      ref={videoRef}
      controls={true}
      autoPlay={true}
      onSeeked={onSeeked}
      className={videoClass}
      onError={onError}
      onTimeUpdate={onTimeUpdate} >

      <source src={`${props.root}/video.mp4`} type="video/mp4" />

      <Track visible={isPrimSubVisible} root={props.root} locale={videoLocale} />
      <Track visible={isSecSubVisible} root={props.root} locale={props.locale} />}

      Sorry, your browser doesn't support embedded videos.
  </video >
  );
});

