module.exports = {
  apps: [
    {
      name: 'hoczi-api',
      script: './dist/index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'development',
        PORT: 8608
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8608
      }
    },
    {
      // AI ingestion/indexing jobs (see src/worker.ts). Keep a single instance.
      name: 'hoczi-ai-worker',
      script: './dist/worker.js',
      instances: 1,
      autorestart: true,
      watch: false,
      kill_timeout: 120000,
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
