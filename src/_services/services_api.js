import { fetcher, apiHandler } from '@/_helper/apiBase';
import axios from 'axios';

export async function loginAPIMethod(params) {
  
  try {
    const response = await fetcher('POST', process.env.LOGIN_API, params);
    return response;
    
  } catch (err) {
    return null;
  }
}


export async function changePassword(params) {
  try {
    const response = await apiHandler('POST', process.env.CHANGE_PASSWORD, params);
    return response;
  } catch (err) {
    return null;
  }
}

export async function createProfile(params) {
  try {
    const response = await apiHandler('POST', process.env.CREATE_PROFILE, params);
    return response;
  } catch (err) {
    return null;
  }
}

export async function deleteUser(params) {
  console.log('deleteUser',params)
  
  try {
    const response = await apiHandler('POST', process.env.DELETE_USER/params);
    return response;
  } catch (err) {
    return null;
  }
}
export async function getAllEmployee(params) {
  try {
    const response = await apiHandler('GET', process.env.GET_ALL_EMPLOYEE, params);
    return response;
  } catch (err) {
    return null;
  }
}

export async function getAllProjects(params) {
  try {
    const response = await apiHandler('GET', process.env.PROJECT_LIST, params);
    return response;
  } catch (err) {
    return null;
  }
}

export async function createProject(params) {
  try {
    const response = await apiHandler('POST', process.env.CREATE_PROJECTS, params);
    return response;
  } catch (err) {
    return null;
  }
}


export async function deleteProject(projectId) {
  try {
    // Construct the URL by appending the project ID
    const url = `${process.env.DELETE_PROJECTS}${projectId}`;
    const response = await apiHandler('POST', url, {});
    return response;
  } catch (err) {
    console.error("Error deleting project:", err);
    return null;
  }
}


export async function updateProjectStatus(params) {
  try {
    // Construct the URL by appending the project ID
    const url = process.env.UPDATE_STATUS;
    const response = await apiHandler('POST', url, params);
    return response;
  } catch (err) {
    console.error("Error deleting project:", err);
    return null;
  }
}


export const checkInEmployee = async (data, config = {}) => {
  return axios.post('https://1pqbgqn7-4000.inc1.devtunnels.ms/Employee/checkIn', data, config);
};

export const checkOutEmployee = async (data, config = {}) => {
  return axios.post('https://1pqbgqn7-4000.inc1.devtunnels.ms/Employee/checkOut', data, config);
};
// export const checkInEmployee = async ({ checkInTime, token }) => {
//   try {
//       const response = await axios.post(
//           'https://1pqbgqn7-4000.inc1.devtunnels.ms/Employee/checkIn', 
//           { checkInTime },
//           {
//               headers: {
//                   'auth-token': `Bearer ${token}`,
//                   'Content-Type': 'application/json'
//               }
//           }
//       );
//       return response.data;  // Return the response data
//   } catch (error) {
//       console.error('Error during check-in:', error);
//       throw error;  // Rethrow error to handle it in the component
//   }
// };

// Check-Out API call with headers
// export const checkOutEmployee = async ({ checkOutTime, token }) => {
//   try {
//       const response = await axios.post(
//           'https://1pqbgqn7-4000.inc1.devtunnels.ms/Employee/checkOut', 
//           { checkOutTime },
//           {
//               headers: {
//                   'auth-token': `${token}`,
//                   'Content-Type': 'application/json'
//               }
//           }
//       );
//       return response.data;  // Return the response data
//   } catch (error) {
//       console.error('Error during check-out:', error);
//       throw error;  // Rethrow error to handle it in the component
//   }
// };
