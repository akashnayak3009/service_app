import Booking from "../models/bookingModel.js";

export const bookings = async (req, res) => {
  try {
    const { service, username, email, place, personalId } = req.body;

    const booking = new Booking({
      service,
      username,
      email,
      place,
      personalId
    });

    const savedBooking = await booking.save();

    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(400).json({ error: 'Could not create booking', details: error.message });
  }
}


export const services = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve bookings', details: error.message });
  }
};

export const servicesById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve the booking', details: error.message });
  }
};