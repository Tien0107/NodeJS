const Reservation = require('../models/reservation');

exports.createReservation = async (req, res) => {
    try {
        const { service_id, date, time, number_of_people } = req.body;
        const reservation = new Reservation({
            user_id: req.user.id,
            service_id,
            date,
            time,
            number_of_people,
        });
        await reservation.save();
        res.status(201).json(reservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find({ user_id: req.user.id }).populate('service_id');
        res.json(reservations);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteReservation = async (req, res) => {
    try {
        await Reservation.findByIdAndDelete(req.params.id);
        res.json({ message: 'Reservation deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
