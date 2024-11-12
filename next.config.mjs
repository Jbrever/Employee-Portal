/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    env: {
        BASE_API_URL: 'https://1pqbgqn7-4000.inc1.devtunnels.ms/',
        LOGIN_API: 'admin/login',
        CHANGE_PASSWORD: 'admin/changePassword ',
        CREATE_PROFILE:'Employee/createEmployee',
        GET_ALL_EMPLOYEE:'Employee/getEmployee',
        DELETE_USER:'Employee/delete',
        PROJECT_LIST:'admin/projectDetails/getProjectDetails',
        CREATE_PROJECTS:'admin/projectDetails/createProjectDetails',
        DELETE_PROJECTS:'admin/projectDetails/deleteProjects/',
        UPDATE_STATUS:'admin/projectDetails/updateProjectStatus'
    }
};

export default nextConfig;