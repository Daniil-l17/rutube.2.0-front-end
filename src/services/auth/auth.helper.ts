export interface IauthData {
  user: {
    id:number,
    email:string
  } | null
  acessToken:string
}