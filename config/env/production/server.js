module.exports = ({ env }) => ({
    proxy: true,
    url: env('MY_HEROKU_URL'),
    app: { 
      keys: env.array('APP_KEYS')
    },
  })

  let port = process.env.PORT || 1337;

app.listen(port, ()=> {
  console.log(`Qpp is running on the port ${port}`)
})