import { Ivideo } from "../../../types/video.interface";
import { api } from "../api";



export const movie = api.injectEndpoints({
  endpoints: builder => ({
    PopularMovie: builder.query<Ivideo[],null>({
      query: () => ({
        url: '/video/most-popular'
      })
    })
  })
})

export const { usePopularMovieQuery} = movie