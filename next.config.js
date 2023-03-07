/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images:{
    loader:'akamai',
    path:["/",""],
    formats:["image/webp"]
  },

}

module.exports = nextConfig
