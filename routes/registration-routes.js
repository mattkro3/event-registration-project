import express from 'express'
var registrationsRouter = express.Router()
import registrationsController from '../registrations/registrations-controller.js'



// GET /api/registrations
registrationsRouter.get('/', function(req, res) {
    registrationsController.getAllregistrations(req, res)
  })

// GET /api/registrations/:registrationID
registrationsRouter.get('/:registrations_id', function(req, res) {
    registrationsController.getregistrationsByID(req, res)
  })


// POST /api/registration

registrationsRouter.post('/', function(req, res) {
    registrationsController.postregistrations(req, res)
  })
// DELETE /api/registrations/:registrationID

registrationsRouter.delete('/:registrations_id', function(req, res) {
    registrationsController.deleteregistrationsByID(req, res)
  })