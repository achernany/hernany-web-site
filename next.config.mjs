import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      { source: '/selected-works', destination: '/proyectos', permanent: true },
      { source: '/approach', destination: '/enfoque', permanent: true },
      { source: '/contact', destination: '/contacto', permanent: true },
    ]
  },
}

export default withPayload(nextConfig)
