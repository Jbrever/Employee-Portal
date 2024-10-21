import { fetcher } from '@/_helper/apiBase';

export async function apiHandler(params) {
  try {
    const response = await fetcher('POST', process.env.LOGIN_API, params);
    return response;
  } catch (err) {
    return null;
  }
}


export async function signUpApi(params) {
  try {
    const response = await fetcher('POST', process.env.SIGNUP_API, params);
    return response;
  } catch (err) {
    return null;
  }
}