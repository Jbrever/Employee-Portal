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
        SIGNUP_API: 'admin/addNewUser',
    }
};

export default nextConfig;
