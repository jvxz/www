import type { NextConfig } from 'next'

const config: NextConfig = {
  experimental: {
    reactCompiler: true,
    viewTransition: true,
  },
}

export default config
