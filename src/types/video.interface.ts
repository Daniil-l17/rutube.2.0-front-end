import { Ibase } from './base.interface';
import { Icomment } from './comment.interface';
import { Iuser } from './user.interface';

export interface Ivideo extends Ibase {
  name: string;

  isPublic: boolean;

  views?: number;

  likes?: number;

  duration?: number;

  description: string;

  videoPath: string;

  thumbnailPath: string;

  user?: Iuser;

  comments?: Icomment[];
}


export interface IvideoDto extends Pick<Ivideo,'id' | 'thumbnailPath' | 'description' | 'name' | 'videoPath' | 'isPublic'>{}