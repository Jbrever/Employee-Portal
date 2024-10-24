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
        DELETE_USER:'Employee/delete'
    }
};

export default nextConfig;
