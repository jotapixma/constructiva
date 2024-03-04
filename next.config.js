/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  // output: 'export',
  // reactStrictMode: true,
  // swcMinify: true,
  distDir: 'build',
  images: {
    unoptimized: true,
    domains: ['picsum.photos','i.picsum.photos' ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `@import "settings.module.scss";`
  },
}

module.exports = nextConfig
