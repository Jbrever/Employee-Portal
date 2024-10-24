import Axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = process.env.BASE_API_URL;

function generateHeaders(contentType = 'application/json') {
  const headers = {
    'Content-Type': contentType,
  };

  const token = localStorage.getItem('auth-token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return { headers };
}

async function makeRequest(method, url, params, ) {
  try {


    if (method === 'GET') {
      const response = await Axios.get(`${API_BASE_URL}${url}`, params );
      return handleLoginResponse(response.data);
    } else {
      const response = await Axios.post(`${API_BASE_URL}${url}`, params);
      return handleLoginResponse(response.data);
    }
  } catch (error) {
    return errorResponse({ message: error.response.data.message });
  }
}

async function fetcher(method, url, params) {
  return makeRequest(method, url, params);
}




function handleLoginResponse(response) {
  if (response.status === 1) {
    return successLoginResponse(response);
  } else {
    return errorLoginResponse(response);
  }
}

function successLoginResponse(response) {
  const { data, message,status } = response;
  return {
    status: status,
    data: data,
    message,
 
  };
}

function errorLoginResponse(response) {
  return {
    status: false,
    data: null,
    message: response?.message || 'An error occurred.',
  };
}


///// API METHODS GENRAL //////////////////////////////////

async function apiHandler(method, url, params) {
  return apiRequestMethod(method, url, params);
}


async function apiRequestMethod(method, url, params, ) {
  try {


    if (method === 'GET') {
      const response = await Axios.get(`${API_BASE_URL}${url}`, params );
      return handleResponse(response.data);
    } else {
      const response = await Axios.post(`${API_BASE_URL}${url}`, params);
      return handleResponse(response.data);
    }
  } catch (error) {
    return errorResponse({ message: error.response.data.message });
  }
}

function handleResponse(response) {
  if (response.status === 1) {
    return successResponse(response);
  } else {
    return errorResponse(response);
  }
}


function successResponse(response) {
  const { data, message,status } = response;
  return {
    status: status,
    data: data,
    message,

  };
}
function errorResponse(response) {
  return {
    status: false,
    data: null,
    message: response?.message || 'An error occurred.',
  };
}


export { fetcher ,apiHandler};
