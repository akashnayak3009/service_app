import { bookings, services, servicesById } from '../controllers/controllers.js';
import express from 'express';

const router = express.Router();


router.post('/bookings', bookings);

router.get('/services', services);

router.get('/services/:id', servicesById);

export default router;
