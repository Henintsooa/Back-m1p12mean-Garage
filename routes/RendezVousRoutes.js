const express = require('express');
const router = express.Router();
const RendezVousController = require('../controllers/rendezVousController');

router.get('/changeravancement', RendezVousController.changerAvancementRendezVous);
router.get('/enattente', RendezVousController.getAllRendezVousEnAttenteByClient);
router.post('/confirmation', RendezVousController.confirmerNouvelleDate);
router.post('/proposer', RendezVousController.proposerNouvelleDate);
router.post('/valider', RendezVousController.validerRendezVous);
router.get('/mecaniciens', RendezVousController.getMecaniciensDisponibles);
router.post('/', RendezVousController.createRendezVous);
router.get('/detailsdevis', RendezVousController.getDetailsDevisByRendezVous);
router.get('/acceptes', RendezVousController.getAllRendezVousValidesByClient);
router.get('/nonvalides', RendezVousController.getAllRendezVousNonValides);
module.exports = router;
