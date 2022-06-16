module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});

let port = process.env.PORT || 1337;

app.listen(port, ()=> {
  console.log(`Qpp is running on the port ${port}`)
})