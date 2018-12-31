import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'


export const app = express()

const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

router.get('/me', (req, res) => {
    res.send({me: 'hello'})
})

const routes = ['get /cat', 'get cat/:id', 'post /cat', 'put /cat/:id', 'delete /cat:/id']

router.route('/cat')
    .get()
    .post()

router.route('/cat/:id')
    .get()
    .put()
    .delete()

app.use('/api', router)
// CRUD
app.get('/', (req, res, next) => {
    // res.send({ data: 1})
    next()
})

app.get('/', (req, res) => {
    res.send({ data: 2})
})


app.post('/data', (req, res) => {
    console.log(req.body)
    res.send({ ok: true})
})

const port = process.env.PORT

export const start = () => {
  app.listen(port, () => {
      console.log(`server on ${port}`)
  })  
}
