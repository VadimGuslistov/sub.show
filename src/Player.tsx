import { Locale } from '@/Locale';
import Tooltip from '@/Player/Snack';
import Track from '@/Player/Track';
import { Resource } from '@/Resources';
import { makeStyles } from '@material-ui/core/styles';
import React, { memo, useEffect, useState } from 'react';

const useStyles = makeStyles({
  videoClass: { maxWidth: '100%', background: 'transparent' },
});

const CTRL_KEY_CODE = 17;
const STEP = 4;

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
    isUserSubShown && showUserSub(false);
    isSubShown && showSub(false);
  }

  const [isSnackShown, showSnack] = React.useState(false);

  useEffect(() => {
    if ('ontouchstart' in document.documentElement) { return; } // if mobile
    const video = document.querySelector('video');
    video && addCtrlHandler(video);
    showSnack(true);
  }, []);

  return (<>
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
    <Tooltip isOpen={isSnackShown} onClose={() => { showSnack(false); }}>
      <img src={`${Resource.root}/icon/ctrl.png`} width='300' />
      <>Ctrl</>
    </Tooltip>
  </>);
});

export type PlayerProps = {
  resource: Resource;
  userLocale: Locale;
};

function addCtrlHandler(video: HTMLVideoElement) {
  document.addEventListener('keydown', onKeyDown, false);
  function onKeyDown(e: KeyboardEvent) {
    if (e.keyCode !== CTRL_KEY_CODE) { return; }
    video.currentTime -= STEP;
  }
}