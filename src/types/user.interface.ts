import { Ibase } from "./base.interface"
import { Ivideo } from "./video.interface"

export interface Iuser extends Ibase {


  email: string

  name: string

  isVerified?: boolean


  subscribersCount?: number


  description: string

  avatarPath: string

  videos?: Ivideo[]


  subscriptions: ISubscription[]


} 




export interface ISubscription extends Ibase {
  toChannel: Iuser
} 