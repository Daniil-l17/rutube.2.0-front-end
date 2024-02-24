import { axiosClassic } from "../../api/axios"
import { Iuser } from "../../types/user.interface"

export const UserServices = {
  async getAll(){
    return axiosClassic.get<Iuser[]>('/user')
  },
  async getUser(id:number){
    return axiosClassic.get<Iuser>(`/user/by-id/${id}`)
  },
}