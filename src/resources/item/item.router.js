import { Router } from 'express'
import controllers from './item.controllers'

const router = Router()
const callback = (req, res) => {
  res.send({message: 'hi'})
}

// /api/item
router
  .route('/')
  .get(callback)
  .post(callback)

// /api/item/:id
router
  .route('/:id')
  .get(callback)
  .put(callback)
  .delete(callback)

export default router
