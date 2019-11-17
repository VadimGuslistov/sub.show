import { Locale } from "@/Locale";

export class Resource {
   public static readonly root = '/static';
   /** path to flag icon */
   public readonly flag: FlagPath;
   /** path to dir with video's resources */
   public readonly path: Path;
   /** path to video's file */
   public readonly video: VideoPath;
   /** path to video's poster */
   public readonly poster: PosterPath;
   /** All tags of videos (season name or film nam, episode or fragment name) */
   public readonly tags: Tag[];

   constructor (
      titles: Tag[],
      /** title of the video */
      public readonly title: string,
      /** Locale of video's audiotrack */
      public readonly locale: Locale,
   ) {
      this.tags = titles.concat([locale]);
      this.path = `${Resource.root}/${titles.concat([title]).join('/')}`;
      if (this.path.includes(' ')) { throw new Error(`Path '${this.path}' includes space!`); }
      this.poster = `${this.path}/poster.png`;
      this.video = `${this.path}/${locale}.mp4`;
      this.flag = `${Resource.root}/flag/${locale}.png`;
   }

   /** Returns path to textTrack for `locale` */
   getTrack(locale: Locale): string {
      return `${this.path}/${locale}.vtt`;
   }
}

export default [
   new Resource([], 'Knocking_on_heavens_door', '[GE]'),
   new Resource(['Friends', 'S1'], 'E1', '[GE]'),
   new Resource(['Friends', 'S1'], 'E1', '[EN]'),
   new Resource(['Sherlock_Holmes', 'A_Game_of_Shadows'], 'Meeting_Moriarty', '[EN]'),
   new Resource(['No_Country_For_Old_Men'], 'Coin_Toss', '[EN]')
];

export type Tag = string;
export type Path = string;
export type FlagPath = string;
export type VideoPath = string;
export type PosterPath = string;