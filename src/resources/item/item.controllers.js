import { Item } from './item.model'
import mongoose from 'mongoose'
import { connect } from '../../utils/db'

const run = async () => {
    await connect('mongodb://localhost:27017/api-test')
    const item  = await Item.create ({
        name: 'Clean up',
        createdBy: mongoose.Types.ObjectId(),
        list: mongoose.Types.ObjectId()
    })
    
    const updated = await Item.findByIdAndUpdate(
        item._id, 
        { name: 'eat' }, 
        { new: true }
    ).exec()
    
    
    const removed = await Item.findByIdAndRemove(item._id).exec()
    
    
    // console.log(await Item.find({}).exec())
    // console.log(item)
    // console.log(updated)
    console.log(removed)
}

/*
    GET / Read many
    GET /:id Read one
    POST / Create one
    PUT /:id Update one
    DELETE /:id Delete one
*/

run()
