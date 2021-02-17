const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    runtimeCaching,
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
})
