import { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   videoClass: { width: '100%', background: 'transparent' },
});

export default memo((props: { root: string; }) => {
   const { videoClass } = useStyles();
   const onSeeked = () => { };
   const onTimeUpdate = () => { };
   return (
      <video
         preload="auto"
         controls={true}
         autoPlay={true}
         onSeeked={onSeeked}
         className={videoClass}
         onTimeUpdate={onTimeUpdate} >
         <source src={`${props.root}/video.mp4`} type="video/mp4" />
         {/* <track
            id="primSubs"
            kind="subtitles"
      : label="primLocale"
         : srclang="primLocale"
      : src="`${path}/${primLocale}.vtt`"
         />
      <track
            id="secSubs"
            kind="subtitles"
      : label="secLocale"
         : srclang="secLocale"
      : src="`${path}/${secLocale}.vtt`"
     />*/}
         Sorry, your browser doesn't support embedded videos.
  </video >
   );
})
/*
<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import { Locale } from "../store/i18n";

let timestamp: number = 0;
let isTracksHidden = true;

const isShowing = (track: TextTrack) => track.mode === "showing";
const showTrack = (track: TextTrack) => (track.mode = "showing");

const isHidden = (track: TextTrack) => track.mode === "hidden";
const hideTrack = (track: TextTrack) => (track.mode = "hidden");

@Component
class Video extends Vue {
  @Prop({ type: String, required: true })
  item!: string;
  path!: string;

  videoEl!: HTMLVideoElement;
  secTrack!: TextTrack;
  primTrack!: TextTrack;

  primLocale!: Locale;

  get secLocale(): Locale {
    const secLocale = this.$store.state.i18n.locale;
    if (secLocale === this.primLocale && this.secTrack) {
      hideTrack(this.secTrack);
    }
    return secLocale;
  }

  created() {
    this.path = `/content/${this.$props.item}`;
    const locales: Locale[] = this.$store.state.i18n.locales.join("|");
    const detectLang = new RegExp(`\\[(${locales})\\]`);
    const primLocale = (detectLang.exec(this.$props.item) || [void 0]).pop();
    if (!primLocale) {
      throw new Error("Can not define primary lang of " + this.$props.item);
    }
    this.primLocale = primLocale as Locale;
  }

  mounted() {
    this.videoEl = <HTMLVideoElement>this.$el;
    // @ts-ignore
    this.secTrack = this.videoEl.textTracks.getTrackById("secSubs");
    // @ts-ignore
    this.primTrack = this.videoEl.textTracks.getTrackById("primSubs");
  }

  seeked(_e: Event): void {
    if (timestamp <= this.videoEl.currentTime) {
      return;
    }
    if (isShowing(this.primTrack) && this.primLocale !== this.secLocale) {
      showTrack(this.secTrack);
      return;
    }
    showTrack(this.primTrack);
    isTracksHidden = false;
  }

  timeupdate() {
    if (timestamp > this.videoEl.currentTime) {
      return;
    }
    !isTracksHidden && this.hideSubs();
    timestamp = this.videoEl.currentTime;
  }

  hideSubs() {
    hideTrack(this.secTrack);
    hideTrack(this.primTrack);
    isTracksHidden = true;
  }
}
export default Video;
</script>

<style scoped>
video {
  width: 100%;
  background: transparent;
}
</style>
*/