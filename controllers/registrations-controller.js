import registrations from '../models/registrations.js'
import dataCleaner from '../utilities/data-cleaner.js'

const registrationsController = {
  
  // GET /api/registrations/
  getAllregistrations: function(req, res) {
    registrations.find({}, '', function(err, registrations){
      if(err|| !registrations || registrations.length == 0 ) {
        res.sendStatus(404)
      } else {
        res.status(200).send(dataCleaner.cleanCustomers(customers))
      }
    }) 
  }, 
// GET /api/registrations/:registrations_id
getregistrationsByID: function(req, res) {
    registrations.findOne({'REGISTRATIONS_ID': req.params.registrations_id}, '', function(err, registrations){
      if(err || ! registrations) {
        res.sendStatus(404)
      } else {
        res.status(200).send(dataCleaner.cleanCustomer(registrations))
      }
    })
  },





  // GET /api/customers/:customer_id
  getCustomerByID: function(req, res) {
    Customer.findOne({'CUSTOMER_ID': req.params.customer_id}, '', function(err, customer){
      if(err || ! customer) {
        res.sendStatus(404)
      } else {
        res.status(200).send(dataCleaner.cleanCustomer(customer))
      }
    })
  },

  // POST /api/registrations/
  postregistrations: function(req, res) {
    registrations.create({ REGISTRATIONS_DATE: req.body.date, NOTES: req.body.notes, EVENT_ID: req.body.event_id,CUSTOMER_ID: req.body.customer_id}).then(
      (r) => { 
        res.location(`/api/registrations/${r.REGISTRATIONS_ID}`)
        res.sendStatus(201)
      }, // OK
      () => res.sendStatus(500) // Error
    )
  },

  // DELETE /api/registrations/:registrations_id
  deleteregistrationsByID: function(req, res) {
    registrations.deleteOne({'REGISTRATIONS_ID': req.params.registrations_id}, function(err){
      if(err) {
        res.sendStatus(500)
      } else {
        res.sendStatus(200)
      }
    })
  }

} 

export default registrationsController
