import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import uploadRoute from './routes/uploadRoute';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'routes: auth, user, cat',
  });
});
router.use('/upload', uploadRoute)

export default router;
