import Customer from '../models/customer.js'
import Event from '../models/event.js'
import registrations from '../models/registrations.js'

const dataCleaner = {

  cleanCustomer: ( customer ) => {
    return {
      id: customer.CUSTOMER_ID,
      name: customer.CUSTOMER_NAME,
      password: customer.PASSWORD,
      email: customer.EMAIL 
    }
  },  

  cleanCustomers: ( customers ) => {
    var results = []
    for( const c in customers) {
      results.push(dataCleaner.cleanCustomer(customers[c]))
    }
    return results
  },

  cleanEvent: ( event ) => {
    return {
      id: event.EVENT_ID,
      code: event.EVENT_CODE,
      title: event.TITLE,
      description: event.DESCRIPTION 
    }
  },  

  cleanEvents: ( events ) => {
    var results = []
    for( const e in events) {
      results.push(dataCleaner.cleanEvent(events[e]))
    }
    return results
  }

  ,cleanregistrations: ( event ) => {
    return {
      REGISTRATIONS_ID:registrations.REGISTRATIONS_ID,
      REGISTRATIONS_DATE: registrations.REGISTRATIONS_DATE,
      NOTES: registrations.NOTES,
      EVENT_ID:registrations.EVENT_ID,
      CUSTOMER_ID:registrations.CUSTOMER_ID, 
    }
  },  

  cleanregistrations: ( events ) => {
    var results = []
    for( const r in registrations) {
      results.push(dataCleaner.cleanregistrations(registrations[r]))
    }
    return results
  }

}

export default dataCleaner