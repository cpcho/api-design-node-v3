import { Router } from 'express'
import controllers from './item.controllers'

const router = Router()
// const callback = (req, res) => {
//   res.send({message: 'hi'})
// }

// /api/item
router
  .route('/test')
  .get((req, res)=> {
    res.status(404).send({ message: 'not found'})
    // res.status(404).json({ message: 'not found'})
    // res.end()
  })
  .post()

// /api/item/:id
router
  .route('/:id')
  .get()
  .put()
  .delete()

export default router
