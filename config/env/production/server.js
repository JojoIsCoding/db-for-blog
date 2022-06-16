module.exports = ({ env }) => ({
    proxy: true,
    url: env('MY_HEROKU_URL'),
    port: process.env.PORT || 1337,
    app: { 
      keys: env.array('APP_KEYS')
    },
  })