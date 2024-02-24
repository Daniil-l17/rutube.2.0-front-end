import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IauthData } from '../../services/auth/auth.helper';
import { interss } from './auth.interface';
import { toastrError } from '../../utils/apiInfoJson';
import { AuthService } from '../../services/auth/auth.services';
import { toastr } from 'react-redux-toastr';

export const register = createAsyncThunk<IauthData, interss>(
  'auth/register',
  async ({ email, password }, thunkAPI) => {
    try {
      const responce = await AuthService.register(email, password);
      toastr.success('Регистрация', 'Успешно выполнена');
      return responce;
    } catch (e) {
      toastrError(e);
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export const login = createAsyncThunk<IauthData, interss>(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const responce = await AuthService.login(email, password);
      toastr.success('Вход в систему', 'Успешно выполнена');
      return responce;
    } catch (e) {
      toastrError(e);
      return thunkAPI.rejectWithValue(e);
    }
  },
);

interface userS {
  id: number;
  email: string;
}

interface slice {
  user: null | userS;
  loading: boolean;
  acessToken: string;
}

const initialState: slice = {
  user: null,
  loading: false,
  acessToken: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logoutFromAccount: state => {
      (state.user = null), (state.acessToken = ''), (state.loading = false);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.acessToken = payload.acessToken;
      })
      .addCase(register.rejected, state => {
        (state.loading = false), (state.user = null), (state.acessToken = '');
      })
      .addCase(login.pending, state => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.acessToken = payload.acessToken;
      })
      .addCase(login.rejected, state => {
        state.loading = false;
        state.user = null;
        state.acessToken = '';
      });
  },
});

export const authUser = (state: any) => !!state.auth.user;
export const authReducer = authSlice.reducer;
export const { actions } = authSlice;
