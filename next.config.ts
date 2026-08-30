import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: isGitHubPages ? 'export' : undefined,
  basePath: isGitHubPages ? '/asia-education-institution' : '',
  assetPrefix: isGitHubPages ? '/asia-education-institution/' : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
