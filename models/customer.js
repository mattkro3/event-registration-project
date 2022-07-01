import mongoose from 'mongoose'
import s from 'mongoose-sequence'
const sequence = s(mongoose)

// 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

const { Schema, model } = mongoose

const customerSchema = new Schema({
  CUSTOMER_ID: Number,
  CUSTOMER_NAME: String,
  PASSWORD: String,
  EMAIL: String
})

customerSchema.plugin(sequence, {inc_field: 'CUSTOMER_ID'}) 

const Customer = model('Customer', customerSchema )
export default Customer