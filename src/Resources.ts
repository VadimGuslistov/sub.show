import { Locale } from "@/Locale";

export class Resource {
   public static readonly root = '/static';
   public readonly flag: string;
   public readonly path: string;
   public readonly video: string;
   public readonly poster: string;

   constructor (
      public readonly name: string[],
      public readonly locale: Locale
   ) {
      this.path = `${Resource.root}/${name.join('/')}`;
      if (this.path.includes(' ')) { throw new Error(`Path '${this.path}' includes space!`); }
      this.poster = `${this.path}/poster.png`;
      this.video = `${this.path}/${locale}.mp4`;
      this.flag = `${Resource.root}/flag/${locale}.png`;
   }

   getTrack(locale: Locale) {
      return `${this.path}/${locale}.vtt`;
   }
}

export default [
   new Resource(['Friends', 'S1', 'The_One_Where_Monica_Gets_a_Roommate'], 'GE'),
   new Resource(['Friends', 'S1', 'The_One_Where_Monica_Gets_a_Roommate'], 'EN'),
   new Resource(['Sherlock_Holmes', 'A_Game_of_Shadows', 'Meeting_Moriarty'], 'EN'),
   new Resource(['No_Country_For_Old_Men', 'Coin_Toss'], 'EN')
];