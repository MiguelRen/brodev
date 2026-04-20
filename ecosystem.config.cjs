module.exports = {
  apps: [
    {
      name: 'PlusBienes-Nitro',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './server/index.mjs',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        // Hostinger specific env vars
        CRON_SECRET: 'YOUR_PRODUCTION_SECRET'
      }
    }
  ]
}
