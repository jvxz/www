import type { NextConfig } from 'next'

const config: NextConfig = {
  experimental: {
    reactCompiler: true,
    viewTransition: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default config
