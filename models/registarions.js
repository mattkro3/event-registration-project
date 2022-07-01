import mongoose from 'mongoose'
import s from 'mongoose-sequence'
const sequence = s(mongoose)

const { Schema, model } = mongoose

const registraionsSchema = new Schema({
    registration_id:Number,
    registration_date: Number,
    notes: String,
    event_id:Number,
    customer_id: Number,
})

registraionsSchema.plugin(sequence, {inc_field: ' registration_id'}) 

const registraions = model('registraions', registraionsSchema )
export default registraions