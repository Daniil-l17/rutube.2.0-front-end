import { toastr } from "react-redux-toastr";

export const getContentType = () => ({
  'Content-Type': 'application/json',
});

export const errorCatch = (error: any): string =>
  error.response && error.data
    ? typeof error.response.data.message === 'object'
      ? error.response.data.message[0]
      : error.response.data.message
    : error.message;


    export const toastrError = (error:any,title = 'Error request') => {
      const message = errorCatch(error)
      toastr.error(title,message)
      throw message
    }