import { Locale } from '@/Locale';
import Track from '@/Player/Track';
import { Resource } from '@/Resources';
import { makeStyles } from '@material-ui/core/styles';
import React, { memo, useState, useEffect } from 'react';

const useStyles = makeStyles({
  videoClass: { maxWidth: '100%', background: 'transparent' },
});

const CTRL_KEY_CODE = 17;
const STEP = 3;

let timestamp: number = 0;

export default memo<PlayerProps>((props) => {
  const { videoClass } = useStyles();
  const videoRef = React.createRef<HTMLVideoElement>();
  const { userLocale, resource } = props;
  const { video, locale } = resource;
  const allowSecSub = userLocale !== locale;
  const [isSubShown, showSub] = useState<boolean>(false);
  const [isUserSubShown, showUserSub] = useState<boolean>(false);

  function onSeeked(): void {
    if (!videoRef.current || timestamp < videoRef.current.currentTime) { return; }
    isSubShown && !isUserSubShown && allowSecSub && showUserSub(true);
    !isSubShown && showSub(true);
  }

  function onTimeUpdate() {
    if (!videoRef.current || timestamp >= videoRef.current.currentTime) { return; }
    timestamp = videoRef.current.currentTime;
    isSubShown && showSub(false);
    isUserSubShown && showUserSub(false);
  }

  useEffect(() => {
    const video = document.querySelector('video');
    if (!video) { return; }
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.keyCode !== CTRL_KEY_CODE) { return; }
      video.currentTime -= STEP;
    }, false);
  }, []);

  return (
    <video
      preload="auto"
      ref={videoRef}
      controls={true}
      autoPlay={true}
      onSeeked={onSeeked}
      className={videoClass}
      onTimeUpdate={onTimeUpdate} >

      <source src={video} type="video/mp4" />

      <Track visible={isSubShown} track={resource.getTrack(locale)} locale={locale} />
      <Track visible={isUserSubShown} track={resource.getTrack(userLocale)} locale={userLocale} />}

      Your browser doesn't support embedded videos.
  </video >
  );
});

export type PlayerProps = {
  resource: Resource;
  userLocale: Locale
};
