import { axiosClassic } from '../../api/axios';
import { IauthData } from './auth.helper';

const AUTH = 'auth';

export const AuthService = {
  async login(email: string | null, password: string | null) {
    const responce = await axiosClassic.post<IauthData>(`/${AUTH}/login`, {
      email,
      password,
    });
    return responce.data;
  },
  async register(email: string | null, password: string | null) {
    const responce = await axiosClassic.post<IauthData>(`/${AUTH}/register`, {
      email,
      password,
    });
    return responce.data;
  },
};
