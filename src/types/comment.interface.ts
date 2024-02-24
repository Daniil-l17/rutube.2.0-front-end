import { Ibase } from "./base.interface"
import { Iuser } from "./user.interface"
import { Ivideo } from "./video.interface"

export interface Icomment extends Ibase {
  user: Iuser
  videos?: Ivideo
  message:string
} 

export interface ICommentDto extends Pick<Icomment, 'message'>{
  videoId: number
}