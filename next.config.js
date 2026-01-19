/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
