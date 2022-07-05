import mongoose from 'mongoose'
import s from 'mongoose-sequence'
const sequence = s(mongoose)

const { Schema, model } = mongoose

const registrationsSchema = new Schema({
    
    REGISTRATIONS_ID:Number,
    REGISTRATIONS_DATE: Date,
    NOTES: String,
    EVENT_ID:Number,
    CUSTOMER_ID:Number,

})

registrationsSchema.plugin(sequence, {inc_field: ' REGISTRATIONS_ID'}) 

const registrations = model('registraions', registrationsSchema )
export default registrations