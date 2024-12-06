/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/quienes',
        destination: '/',
        permanent: true, // esto es importante para que Google entienda que es permanente
      },
    ]
  },
}

module.exports = nextConfig 