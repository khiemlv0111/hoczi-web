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
    }
  ]
}
