import { axiosClassic } from "../../api/axios"
import { Ivideo } from "../../types/video.interface"

export const VideoServices = {
  async getAllVideo(){
    return axiosClassic.get<Ivideo[]>('/video')
  },
  async getMostPopular(id:number){
    return axiosClassic.get<Ivideo>(`/video/most-popular`)
  },
}