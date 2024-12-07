const express = require('express');
const { createReservation, getReservations, deleteReservation } = require('../controllers/reservationController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, createReservation);
router.get('/', protect, getReservations);
router.delete('/:id', protect, deleteReservation);

module.exports = router;
