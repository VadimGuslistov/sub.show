import { Resource } from '@/Resources';
export type CardProps = {
   resource: Resource;
   className: string;
   onTagClick: (tag: string) => void;
   onPlay: () => void
}
