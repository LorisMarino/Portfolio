const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const mailer = require('./mailer')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(bodyParser.json())

    server.get('/portfolio/:id', (req, res) => {
      const actualPage = '/portfolio'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.post('/api/contact', (req, res) => {
      const { name, email, subject, text } = req.body

      mailer({ name, email, subject, text })
        .then(() => {
          res.send('success')
        })
        .catch(error => {
          if (error) res.send('error')
        })
    })

    server.get('*', (req, res) => handle(req, res))

    server.listen(port, err => {
      if (err) throw err
      console.log(`Listening on http://localhost:${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
