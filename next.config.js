/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    generateBuildId: async () => {
      // Return custom build ID, like the latest git commit hash
      return 'my-build-id'
    }
  }
